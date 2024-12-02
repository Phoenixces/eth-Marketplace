## Running App EthMarketplace:
    1. modify package.json to have    
        "build": "export NODE_OPTIONS=--openssl-legacy-provider && next build",
        "start": "export NODE_OPTIONS=--openssl-legacy-provider && next start",
    2. Install Metamask Extension and configure local Ganache network on it
    3. Go to Project Directory
    4. nvm use 17
    5. python3 -m venv venv
    6. source venv/bin/activate
    7. pip install setuptools
    8. npm install next
    9. npm i
    10. npm run build
    11. npm run dev
    12. modify truffle-config.js to use Ganache
    13. Start workspace in ganache and import truffle-config.js
    14. truffle migrate or truffle migrate —reset
    15. also add .env.development file 