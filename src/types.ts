import { StaticJsonRpcProvider } from '@ethersproject/providers';
export { StaticJsonRpcProvider } from '@ethersproject/providers';

export interface Client {
  connect: () => Promise<boolean>,
  provider?: StaticJsonRpcProvider,
};
