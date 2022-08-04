import { Client } from '@/types';

export const run = async (client: Client): Promise<void> => {
  await client.connect();
};
