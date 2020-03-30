import Bee from 'bee-queue';

import CreateOrderMail from '../app/jobs/CreateOrderMail';
import CancellationOrderMail from '../app/jobs/CancellationOrderMail';

import redisConfig from '../config/redis';

const jobs = [CreateOrderMail, CancellationOrderMail];

class Queue {
    constructor() {
        this.queues = {};
        this.init();
    }

    init() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                bee: new Bee(key, {
                    redis: redisConfig,
                }),
                handle,
            };
        });
    }

    add(queue, data) {
        return this.queues[queue].bee.createJob(data).save();
    }

    process() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key].bee
                .on('failed', this.handleFailure)
                .process(handle);
        });
    }

    handleFailure(job, err) {
        console.log(`Queue ${job.queue.name}: FAILED`, err);
    }
}

export default new Queue();
