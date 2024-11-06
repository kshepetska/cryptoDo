import {AxiosError} from 'axios';
import {ResponseError} from '../types/common';

interface StateSignUp {
  messageFromRequestSignUp?: string;
}

interface StateSignIn {
  messageFromRequestSignIn?: string;
}

export const handleSignUpError = (
  error: unknown,
  setState: React.Dispatch<React.SetStateAction<StateSignUp>>
) => {
  if (error instanceof Error || (error as AxiosError)?.isAxiosError) {
    const err = error as ResponseError;
    const msg = err.response?.data.message;
    setState({
      messageFromRequestSignUp: msg,
    });
  }
};

export const handleSignInError = (
  error: unknown,
  setState: React.Dispatch<React.SetStateAction<StateSignIn>>
) => {
  if (error instanceof Error || (error as AxiosError)?.isAxiosError) {
    const err = error as ResponseError;
    const msg = err.response?.data.message;
    setState({
      messageFromRequestSignIn: msg,
    });
  }
};
