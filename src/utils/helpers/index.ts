import { BigNumber, Wallet } from "ethers";

// We're using BigNumber from ethers which helps 
// with really large numbers.  Most numbers we're working with
// on chain are 10 * 10^18.
export const ETHER = () => BigNumber.from(10).pow(18);

export const bigNumberToDecimal = (value: BigNumber, base = 18): number => {
  const divisor = BigNumber.from(10).pow(base)
  return value.mul(10000).div(divisor).toNumber() / 10000
}

export const getDefaultRelaySigningKey = (): string => {
  console.warn("Creating random signing key, this searcher will not be building a reputation for next run")
  return Wallet.createRandom().privateKey;
};
