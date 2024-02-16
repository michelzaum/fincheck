import { sleep } from '../../utils/sleep';
import { httpClient } from '../httpClient';

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  accessToken: string;
}

export async function signup(params: SignUpParams) {
  await sleep();
  const { data } = await httpClient.post<SignUpResponse>('/auth/signup', params);
  return data;
}
