# EthCourseMarketplace

EthCourseMarketplace is a decentralized application (dApp) built on the Ethereum blockchain. It allows users to buy and sell courses using Ethereum. The application leverages smart contracts to manage course ownership and transactions securely.

## Features

### For Users
1. **Course Marketplace**: Browse and purchase courses using Ethereum.
2. **Course Ownership**: Securely own and manage your purchased courses.
3. **Course Activation**: Courses are activated upon purchase and can be accessed immediately.
4. **Course Deactivation**: Courses can be deactivated if purchase data is incorrect.
5. **Email Verification**: Ensure correct email input for order verification.

### For Developers
1. **Smart Contracts**: Utilizes Solidity smart contracts for managing course transactions.
2. **Environment Configuration**: Easily switch between development and production environments using `.env` files.
3. **Gas Fee Calculation**: Custom settings for gas and transaction fees.
4. **Truffle Integration**: Manage and deploy smart contracts using Truffle.
5. **Next.js Framework**: Built with Next.js for server-side rendering and static site generation.

## Prerequisites

- Node.js (v17)
- Python 3
- Ganache (for local blockchain)
- Metamask (browser extension)

## Installation

1. Install dependencies:

```sh
npm install
```

2. Set up the virtual environment:

```sh
python3 -m venv venv
source venv/bin/activate
pip install setuptools
```

3. Configure environment variables:
Create a .env.development file with the following content:
5777

```sh
NEXT_PUBLIC_TARGET_CHAIN_ID=1337
NEXT_PUBLIC_NETWORK_ID=5777
```

4. Install and configure Metamask:

    - Install the Metamask extension in your browser.
    - Configure Metamask to connect to your local Ganache network.

5. Start Ganache and import the truffle-config.js file.

## Running the Application

1. **Build the application:**

```sh
npm run build
```

2. **Start the development server:**

```sh
npm run dev
```

3. **Deploy the smart contracts:**

```sh
truffle migrate --reset
```

4. **Open the application in your browser:**

[http://localhost:3000](http://localhost:3000)

## Commands

- **Build the application:**

```sh
npm run build
```

- **Start the development server:**

```sh
npm run dev
```

- **Deploy smart contracts:**

```sh
truffle migrate --reset
```

## Important Files

- **Smart Contracts**: Located in the `contracts` directory.
- **Environment Configuration**: `.env.development` and `.env.production` files.
- **Truffle Configuration**: `truffle-config.js`
- **Next.js Configuration**: `next.config.js`