<img width="1680" alt="Screenshot 2022-11-14 at 5 11 20" src="https://user-images.githubusercontent.com/67859510/201542246-bf10a6c8-163e-42ce-b686-8c36b53bcbcc.png">

### A. Project Description x1.

***InteroperableDEX, not Multi-chainDEX.***

Polkadot is promoting WASM-based Smartcontract that utilizes ink! . And this application is the first AMM for [Uniswap v2 based on ink!-based smartcontract](https://github.com/AstarNetwork/wasm-showcase-dapps/tree/main/uniswap-v2). In fact, this hackathon's scope is only a basic implementation, such as Swap and liquidity provision features. However, we will be extending the functionality to become a DEX aggregator for the entire Polkadot Ecosystem utilizing XCM, and interoperability with existing EVM Dapps utilizing AstarNetwork's XVM!

### 1.- Name and summary of the project
Interoperable DEX

### 2.- Team member names/pseudonyms and contact information (e.g. GitHub name, email address, etc.) 
steve tanaka(tg:shutanaka)

### 3.- The actual challenge statement you are submitting to and a general description of the problem you are addressing

***Liquidity aggregation and interoperability among DEXs***


The Polkadot Ecosystem includes a variety of chains, including application-based chains, in addition to chains as Smartcontract execution environments. Even now, each chain is developing its own liquidity solutions and DEXs, and from the user's point of view, the liquidity offered is distributed and very UX-unfriendly. Although development was not completed in time for this hackathon, we will continue to develop solutions to these issues.

At the moment, there are only a few runtime environments, including Shiden and Shibuya, and unlike EVM applications, there are only a few projects that can be used as references. 
Therefore, we had a hard time connecting SmartContract to the front end using the Polkadot{js} API. 
Thanks to the Polkadot community for the heads up!

### 4.- How you use the Substrate or EVM project.

We uses Pallet Contract based on Substrate framework and can achieve interoperability with existing EVM Dapps utilizing AstarNetwork's XVM feature

## B. Video presentation up to 5 minutes x1
https://youtu.be/MoF5ddS8OaQ

## C. Link to GitHub Repo x1

https://github.com/Interoperable-swap/frontend/tree/main/interface

## D. List of technology stack used x1
- ink! /WASM Smartcontract
- Polkadot{js} API
- React/Next.js

## E. Project demo link

https://frontend-liard-tau.vercel.app/
