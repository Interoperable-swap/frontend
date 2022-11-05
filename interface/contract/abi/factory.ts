export const FACTORY_ADDRESS = "";
export const FACTORY_CONTRACT = {
	"source": {
		"hash": "0x29735bb2e3c8dbffa3d3674584ca00ccba719bb6c9c0456e439d6aa67a5286c1",
		"language": "ink! 3.3.1",
		"compiler": "rustc 1.65.0-nightly"
	},
	"contract": {
		"name": "factory_contract",
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
							"label": "fee_to_setter",
							"type": {
								"displayName": [
									"AccountId"
								],
								"type": 0
							}
						},
						{
							"label": "pair_code_hash",
							"type": {
								"displayName": [
									"Hash"
								],
								"type": 8
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
			"events": [
				{
					"args": [
						{
							"docs": [],
							"indexed": true,
							"label": "token_0",
							"type": {
								"displayName": [
									"AccountId"
								],
								"type": 0
							}
						},
						{
							"docs": [],
							"indexed": true,
							"label": "token_1",
							"type": {
								"displayName": [
									"AccountId"
								],
								"type": 0
							}
						},
						{
							"docs": [],
							"indexed": false,
							"label": "pair",
							"type": {
								"displayName": [
									"AccountId"
								],
								"type": 0
							}
						},
						{
							"docs": [],
							"indexed": false,
							"label": "pair_len",
							"type": {
								"displayName": [
									"u64"
								],
								"type": 9
							}
						}
					],
					"docs": [],
					"label": "PairCreated"
				}
			],
			"messages": [
				{
					"args": [],
					"docs": [],
					"label": "Factory::all_pair_length",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"factory_external",
							"AllPairLengthOutput"
						],
						"type": 9
					},
					"selector": "0xecc40c19"
				},
				{
					"args": [
						{
							"label": "fee_to",
							"type": {
								"displayName": [
									"factory_external",
									"SetFeeToInput1"
								],
								"type": 0
							}
						}
					],
					"docs": [],
					"label": "Factory::set_fee_to",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"factory_external",
							"SetFeeToOutput"
						],
						"type": 10
					},
					"selector": "0x3ef205a7"
				},
				{
					"args": [],
					"docs": [],
					"label": "Factory::fee_to",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"factory_external",
							"FeeToOutput"
						],
						"type": 0
					},
					"selector": "0xd68332f3"
				},
				{
					"args": [
						{
							"label": "fee_to_setter",
							"type": {
								"displayName": [
									"factory_external",
									"SetFeeToSetterInput1"
								],
								"type": 0
							}
						}
					],
					"docs": [],
					"label": "Factory::set_fee_to_setter",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"factory_external",
							"SetFeeToSetterOutput"
						],
						"type": 10
					},
					"selector": "0x80999559"
				},
				{
					"args": [
						{
							"label": "token_a",
							"type": {
								"displayName": [
									"factory_external",
									"GetPairInput1"
								],
								"type": 0
							}
						},
						{
							"label": "token_b",
							"type": {
								"displayName": [
									"factory_external",
									"GetPairInput2"
								],
								"type": 0
							}
						}
					],
					"docs": [],
					"label": "Factory::get_pair",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"factory_external",
							"GetPairOutput"
						],
						"type": 19
					},
					"selector": "0x45a3c0f6"
				},
				{
					"args": [
						{
							"label": "token_a",
							"type": {
								"displayName": [
									"factory_external",
									"CreatePairInput1"
								],
								"type": 0
							}
						},
						{
							"label": "token_b",
							"type": {
								"displayName": [
									"factory_external",
									"CreatePairInput2"
								],
								"type": 0
							}
						}
					],
					"docs": [],
					"label": "Factory::create_pair",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"factory_external",
							"CreatePairOutput"
						],
						"type": 20
					},
					"selector": "0xc77f4b02"
				},
				{
					"args": [],
					"docs": [],
					"label": "Factory::fee_to_setter",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"factory_external",
							"FeeToSetterOutput"
						],
						"type": 0
					},
					"selector": "0x9d08e711"
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
												"key": "0x1b59ba3b00000000000000000000000000000000000000000000000000000000",
												"ty": 0
											}
										},
										"name": "fee_to"
									},
									{
										"layout": {
											"cell": {
												"key": "0x1c59ba3b00000000000000000000000000000000000000000000000000000000",
												"ty": 0
											}
										},
										"name": "fee_to_setter"
									},
									{
										"layout": {
											"cell": {
												"key": "0x1d59ba3b00000000000000000000000000000000000000000000000000000000",
												"ty": 3
											}
										},
										"name": "get_pair"
									},
									{
										"layout": {
											"cell": {
												"key": "0x1e59ba3b00000000000000000000000000000000000000000000000000000000",
												"ty": 7
											}
										},
										"name": "all_pairs"
									},
									{
										"layout": {
											"cell": {
												"key": "0x1f59ba3b00000000000000000000000000000000000000000000000000000000",
												"ty": 8
											}
										},
										"name": "pair_contract_code_hash"
									}
								]
							}
						},
						"name": "factory"
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
							"type": 4
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
				"id": 4,
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
							4,
							0
						]
					}
				}
			},
			{
				"id": 7,
				"type": {
					"def": {
						"sequence": {
							"type": 0
						}
					}
				}
			},
			{
				"id": 8,
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
						"Hash"
					]
				}
			},
			{
				"id": 9,
				"type": {
					"def": {
						"primitive": "u64"
					}
				}
			},
			{
				"id": 10,
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
											"type": 12
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
							"type": 12
						}
					],
					"path": [
						"Result"
					]
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
						"variant": {
							"variants": [
								{
									"fields": [
										{
											"type": 13,
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
				"id": 13,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"fields": [
										{
											"type": 14,
											"typeName": "PSP22Error"
										}
									],
									"index": 0,
									"name": "PSP22Error"
								},
								{
									"fields": [
										{
											"type": 16,
											"typeName": "OwnableError"
										}
									],
									"index": 1,
									"name": "OwnableError"
								},
								{
									"fields": [
										{
											"type": 17,
											"typeName": "PausableError"
										}
									],
									"index": 2,
									"name": "PausableError"
								},
								{
									"fields": [
										{
											"type": 18,
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
				"id": 14,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"fields": [
										{
											"type": 15,
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
											"type": 15,
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
				"id": 15,
				"type": {
					"def": {
						"primitive": "str"
					}
				}
			},
			{
				"id": 16,
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
				"id": 17,
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
				"id": 18,
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
				"id": 19,
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
											"type": 0
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
							"type": 0
						}
					],
					"path": [
						"Option"
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
											"type": 12
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
							"type": 12
						}
					],
					"path": [
						"Result"
					]
				}
			}
		]
	}
}
	;
export default FACTORY_CONTRACT