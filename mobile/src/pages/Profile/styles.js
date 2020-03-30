import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled.View`
    padding: 0 40px;
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    align-self: center;
    margin: 100px 0 50px;
`;

export const InfoGroup = styled.View`
    margin-bottom: 10px;
`;

export const InfoTitle = styled.Text`
    color: #999;
    font-size: 14px;
`;

export const InfoContent = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

export const SignOutButton = styled(RectButton)`
    margin-top: 20px;
    align-self: stretch;
    background: #e74040;
    padding: 10px 20px;
    border-radius: 4px;
`;

export const SignOutButtonText = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
`;
