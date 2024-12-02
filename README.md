## Running App EthMarketplace:
    1. modify package.json to have    
        "build": "export NODE_OPTIONS=--openssl-legacy-provider && next build",
        "start": "export NODE_OPTIONS=--openssl-legacy-provider && next start",
    2. Install Metamask Extension and configure local Ganache network on it
    3. Go to Project Directory
    4. export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    5. source ~/.zshrc
    6. nvm install 17
    7. nvm use 17
    8. python3 -m venv venv
    9. source venv/bin/activate
    10. pip install setuptools
    11. npm install next
    12. npm i
    13. npm run build
    14. npm run dev
    15. modify truffle-config.js to use Ganache
    16. Start workspace in ganache and import truffle-config.js
    17. truffle migrate or truffle migrate —reset
    18. also add .env.development file 