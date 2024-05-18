# SorobanChunaav - Soroban NextJS Voting dApp with Freighter Wallet

Name : Nakshatra Goel (IIT Roorkee)

![Screenshot 2024-05-18 183930](https://github.com/Nakshatra05/SorobanChunaav/assets/139595090/4ec43892-9717-401b-8d3c-c307b6230ed5)

![Screenshot 2024-05-18 185330](https://github.com/Nakshatra05/SorobanChunaav/assets/139595090/a2c8172f-be6b-4821-8daf-db2dfd6deb11)

# SorobanChunaav in brief

"SorobanChunaav" is a Web3 e-voting DApp revolutionizing the electoral process. Built on blockchain technology, it ensures transparency, security, and integrity in elections. Through decentralized smart contracts, it facilitates tamper-proof voting and guarantees the confidentiality of ballots. With its user-friendly interface, it enhances accessibility, enabling voters to cast their votes conveniently from anywhere. SorobanChunaav represents a leap forward in democratic participation, fostering trust and inclusivity in electoral systems.

A Stellar Soroban Smart Contract and NextJS Front-end App that integrates the Freighter wallet that enables users to vote in proposals. 

# What Problem Does Our Dapp Solve 

"SorobanChunaav" addresses the longstanding issues of traditional voting systems such as fraud, tampering, and lack of transparency. It aims to overcome challenges like logistical complexities, geographical constraints, and low voter turnout. By leveraging blockchain technology, it eliminates the risk of centralized manipulation and ensures the authenticity of election results. Additionally, it enhances accessibility for remote or marginalized communities, promoting a more inclusive democratic process. SorobanChunaav strives to restore trust and integrity in elections by offering a secure and transparent platform for casting votes.

# Technologies Used

Our project incorporates the following technologies: Knowledge of Soroban environment, Deployment on Stellar Network, Rust for Smart Contracts, NextJS for frontend

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

# Challenges Faced 
* Initial configuration was a tough nut and its operation was computationally expensive too (Minimum 16GB RAM required/32 GB preferred).
* Was being confused as Freighter Wallet wasn't being injected - this issue took around 1 hour of my time
* The whole idea itself when first came to head seemed challenging since I only had very basic understanding of Soroban Environment
