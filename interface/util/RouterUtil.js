import { BN } from 'bn.js'

export const factory_address = 'aiPpAoWnzUuEXuQD8M75F42tgcaQ9MY6kbNqXxP8raYa73p'
// export const router_address = 'b7Vz6KZCVFrD6CpMxXohe5cKu2Zst71m13ruxv5jdJsxKoA' // fee_to_setter = dev1
export const router_address = 'ZtkfGHXkfcimYf9cXJdjxytw5Pzp3ucnZM51kBms5Eiu2PH'
export const pair_address = 'b4WSUKQu6Evooh4Rtz6s9LhLWs7XHpqCx2wsfmsP2uFWkUe'
const fee_to_setter = 'ZebrEKmacXyyTxcfLWUeG5byHSN8AdpDhvjx5Esdg5oR7yR' //dev1 account

//token0
export const name0 = 'Uni1 Token'
export const symbol0 = 'UNI1'
export const address0 = 'aDGRyf3Q8jGYRisf3Aydt87ccongLCgdobaSiXJkW7Z2zrh'
//token1
export const name1 = 'Wrapped SBY'
export const symbol1 = 'WSBY'
export const address1 = 'ZHF9zwK6S582RxGhYSyTGQ5rMYeNet8czcuuUZxFyv2AZwC'
//this is the address of the token on the SBY
// export const address1 = 'XaE8oMj2rYFv6SQKGPKxGDLrdZqhduUHrwJU7pDfUke46Kx'

const name2 = 'UNI2'
const symbol2 = 'UNI2'
export const address2 = 'aL3VQDDaMU38RYk9njg3RPz8Qzx2hDCA526GE6cvWZek4b5'
export const Decimal = 18
export const ONE = new BN(10).pow(new BN(Decimal))
