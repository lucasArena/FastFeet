export function signInRequest(id) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { id },
    };
}

export function signInSuccess(deliveryguy) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { deliveryguy },
    };
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT',
    };
}
