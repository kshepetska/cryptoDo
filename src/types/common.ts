import {AxiosError} from 'axios';

export type ResponseError = AxiosError<{message: string}>;
export type Auth = {
  tokens: {access: string};
  user: {
    id: string;
    email: string;
    referralCode: string;
    isKol: boolean;
    role: string;
    isNew: boolean;
  };
};
export type AuthAccess = {access: string};

export enum AppStage {
  development = 'development',
  production = 'production',
  staging = 'staging',
}
