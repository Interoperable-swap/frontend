export const PAIR_ADDRESS = "";
export const PSP22_ABI ={
	"source": {
	  "hash": "0x609b71ae61ff764f81a0104d5c63907a90eeff7f2f9dd8df8c5cbd78e8f918f7",
	  "language": "ink! 3.3.1",
	  "compiler": "rustc 1.65.0-nightly"
	},
	"contract": {
	  "name": "pair_contract",
	  "version": "0.1.0",
	  "authors": [
		"Stake Technologies <devops@stake.co.jp>"
	  ]
	},
	"V3": {
	  "spec": {
		"constructors": [
		  {
			"args": [],
			"docs": [],
			"label": "new",
			"payable": false,
			"selector": "0x9bae9d5e"
		  }
		],
		"docs": [],
		"events": [
		  {
			"args": [
			  {
				"docs": [],
				"indexed": true,
				"label": "sender",
				"type": {
				  "displayName": [
					"AccountId"
				  ],
				  "type": 2
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_0",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_1",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  }
			],
			"docs": [],
			"label": "Mint"
		  },
		  {
			"args": [
			  {
				"docs": [],
				"indexed": true,
				"label": "sender",
				"type": {
				  "displayName": [
					"AccountId"
				  ],
				  "type": 2
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_0",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_1",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": true,
				"label": "to",
				"type": {
				  "displayName": [
					"AccountId"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [],
			"label": "Burn"
		  },
		  {
			"args": [
			  {
				"docs": [],
				"indexed": true,
				"label": "sender",
				"type": {
				  "displayName": [
					"AccountId"
				  ],
				  "type": 2
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_0_in",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_1_in",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_0_out",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "amount_1_out",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": true,
				"label": "to",
				"type": {
				  "displayName": [
					"AccountId"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [],
			"label": "Swap"
		  },
		  {
			"args": [
			  {
				"docs": [],
				"indexed": false,
				"label": "reserve_0",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "reserve_1",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  }
			],
			"docs": [],
			"label": "Sync"
		  },
		  {
			"args": [
			  {
				"docs": [],
				"indexed": true,
				"label": "from",
				"type": {
				  "displayName": [
					"Option"
				  ],
				  "type": 28
				}
			  },
			  {
				"docs": [],
				"indexed": true,
				"label": "to",
				"type": {
				  "displayName": [
					"Option"
				  ],
				  "type": 28
				}
			  },
			  {
				"docs": [],
				"indexed": false,
				"label": "value",
				"type": {
				  "displayName": [
					"Balance"
				  ],
				  "type": 0
				}
			  }
			],
			"docs": [],
			"label": "Transfer"
		  }
		],
		"messages": [
		  {
			"args": [],
			"docs": [
			  " Returns the total token supply."
			],
			"label": "PSP22::total_supply",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"TotalSupplyOutput"
			  ],
			  "type": 0
			},
			"selector": "0x162df8c2"
		  },
		  {
			"args": [
			  {
				"label": "spender",
				"type": {
				  "displayName": [
					"psp22_external",
					"ApproveInput1"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "value",
				"type": {
				  "displayName": [
					"psp22_external",
					"ApproveInput2"
				  ],
				  "type": 0
				}
			  }
			],
			"docs": [
			  " Allows `spender` to withdraw from the caller's account multiple times, up to",
			  " the `value` amount.",
			  "",
			  " If this function is called again it overwrites the current allowance with `value`.",
			  "",
			  " An `Approval` event is emitted.",
			  "",
			  " # Errors",
			  "",
			  " Returns `ZeroSenderAddress` error if sender's address is zero.",
			  "",
			  " Returns `ZeroRecipientAddress` error if recipient's address is zero."
			],
			"label": "PSP22::approve",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"ApproveOutput"
			  ],
			  "type": 14
			},
			"selector": "0xb20f1bbd"
		  },
		  {
			"args": [
			  {
				"label": "spender",
				"type": {
				  "displayName": [
					"psp22_external",
					"IncreaseAllowanceInput1"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "delta_value",
				"type": {
				  "displayName": [
					"psp22_external",
					"IncreaseAllowanceInput2"
				  ],
				  "type": 0
				}
			  }
			],
			"docs": [
			  " Atomically increases the allowance granted to `spender` by the caller.",
			  "",
			  " An `Approval` event is emitted.",
			  "",
			  " # Errors",
			  "",
			  " Returns `ZeroSenderAddress` error if sender's address is zero.",
			  "",
			  " Returns `ZeroRecipientAddress` error if recipient's address is zero."
			],
			"label": "PSP22::increase_allowance",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"IncreaseAllowanceOutput"
			  ],
			  "type": 14
			},
			"selector": "0x96d6b57a"
		  },
		  {
			"args": [
			  {
				"label": "owner",
				"type": {
				  "displayName": [
					"psp22_external",
					"BalanceOfInput1"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [
			  " Returns the account Balance for the specified `owner`.",
			  "",
			  " Returns `0` if the account is non-existent."
			],
			"label": "PSP22::balance_of",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"BalanceOfOutput"
			  ],
			  "type": 0
			},
			"selector": "0x6568382f"
		  },
		  {
			"args": [
			  {
				"label": "owner",
				"type": {
				  "displayName": [
					"psp22_external",
					"AllowanceInput1"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "spender",
				"type": {
				  "displayName": [
					"psp22_external",
					"AllowanceInput2"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [
			  " Returns the amount which `spender` is still allowed to withdraw from `owner`.",
			  "",
			  " Returns `0` if no allowance has been set `0`."
			],
			"label": "PSP22::allowance",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"AllowanceOutput"
			  ],
			  "type": 0
			},
			"selector": "0x4d47d921"
		  },
		  {
			"args": [
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"psp22_external",
					"TransferInput1"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "value",
				"type": {
				  "displayName": [
					"psp22_external",
					"TransferInput2"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "data",
				"type": {
				  "displayName": [
					"psp22_external",
					"TransferInput3"
				  ],
				  "type": 17
				}
			  }
			],
			"docs": [
			  " Transfers `value` amount of tokens from the caller's account to account `to`",
			  " with additional `data` in unspecified format.",
			  "",
			  " On success a `Transfer` event is emitted.",
			  "",
			  " # Errors",
			  "",
			  " Returns `InsufficientBalance` error if there are not enough tokens on",
			  " the caller's account Balance.",
			  "",
			  " Returns `ZeroSenderAddress` error if sender's address is zero.",
			  "",
			  " Returns `ZeroRecipientAddress` error if recipient's address is zero."
			],
			"label": "PSP22::transfer",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"TransferOutput"
			  ],
			  "type": 14
			},
			"selector": "0xdb20f9f5"
		  },
		  {
			"args": [
			  {
				"label": "spender",
				"type": {
				  "displayName": [
					"psp22_external",
					"DecreaseAllowanceInput1"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "delta_value",
				"type": {
				  "displayName": [
					"psp22_external",
					"DecreaseAllowanceInput2"
				  ],
				  "type": 0
				}
			  }
			],
			"docs": [
			  " Atomically decreases the allowance granted to `spender` by the caller.",
			  "",
			  " An `Approval` event is emitted.",
			  "",
			  " # Errors",
			  "",
			  " Returns `InsufficientAllowance` error if there are not enough tokens allowed",
			  " by owner for `spender`.",
			  "",
			  " Returns `ZeroSenderAddress` error if sender's address is zero.",
			  "",
			  " Returns `ZeroRecipientAddress` error if recipient's address is zero."
			],
			"label": "PSP22::decrease_allowance",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"DecreaseAllowanceOutput"
			  ],
			  "type": 14
			},
			"selector": "0xfecb57d5"
		  },
		  {
			"args": [
			  {
				"label": "from",
				"type": {
				  "displayName": [
					"psp22_external",
					"TransferFromInput1"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"psp22_external",
					"TransferFromInput2"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "value",
				"type": {
				  "displayName": [
					"psp22_external",
					"TransferFromInput3"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "data",
				"type": {
				  "displayName": [
					"psp22_external",
					"TransferFromInput4"
				  ],
				  "type": 17
				}
			  }
			],
			"docs": [],
			"label": "PSP22::transfer_from",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"psp22_external",
				"TransferFromOutput"
			  ],
			  "type": 14
			},
			"selector": "0x54b3c76e"
		  },
		  {
			"args": [
			  {
				"label": "new_owner",
				"type": {
				  "displayName": [
					"ownable_external",
					"TransferOwnershipInput1"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [
			  " Transfers ownership of the contract to a `new_owner`.",
			  " Can only be called by the current owner.",
			  "",
			  " On success a `OwnershipTransferred` event is emitted.",
			  "",
			  " # Errors",
			  "",
			  " Panics with `CallerIsNotOwner` error if caller is not owner.",
			  "",
			  " Panics with `NewOwnerIsZero` error if new owner's address is zero."
			],
			"label": "Ownable::transfer_ownership",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"ownable_external",
				"TransferOwnershipOutput"
			  ],
			  "type": 18
			},
			"selector": "0x11f43efd"
		  },
		  {
			"args": [],
			"docs": [
			  " Returns the address of the current owner."
			],
			"label": "Ownable::owner",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"ownable_external",
				"OwnerOutput"
			  ],
			  "type": 2
			},
			"selector": "0x4fa43c8c"
		  },
		  {
			"args": [],
			"docs": [
			  " Leaves the contract without owner. It will not be possible to call",
			  " owner's functions anymore. Can only be called by the current owner.",
			  "",
			  " NOTE: Renouncing ownership will leave the contract without an owner,",
			  " thereby removing any functionality that is only available to the owner.",
			  "",
			  " On success a `OwnershipTransferred` event is emitted.",
			  "",
			  " # Errors",
			  "",
			  " Panics with `CallerIsNotOwner` error if caller is not owner"
			],
			"label": "Ownable::renounce_ownership",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"ownable_external",
				"RenounceOwnershipOutput"
			  ],
			  "type": 18
			},
			"selector": "0x5e228753"
		  },
		  {
			"args": [
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"pair_external",
					"MintInput1"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [],
			"label": "Pair::mint",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"MintOutput"
			  ],
			  "type": 20
			},
			"selector": "0x4eaaf722"
		  },
		  {
			"args": [
			  {
				"label": "amount_0_out",
				"type": {
				  "displayName": [
					"pair_external",
					"SwapInput1"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "amount_1_out",
				"type": {
				  "displayName": [
					"pair_external",
					"SwapInput2"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"pair_external",
					"SwapInput3"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [],
			"label": "Pair::swap",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"SwapOutput"
			  ],
			  "type": 24
			},
			"selector": "0xc4b60ed8"
		  },
		  {
			"args": [],
			"docs": [],
			"label": "Pair::get_token_1",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"GetToken1Output"
			  ],
			  "type": 2
			},
			"selector": "0xa5b0616f"
		  },
		  {
			"args": [
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"pair_external",
					"BurnInput1"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [],
			"label": "Pair::burn",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"BurnOutput"
			  ],
			  "type": 25
			},
			"selector": "0x0221c524"
		  },
		  {
			"args": [],
			"docs": [],
			"label": "Pair::sync",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"SyncOutput"
			  ],
			  "type": 24
			},
			"selector": "0x79261d93"
		  },
		  {
			"args": [],
			"docs": [],
			"label": "Pair::get_reserves",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"GetReservesOutput"
			  ],
			  "type": 27
			},
			"selector": "0x5a21e3fc"
		  },
		  {
			"args": [],
			"docs": [],
			"label": "Pair::get_token_0",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"GetToken0Output"
			  ],
			  "type": 2
			},
			"selector": "0x7aeb98a8"
		  },
		  {
			"args": [
			  {
				"label": "token_0",
				"type": {
				  "displayName": [
					"pair_external",
					"InitializeInput1"
				  ],
				  "type": 2
				}
			  },
			  {
				"label": "token_1",
				"type": {
				  "displayName": [
					"pair_external",
					"InitializeInput2"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [],
			"label": "Pair::initialize",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"InitializeOutput"
			  ],
			  "type": 24
			},
			"selector": "0xd372021c"
		  },
		  {
			"args": [
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"pair_external",
					"SkimInput1"
				  ],
				  "type": 2
				}
			  }
			],
			"docs": [],
			"label": "Pair::skim",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"pair_external",
				"SkimOutput"
			  ],
			  "type": 24
			},
			"selector": "0x51c32781"
		  }
		]
	  },
	  "storage": {
		"struct": {
		  "fields": [
			{
			  "layout": {
				"struct": {
				  "fields": [
					{
					  "layout": {
						"cell": {
						  "key": "0xf232311200000000000000000000000000000000000000000000000000000000",
						  "ty": 0
						}
					  },
					  "name": "supply"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xf332311200000000000000000000000000000000000000000000000000000000",
						  "ty": 1
						}
					  },
					  "name": "balances"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xf432311200000000000000000000000000000000000000000000000000000000",
						  "ty": 7
						}
					  },
					  "name": "allowances"
					},
					{
					  "layout": {
						"enum": {
						  "dispatchKey": "0xf532311200000000000000000000000000000000000000000000000000000000",
						  "variants": {
							"0": {
							  "fields": [
								{
								  "layout": {
									"cell": {
									  "key": "0xf632311200000000000000000000000000000000000000000000000000000000",
									  "ty": 11
									}
								  },
								  "name": null
								}
							  ]
							},
							"1": {
							  "fields": []
							}
						  }
						}
					  },
					  "name": "_reserved"
					}
				  ]
				}
			  },
			  "name": "psp22"
			},
			{
			  "layout": {
				"struct": {
				  "fields": [
					{
					  "layout": {
						"cell": {
						  "key": "0xb36ee29c00000000000000000000000000000000000000000000000000000000",
						  "ty": 2
						}
					  },
					  "name": "owner"
					},
					{
					  "layout": {
						"enum": {
						  "dispatchKey": "0xb46ee29c00000000000000000000000000000000000000000000000000000000",
						  "variants": {
							"0": {
							  "fields": [
								{
								  "layout": {
									"cell": {
									  "key": "0xb56ee29c00000000000000000000000000000000000000000000000000000000",
									  "ty": 11
									}
								  },
								  "name": null
								}
							  ]
							},
							"1": {
							  "fields": []
							}
						  }
						}
					  },
					  "name": "_reserved"
					}
				  ]
				}
			  },
			  "name": "ownable"
			},
			{
			  "layout": {
				"struct": {
				  "fields": [
					{
					  "layout": {
						"cell": {
						  "key": "0xf9c17de900000000000000000000000000000000000000000000000000000000",
						  "ty": 4
						}
					  },
					  "name": "status"
					},
					{
					  "layout": {
						"enum": {
						  "dispatchKey": "0xfac17de900000000000000000000000000000000000000000000000000000000",
						  "variants": {
							"0": {
							  "fields": [
								{
								  "layout": {
									"cell": {
									  "key": "0xfbc17de900000000000000000000000000000000000000000000000000000000",
									  "ty": 11
									}
								  },
								  "name": null
								}
							  ]
							},
							"1": {
							  "fields": []
							}
						  }
						}
					  },
					  "name": "_reserved"
					}
				  ]
				}
			  },
			  "name": "guard"
			},
			{
			  "layout": {
				"struct": {
				  "fields": [
					{
					  "layout": {
						"cell": {
						  "key": "0xa8db30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 2
						}
					  },
					  "name": "factory"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xa9db30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 2
						}
					  },
					  "name": "token_0"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xaadb30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 2
						}
					  },
					  "name": "token_1"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xabdb30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 0
						}
					  },
					  "name": "reserve_0"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xacdb30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 0
						}
					  },
					  "name": "reserve_1"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xaddb30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 12
						}
					  },
					  "name": "block_timestamp_last"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xaedb30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 0
						}
					  },
					  "name": "price_0_cumulative_last"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xafdb30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 0
						}
					  },
					  "name": "price_1_cumulative_last"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xb0db30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 0
						}
					  },
					  "name": "k_last"
					},
					{
					  "layout": {
						"cell": {
						  "key": "0xb1db30a400000000000000000000000000000000000000000000000000000000",
						  "ty": 13
						}
					  },
					  "name": "lock"
					}
				  ]
				}
			  },
			  "name": "pair"
			}
		  ]
		}
	  },
	  "types": [
		{
		  "id": 0,
		  "type": {
			"def": {
			  "primitive": "u128"
			}
		  }
		},
		{
		  "id": 1,
		  "type": {
			"def": {
			  "composite": {
				"fields": [
				  {
					"type": 5
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "K",
				"type": 2
			  },
			  {
				"name": "V",
				"type": 0
			  }
			],
			"path": [
			  "openbrush_lang",
			  "storage",
			  "mapping",
			  "Mapping"
			]
		  }
		},
		{
		  "id": 2,
		  "type": {
			"def": {
			  "composite": {
				"fields": [
				  {
					"type": 3,
					"typeName": "[u8; 32]"
				  }
				]
			  }
			},
			"path": [
			  "ink_env",
			  "types",
			  "AccountId"
			]
		  }
		},
		{
		  "id": 3,
		  "type": {
			"def": {
			  "array": {
				"len": 32,
				"type": 4
			  }
			}
		  }
		},
		{
		  "id": 4,
		  "type": {
			"def": {
			  "primitive": "u8"
			}
		  }
		},
		{
		  "id": 5,
		  "type": {
			"def": {
			  "sequence": {
				"type": 6
			  }
			}
		  }
		},
		{
		  "id": 6,
		  "type": {
			"def": {
			  "tuple": [
				2,
				0
			  ]
			}
		  }
		},
		{
		  "id": 7,
		  "type": {
			"def": {
			  "composite": {
				"fields": [
				  {
					"type": 9
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "K",
				"type": 8
			  },
			  {
				"name": "V",
				"type": 0
			  }
			],
			"path": [
			  "openbrush_lang",
			  "storage",
			  "mapping",
			  "Mapping"
			]
		  }
		},
		{
		  "id": 8,
		  "type": {
			"def": {
			  "tuple": [
				2,
				2
			  ]
			}
		  }
		},
		{
		  "id": 9,
		  "type": {
			"def": {
			  "sequence": {
				"type": 10
			  }
			}
		  }
		},
		{
		  "id": 10,
		  "type": {
			"def": {
			  "tuple": [
				8,
				0
			  ]
			}
		  }
		},
		{
		  "id": 11,
		  "type": {
			"def": {
			  "tuple": []
			}
		  }
		},
		{
		  "id": 12,
		  "type": {
			"def": {
			  "primitive": "u64"
			}
		  }
		},
		{
		  "id": 13,
		  "type": {
			"def": {
			  "primitive": "bool"
			}
		  }
		},
		{
		  "id": 14,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 11
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 15
					  }
					],
					"index": 1,
					"name": "Err"
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "T",
				"type": 11
			  },
			  {
				"name": "E",
				"type": 15
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 15,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 16,
						"typeName": "String"
					  }
					],
					"index": 0,
					"name": "Custom"
				  },
				  {
					"index": 1,
					"name": "InsufficientBalance"
				  },
				  {
					"index": 2,
					"name": "InsufficientAllowance"
				  },
				  {
					"index": 3,
					"name": "ZeroRecipientAddress"
				  },
				  {
					"index": 4,
					"name": "ZeroSenderAddress"
				  },
				  {
					"fields": [
					  {
						"type": 16,
						"typeName": "String"
					  }
					],
					"index": 5,
					"name": "SafeTransferCheckFailed"
				  }
				]
			  }
			},
			"path": [
			  "openbrush_contracts",
			  "traits",
			  "errors",
			  "psp22",
			  "PSP22Error"
			]
		  }
		},
		{
		  "id": 16,
		  "type": {
			"def": {
			  "primitive": "str"
			}
		  }
		},
		{
		  "id": 17,
		  "type": {
			"def": {
			  "sequence": {
				"type": 4
			  }
			}
		  }
		},
		{
		  "id": 18,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 11
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 19
					  }
					],
					"index": 1,
					"name": "Err"
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "T",
				"type": 11
			  },
			  {
				"name": "E",
				"type": 19
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 19,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"index": 0,
					"name": "CallerIsNotOwner"
				  },
				  {
					"index": 1,
					"name": "NewOwnerIsZero"
				  }
				]
			  }
			},
			"path": [
			  "openbrush_contracts",
			  "traits",
			  "errors",
			  "ownable",
			  "OwnableError"
			]
		  }
		},
		{
		  "id": 20,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 0
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 21
					  }
					],
					"index": 1,
					"name": "Err"
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "T",
				"type": 0
			  },
			  {
				"name": "E",
				"type": 21
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 21,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 15,
						"typeName": "PSP22Error"
					  }
					],
					"index": 0,
					"name": "PSP22Error"
				  },
				  {
					"fields": [
					  {
						"type": 19,
						"typeName": "OwnableError"
					  }
					],
					"index": 1,
					"name": "OwnableError"
				  },
				  {
					"fields": [
					  {
						"type": 22,
						"typeName": "PausableError"
					  }
					],
					"index": 2,
					"name": "PausableError"
				  },
				  {
					"fields": [
					  {
						"type": 23,
						"typeName": "ReentrancyGuardError"
					  }
					],
					"index": 3,
					"name": "ReentrancyGuardError"
				  },
				  {
					"index": 4,
					"name": "K"
				  },
				  {
					"index": 5,
					"name": "InsufficientLiquidityMinted"
				  },
				  {
					"index": 6,
					"name": "InsufficientLiquidityBurned"
				  },
				  {
					"index": 7,
					"name": "InsufficientOutputAmount"
				  },
				  {
					"index": 8,
					"name": "InsufficientLiquidity"
				  },
				  {
					"index": 9,
					"name": "InsufficientInputAmount"
				  },
				  {
					"index": 10,
					"name": "SafeTransferFailed"
				  },
				  {
					"index": 11,
					"name": "InvalidTo"
				  },
				  {
					"index": 12,
					"name": "Overflow"
				  },
				  {
					"index": 13,
					"name": "Locked"
				  },
				  {
					"index": 14,
					"name": "SubUnderFlow1"
				  },
				  {
					"index": 15,
					"name": "SubUnderFlow2"
				  },
				  {
					"index": 16,
					"name": "SubUnderFlow3"
				  },
				  {
					"index": 17,
					"name": "SubUnderFlow4"
				  },
				  {
					"index": 18,
					"name": "SubUnderFlow5"
				  },
				  {
					"index": 19,
					"name": "SubUnderFlow6"
				  },
				  {
					"index": 20,
					"name": "SubUnderFlow7"
				  },
				  {
					"index": 21,
					"name": "SubUnderFlow8"
				  },
				  {
					"index": 22,
					"name": "SubUnderFlow9"
				  },
				  {
					"index": 23,
					"name": "SubUnderFlow10"
				  },
				  {
					"index": 24,
					"name": "SubUnderFlow11"
				  },
				  {
					"index": 25,
					"name": "SubUnderFlow12"
				  },
				  {
					"index": 26,
					"name": "SubUnderFlow13"
				  },
				  {
					"index": 27,
					"name": "SubUnderFlow14"
				  },
				  {
					"index": 28,
					"name": "MulOverFlow1"
				  },
				  {
					"index": 29,
					"name": "MulOverFlow2"
				  },
				  {
					"index": 30,
					"name": "MulOverFlow3"
				  },
				  {
					"index": 31,
					"name": "MulOverFlow4"
				  },
				  {
					"index": 32,
					"name": "MulOverFlow5"
				  },
				  {
					"index": 33,
					"name": "MulOverFlow6"
				  },
				  {
					"index": 34,
					"name": "MulOverFlow7"
				  },
				  {
					"index": 35,
					"name": "MulOverFlow8"
				  },
				  {
					"index": 36,
					"name": "MulOverFlow9"
				  },
				  {
					"index": 37,
					"name": "MulOverFlow10"
				  },
				  {
					"index": 38,
					"name": "MulOverFlow11"
				  },
				  {
					"index": 39,
					"name": "MulOverFlow12"
				  },
				  {
					"index": 40,
					"name": "MulOverFlow13"
				  },
				  {
					"index": 41,
					"name": "MulOverFlow14"
				  },
				  {
					"index": 42,
					"name": "MulOverFlow15"
				  },
				  {
					"index": 43,
					"name": "DivByZero1"
				  },
				  {
					"index": 44,
					"name": "DivByZero2"
				  },
				  {
					"index": 45,
					"name": "DivByZero3"
				  },
				  {
					"index": 46,
					"name": "DivByZero4"
				  },
				  {
					"index": 47,
					"name": "DivByZero5"
				  },
				  {
					"index": 48,
					"name": "AddOverflow1"
				  }
				]
			  }
			},
			"path": [
			  "uniswap_v2",
			  "traits",
			  "pair",
			  "PairError"
			]
		  }
		},
		{
		  "id": 22,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"index": 0,
					"name": "Paused"
				  },
				  {
					"index": 1,
					"name": "NotPaused"
				  }
				]
			  }
			},
			"path": [
			  "openbrush_contracts",
			  "traits",
			  "errors",
			  "pausable",
			  "PausableError"
			]
		  }
		},
		{
		  "id": 23,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"index": 0,
					"name": "ReentrantCall"
				  }
				]
			  }
			},
			"path": [
			  "openbrush_contracts",
			  "traits",
			  "errors",
			  "reentrancy_guard",
			  "ReentrancyGuardError"
			]
		  }
		},
		{
		  "id": 24,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 11
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 21
					  }
					],
					"index": 1,
					"name": "Err"
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "T",
				"type": 11
			  },
			  {
				"name": "E",
				"type": 21
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 25,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 26
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 21
					  }
					],
					"index": 1,
					"name": "Err"
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "T",
				"type": 26
			  },
			  {
				"name": "E",
				"type": 21
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 26,
		  "type": {
			"def": {
			  "tuple": [
				0,
				0
			  ]
			}
		  }
		},
		{
		  "id": 27,
		  "type": {
			"def": {
			  "tuple": [
				0,
				0,
				12
			  ]
			}
		  }
		},
		{
		  "id": 28,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"index": 0,
					"name": "None"
				  },
				  {
					"fields": [
					  {
						"type": 2
					  }
					],
					"index": 1,
					"name": "Some"
				  }
				]
			  }
			},
			"params": [
			  {
				"name": "T",
				"type": 2
			  }
			],
			"path": [
			  "Option"
			]
		  }
		}
	  ]
	}
  }
  ;