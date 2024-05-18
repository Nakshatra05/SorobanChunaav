# SorobanChunaav
# Soroban NextJS Voting dApp with Freighter Wallet
A Stellar Soroban Smart Contract and NextJS Front-end App that integrates the Freighter wallet that enables users to vote in proposals. 

![Screenshot 2024-05-18 183930](https://github.com/Nakshatra05/SorobanChunaav/assets/139595090/4ec43892-9717-401b-8d3c-c307b6230ed5)

![Screenshot 2024-05-18 185117](https://github.com/Nakshatra05/SorobanChunaav/assets/139595090/18167078-ee4c-453e-8d5d-5e23ef38fb25)


<h3>Repo Instructions</h3>

<h4>Step 1</h4>

Download or clone this repo, then deploy the n2d-soroban-votecontract-v1.rs smart contract in the Soroban Testnet

Save the contract address once deployed!

<h4>Step 2</h4>

Navigate to the repo folder once downl oaded or cloned then install the NextJS instance.

```shell
cd name-of-folder
npm i
```

<h4>Step 3</h4>

Update the contract address in the soroban.js file with the one obtained on step 1. 

```shell
let contractAddress = 'CAAN5X32XWBIX3Q52BR4AJDVBAXPC5M3MVVPAVE5HVES2VWJBPO573L2';
```

CTRL + S to save file!

<h4>Step 4</h4>

Install the Freighter browser wallet then create your wallet account. Switch it to testnet and fund with friendlybot tokens. (All done in the wallet app)

<h5>Step 5</h5>

Run the app, access it and test!

```shell
cd name-of-folder
npm run dev
```

App should be accessible via: https://localhost:3000
