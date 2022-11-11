import { ApiPromise, WsProvider } from '@polkadot/api'
import { useState } from 'react'

import { PSP22_ABI } from '../contract/abi/psp22'
import { WNATIVE_ABI } from '../contract/abi/wnative'

export const factory_address = 'aiPpAoWnzUuEXuQD8M75F42tgcaQ9MY6kbNqXxP8raYa73p'
export const router_address = 'b7Vz6KZCVFrD6CpMxXohe5cKu2Zst71m13ruxv5jdJsxKoA' // fee_to_setter = dev1
export const pair_address = 'b4WSUKQu6Evooh4Rtz6s9LhLWs7XHpqCx2wsfmsP2uFWkUe'

//token0
export const name0 = 'Uni1 Token'
export const symbol0 = 'UNI1'
export const address0 = 'aDGRyf3Q8jGYRisf3Aydt87ccongLCgdobaSiXJkW7Z2zrh'
//token1
export const name1 = 'Wrapped SBY'
export const symbol1 = 'WSBY'
export const address1 = 'ZHF9zwK6S582RxGhYSyTGQ5rMYeNet8czcuuUZxFyv2AZwC'

const name2 = 'UNI2'
const symbol2 = 'UNI2'
export const address2 = 'aL3VQDDaMU38RYk9njg3RPz8Qzx2hDCA526GE6cvWZek4b5'
