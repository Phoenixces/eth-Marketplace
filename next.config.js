// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "thrangra.sirv.com"
//     ]
//   }
// }

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "thrangra.sirv.com"
    ]
  },
  env: {
    NEXT_PUBLIC_TARGET_CHAIN_ID: process.env.NEXT_PUBLIC_TARGET_CHAIN_ID,
    NEXT_PUBLIC_NETWORK_ID: process.env.NEXT_PUBLIC_NETWORK_ID,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      console.log('NEXT_PUBLIC_TARGET_CHAIN_ID:', process.env.NEXT_PUBLIC_TARGET_CHAIN_ID);
      console.log('NEXT_PUBLIC_NETWORK_ID:', process.env.NEXT_PUBLIC_NETWORK_ID);
    }
    return config;
  },
}
