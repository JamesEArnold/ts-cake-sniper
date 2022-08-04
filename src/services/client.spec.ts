import { ETHEREUM_RPC_URL } from "@/config";
import { clientEth } from "@/services/client";
import { providers } from 'ethers';
import { logger } from '@/utils/logger';

jest.mock('ethers');
jest.mock('@/utils/logger');

const mockStaticJsonRpcProvider = jest.fn();

describe('clientEth', () => {
  describe(clientEth.connect, () => {
    describe('happy path', () => {
      it('connects to the default provider', async () => {
        (providers.StaticJsonRpcProvider as unknown as jest.Mock).mockImplementation((url: string) => mockStaticJsonRpcProvider(url));
        
        expect(await clientEth.connect()).toEqual(true);
        expect(mockStaticJsonRpcProvider).toHaveBeenCalledWith(ETHEREUM_RPC_URL);
      });
    });

    describe('sad path', () => {
      it('fails to connect to the client', async () => {
        (providers.StaticJsonRpcProvider as unknown as jest.Mock).mockImplementation(() => {
          throw new Error();
        });

        expect(await clientEth.connect()).toEqual(false);
        expect(logger.error).toHaveBeenCalled();
      });
    });
  });
});
