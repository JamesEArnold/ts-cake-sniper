import { ETHEREUM_RPC_URL } from '@/config';
import { Client, StaticJsonRpcProvider } from '@/types';
import { providers } from 'ethers';
import { logger, log } from '@/utils/logger';

const connect = async (): Promise<boolean> => {
  try {
    const provider: StaticJsonRpcProvider = new providers.StaticJsonRpcProvider(ETHEREUM_RPC_URL);
    clientEth.provider = provider;
    return true;
  } catch (error) {
    logger.error(`${log.client.connectionError}${JSON.stringify(error)}`)
    return false;
  }
};

export const clientEth: Client = {
  connect,
};
