export const ROUTER_ADDRESS = "";
export const ROUTER_ABI ={
	"source": {
	  "hash": "0x94ba8281bbfb0770629bd02347730b93e93e010e7a6f6d7bbd4c80be01636c23",
	  "language": "ink! 3.3.1",
	  "compiler": "rustc 1.65.0-nightly"
	},
	"contract": {
	  "name": "router_contract",
	  "version": "0.1.0",
	  "authors": [
		"Stake Technologies <devops@stake.co.jp>"
	  ]
	},
	"V3": {
	  "spec": {
		"constructors": [
		  {
			"args": [
			  {
				"label": "factory",
				"type": {
				  "displayName": [
					"AccountId"
				  ],
				  "type": 0
				}
			  }
			],
			"docs": [],
			"label": "new",
			"payable": false,
			"selector": "0x9bae9d5e"
		  }
		],
		"docs": [],
		"events": [],
		"messages": [
		  {
			"args": [
			  {
				"label": "amount_out",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountInInput1"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "reserve_in",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountInInput2"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "reserve_out",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountInInput3"
				  ],
				  "type": 3
				}
			  }
			],
			"docs": [],
			"label": "Router::get_amount_in",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"GetAmountInOutput"
			  ],
			  "type": 4
			},
			"selector": "0xea4ac85d"
		  },
		  {
			"args": [],
			"docs": [],
			"label": "Router::factory",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"FactoryOutput"
			  ],
			  "type": 0
			},
			"selector": "0xac3a4c18"
		  },
		  {
			"args": [
			  {
				"label": "amount_out",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountsInInput1"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "path",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountsInInput2"
				  ],
				  "type": 13
				}
			  }
			],
			"docs": [],
			"label": "Router::get_amounts_in",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"GetAmountsInOutput"
			  ],
			  "type": 14
			},
			"selector": "0x707998fc"
		  },
		  {
			"args": [
			  {
				"label": "token_a",
				"type": {
				  "displayName": [
					"router_external",
					"RemoveLiquidityInput1"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "token_b",
				"type": {
				  "displayName": [
					"router_external",
					"RemoveLiquidityInput2"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "liquidity",
				"type": {
				  "displayName": [
					"router_external",
					"RemoveLiquidityInput3"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "amount_a_min",
				"type": {
				  "displayName": [
					"router_external",
					"RemoveLiquidityInput4"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "amount_b_min",
				"type": {
				  "displayName": [
					"router_external",
					"RemoveLiquidityInput5"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"router_external",
					"RemoveLiquidityInput6"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "deadline",
				"type": {
				  "displayName": [
					"router_external",
					"RemoveLiquidityInput7"
				  ],
				  "type": 16
				}
			  }
			],
			"docs": [],
			"label": "Router::remove_liquidity",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"RemoveLiquidityOutput"
			  ],
			  "type": 17
			},
			"selector": "0xd3abe5a3"
		  },
		  {
			"args": [
			  {
				"label": "amount_out",
				"type": {
				  "displayName": [
					"router_external",
					"SwapTokensForExactTokensInput1"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "amount_in_max",
				"type": {
				  "displayName": [
					"router_external",
					"SwapTokensForExactTokensInput2"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "path",
				"type": {
				  "displayName": [
					"router_external",
					"SwapTokensForExactTokensInput3"
				  ],
				  "type": 13
				}
			  },
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"router_external",
					"SwapTokensForExactTokensInput4"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "deadline",
				"type": {
				  "displayName": [
					"router_external",
					"SwapTokensForExactTokensInput5"
				  ],
				  "type": 16
				}
			  }
			],
			"docs": [],
			"label": "Router::swap_tokens_for_exact_tokens",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"SwapTokensForExactTokensOutput"
			  ],
			  "type": 14
			},
			"selector": "0xd8eafd67"
		  },
		  {
			"args": [
			  {
				"label": "amount_a",
				"type": {
				  "displayName": [
					"router_external",
					"QuoteInput1"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "reserve_a",
				"type": {
				  "displayName": [
					"router_external",
					"QuoteInput2"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "reserve_b",
				"type": {
				  "displayName": [
					"router_external",
					"QuoteInput3"
				  ],
				  "type": 3
				}
			  }
			],
			"docs": [],
			"label": "Router::quote",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"QuoteOutput"
			  ],
			  "type": 4
			},
			"selector": "0x16347b10"
		  },
		  {
			"args": [
			  {
				"label": "token_a",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput1"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "token_b",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput2"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "amount_a_desired",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput3"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "amount_b_desired",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput4"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "amount_a_min",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput5"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "amount_b_min",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput6"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput7"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "deadline",
				"type": {
				  "displayName": [
					"router_external",
					"AddLiquidityInput8"
				  ],
				  "type": 16
				}
			  }
			],
			"docs": [],
			"label": "Router::add_liquidity",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"AddLiquidityOutput"
			  ],
			  "type": 19
			},
			"selector": "0xa5b7d597"
		  },
		  {
			"args": [
			  {
				"label": "amount_in",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountOutInput1"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "reserve_in",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountOutInput2"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "reserve_out",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountOutInput3"
				  ],
				  "type": 3
				}
			  }
			],
			"docs": [],
			"label": "Router::get_amount_out",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"GetAmountOutOutput"
			  ],
			  "type": 4
			},
			"selector": "0x41e315fd"
		  },
		  {
			"args": [
			  {
				"label": "amount_in",
				"type": {
				  "displayName": [
					"router_external",
					"SwapExactTokensForTokensInput1"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "amount_out_min",
				"type": {
				  "displayName": [
					"router_external",
					"SwapExactTokensForTokensInput2"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "path",
				"type": {
				  "displayName": [
					"router_external",
					"SwapExactTokensForTokensInput3"
				  ],
				  "type": 13
				}
			  },
			  {
				"label": "to",
				"type": {
				  "displayName": [
					"router_external",
					"SwapExactTokensForTokensInput4"
				  ],
				  "type": 0
				}
			  },
			  {
				"label": "deadline",
				"type": {
				  "displayName": [
					"router_external",
					"SwapExactTokensForTokensInput5"
				  ],
				  "type": 16
				}
			  }
			],
			"docs": [],
			"label": "Router::swap_exact_tokens_for_tokens",
			"mutates": true,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"SwapExactTokensForTokensOutput"
			  ],
			  "type": 14
			},
			"selector": "0xaf0a8836"
		  },
		  {
			"args": [
			  {
				"label": "amount_in",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountsOutInput1"
				  ],
				  "type": 3
				}
			  },
			  {
				"label": "path",
				"type": {
				  "displayName": [
					"router_external",
					"GetAmountsOutInput2"
				  ],
				  "type": 13
				}
			  }
			],
			"docs": [],
			"label": "Router::get_amounts_out",
			"mutates": false,
			"payable": false,
			"returnType": {
			  "displayName": [
				"router_external",
				"GetAmountsOutOutput"
			  ],
			  "type": 14
			},
			"selector": "0x7170b8f6"
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
						  "key": "0x7e833de500000000000000000000000000000000000000000000000000000000",
						  "ty": 0
						}
					  },
					  "name": "factory"
					}
				  ]
				}
			  },
			  "name": "router"
			}
		  ]
		}
	  },
	  "types": [
		{
		  "id": 0,
		  "type": {
			"def": {
			  "composite": {
				"fields": [
				  {
					"type": 1,
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
		  "id": 1,
		  "type": {
			"def": {
			  "array": {
				"len": 32,
				"type": 2
			  }
			}
		  }
		},
		{
		  "id": 2,
		  "type": {
			"def": {
			  "primitive": "u8"
			}
		  }
		},
		{
		  "id": 3,
		  "type": {
			"def": {
			  "primitive": "u128"
			}
		  }
		},
		{
		  "id": 4,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 3
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 5
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
				"type": 3
			  },
			  {
				"name": "E",
				"type": 5
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 5,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 6,
						"typeName": "PSP22Error"
					  }
					],
					"index": 0,
					"name": "PSP22Error"
				  },
				  {
					"fields": [
					  {
						"type": 8,
						"typeName": "FactoryError"
					  }
					],
					"index": 1,
					"name": "FactoryError"
				  },
				  {
					"fields": [
					  {
						"type": 9,
						"typeName": "PairError"
					  }
					],
					"index": 2,
					"name": "PairError"
				  },
				  {
					"index": 3,
					"name": "PairNotFound"
				  },
				  {
					"index": 4,
					"name": "InsufficientAmount"
				  },
				  {
					"index": 5,
					"name": "InsufficientAAmount"
				  },
				  {
					"index": 6,
					"name": "InsufficientBAmount"
				  },
				  {
					"index": 7,
					"name": "ExcessiveAAmount"
				  },
				  {
					"index": 8,
					"name": "InsufficientLiquidity"
				  },
				  {
					"index": 9,
					"name": "InsufficientOutputAmount"
				  },
				  {
					"index": 10,
					"name": "ExcessiveInputAmount"
				  },
				  {
					"index": 11,
					"name": "InvalidPath"
				  },
				  {
					"index": 12,
					"name": "ZeroAddress"
				  },
				  {
					"index": 13,
					"name": "IdenticalAddresses"
				  },
				  {
					"index": 14,
					"name": "Expired"
				  },
				  {
					"index": 15,
					"name": "AddOverFlow1"
				  },
				  {
					"index": 16,
					"name": "AddOverFlow2"
				  },
				  {
					"index": 17,
					"name": "SubUnderFlow1"
				  },
				  {
					"index": 18,
					"name": "MulOverFlow1"
				  },
				  {
					"index": 19,
					"name": "MulOverFlow2"
				  },
				  {
					"index": 20,
					"name": "MulOverFlow3"
				  },
				  {
					"index": 21,
					"name": "MulOverFlow4"
				  },
				  {
					"index": 22,
					"name": "DivByZero1"
				  },
				  {
					"index": 23,
					"name": "DivByZero2"
				  },
				  {
					"index": 24,
					"name": "DivByZero3"
				  },
				  {
					"index": 25,
					"name": "CastOverflow1"
				  },
				  {
					"index": 26,
					"name": "CastOverflow2"
				  },
				  {
					"index": 27,
					"name": "CastOverflow3"
				  }
				]
			  }
			},
			"path": [
			  "uniswap_v2",
			  "traits",
			  "router",
			  "RouterError"
			]
		  }
		},
		{
		  "id": 6,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 7,
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
						"type": 7,
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
		  "id": 7,
		  "type": {
			"def": {
			  "primitive": "str"
			}
		  }
		},
		{
		  "id": 8,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 9,
						"typeName": "PairError"
					  }
					],
					"index": 0,
					"name": "PairError"
				  },
				  {
					"index": 1,
					"name": "CallerIsNotFeeSetter"
				  },
				  {
					"index": 2,
					"name": "ZeroAddress"
				  },
				  {
					"index": 3,
					"name": "IdenticalAddresses"
				  }
				]
			  }
			},
			"path": [
			  "uniswap_v2",
			  "traits",
			  "factory",
			  "FactoryError"
			]
		  }
		},
		{
		  "id": 9,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 6,
						"typeName": "PSP22Error"
					  }
					],
					"index": 0,
					"name": "PSP22Error"
				  },
				  {
					"fields": [
					  {
						"type": 10,
						"typeName": "OwnableError"
					  }
					],
					"index": 1,
					"name": "OwnableError"
				  },
				  {
					"fields": [
					  {
						"type": 11,
						"typeName": "PausableError"
					  }
					],
					"index": 2,
					"name": "PausableError"
				  },
				  {
					"fields": [
					  {
						"type": 12,
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
		  "id": 10,
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
		  "id": 11,
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
		  "id": 12,
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
		  "id": 13,
		  "type": {
			"def": {
			  "sequence": {
				"type": 0
			  }
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
						"type": 15
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 5
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
				"type": 15
			  },
			  {
				"name": "E",
				"type": 5
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
			  "sequence": {
				"type": 3
			  }
			}
		  }
		},
		{
		  "id": 16,
		  "type": {
			"def": {
			  "primitive": "u64"
			}
		  }
		},
		{
		  "id": 17,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 18
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 5
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
				"type": 18
			  },
			  {
				"name": "E",
				"type": 5
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 18,
		  "type": {
			"def": {
			  "tuple": [
				3,
				3
			  ]
			}
		  }
		},
		{
		  "id": 19,
		  "type": {
			"def": {
			  "variant": {
				"variants": [
				  {
					"fields": [
					  {
						"type": 20
					  }
					],
					"index": 0,
					"name": "Ok"
				  },
				  {
					"fields": [
					  {
						"type": 5
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
				"type": 20
			  },
			  {
				"name": "E",
				"type": 5
			  }
			],
			"path": [
			  "Result"
			]
		  }
		},
		{
		  "id": 20,
		  "type": {
			"def": {
			  "tuple": [
				3,
				3,
				3
			  ]
			}
		  }
		}
	  ]
	}
  };