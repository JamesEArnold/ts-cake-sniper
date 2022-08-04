import { getDefaultRelaySigningKey } from '@/utils/helpers';

// Our Node URL, or defaults to the localhost
export const ETHEREUM_RPC_URL = process.env.ETHEREUM_RPC_URL || 'http://127.0.0.1:8545';

// Wallet private key
export const PRIVATE_KEY = process.env.PRIVATE_KEY || ""

if (PRIVATE_KEY === "") {
  console.warn("Must provide PRIVATE_KEY environment variable")
  process.exit(1)
}
// Flashbots relay signing key to build reputation, or a generic private key
export const FLASHBOTS_RELAY_SIGNING_KEY = process.env.FLASHBOTS_RELAY_SIGNING_KEY || getDefaultRelaySigningKey();

if (FLASHBOTS_RELAY_SIGNING_KEY === "") {
  console.warn("Must provide FLASHBOTS_RELAY_SIGNING_KEY. Please see https://docs.flashbots.net/flashbots-auction/searchers/quick-start")
  process.exit(1)
}

// How much of your profits are you paying to the Flashbots miner.  
export const MINER_REWARD_PERCENTAGE = parseInt(process.env.MINER_REWARD_PERCENTAGE || '80');

const HEALTHCHECK_URL = process.env.HEALTHCHECK_URL || ""
