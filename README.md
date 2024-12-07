# EthCourseMarketplace

EthCourseMarketplace is a decentralized application (dApp) built on the Ethereum blockchain. It allows users to buy and sell courses using Ethereum. The application leverages smart contracts to manage course ownership and transactions securely.

## Features

### For Users and Admin user
1. **Course Marketplace**: Browse and purchase courses using Ethereum.
2. **Course Ownership**: Securely own and manage your purchased courses.
3. **Manage Courses**: For Admin User
3. **Course Activation**: Courses are activated upon purchase by Admin.
4. **Course Deactivation**: Courses can be deactivated if purchase data is incorrect.
5. **Email Verification**: Ensure correct email input for order verification.

## Tech Stack

1. **Next.js**: Framework for building server-side rendered React applications.
2. **React**: JavaScript library for building user interfaces.
3. **Tailwind CSS**: Utility-first CSS framework for styling.
4. **SWR**: React hooks library for data fetching.
5. **Ethereum**: Blockchain platform used for deploying and interacting with smart contracts.
6. **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.
7. **Truffle**: Development framework for Ethereum.
8. **Ganache**: Personal blockchain for Ethereum development.
9. **Metamask**: Browser extension for managing Ethereum accounts and interacting with dApps.
10. **Solidity**: Programming language for writing smart contracts.
11. **Node.js**: JavaScript runtime for running the application.

## Blockchain Terminologies

1. **Consensus Algorithm**:
   - The project uses Ethereum, which primarily operates on a Proof of Work (PoW) consensus mechanism. Ethereum is transitioning to Proof of Stake (PoS) with Ethereum 2.0.
   - **Why PoW**: PoW is a well-established and secure consensus mechanism that has been used by Bitcoin and Ethereum for many years. It ensures the security and decentralization of the network by requiring miners to solve complex mathematical problems to validate transactions and create new blocks.
   - **Alternatives**:
     - **Proof of Stake (PoS)**: PoS is more energy-efficient than PoW as it does not require extensive computational work. Validators are chosen based on the number of tokens they hold and are willing to "stake" as collateral. Ethereum is transitioning to PoS to improve scalability and reduce energy consumption.
     - **Delegated Proof of Stake (DPoS)**: DPoS is a variation of PoS where token holders vote for a small number of delegates who are responsible for validating transactions and creating new blocks. It is more scalable but can be less decentralized.
     - **Proof of Authority (PoA)**: PoA relies on a small number of trusted validators who are pre-approved to validate transactions and create new blocks. It is highly efficient but less decentralized.

2. **Gas Fee and Transaction Fee**:
   - Gas fees are used to compensate miners for the computational work of processing transactions and securing the network.
   - The transaction fee is calculated as `GAS USED * GAS PRICE`.
   - The gas price is composed of the base fee (determined by Ethereum) and a tip (max priority fee per gas) to incentivize miners.
   - Example figures:
     - **Base Fee**: 39.791392694 Gwei
     - **Max Priority Fee (Tip)**: 2 Gwei
     - **Gas Price**: Base Fee + Tip = 39.791392694 Gwei + 2 Gwei = 41.791392694 Gwei
     - **Gas Used**: 21000 units
     - **Transaction Fee**: Gas Used * Gas Price = 21000 * 41.791392694 Gwei = 877,619.246574 Gwei
     - **Burnt Fee**: Base Fee * Gas Used = 39.791392694 Gwei * 21000 = 835,619.246574 Gwei
     - **Rest to Miner**: Tip * Gas Used = 2 Gwei * 21000 = 42,000 Gwei

3. **Smart Contracts**:
   - The project uses Solidity smart contracts to manage course ownership and transactions.
   - Key smart contracts include:
     - `CourseMarketplace.sol`: Manages the marketplace for buying and selling courses.
     - `Migrations.sol`: Handles the deployment of contracts.

4. **Other Blockchain Terminologies**:
   - **Nonce**: A unique number that ensures each transaction can only be processed once.
   - **Block**: A collection of transactions that are processed and added to the blockchain.
   - **Address**: A unique identifier for an account on the Ethereum network.
   - **ABI (Application Binary Interface)**: A standard way to interact with smart contracts.

5. **Current ETH Price and Conversions**
- **1 ETH** = 1,000,000,000 Gwei (1 billion Gwei)
- **1 ETH** = 1,000,000,000,000,000,000 Wei (1 quintillion Wei)
- **Current ETH Price**: Approximately $1,800 USD (Note: This value fluctuates and should be checked for the latest price)


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