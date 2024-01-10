import { http, createConfig } from '@wagmi/core';
import { mainnet, sepolia } from '@wagmi/core/chains';
import { injected, metaMask } from 'wagmi/connectors';

export const WagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
