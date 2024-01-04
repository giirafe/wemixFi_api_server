/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../common";
import type {
  WemixfiLendingView,
  WemixfiLendingViewInterface,
} from "../WemixfiLendingView";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousImplementation",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "ProxyImplementationUpdated",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "id",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newController",
        type: "address",
      },
    ],
    name: "NewController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newPriceOracle",
        type: "address",
      },
    ],
    name: "NewPriceOracle",
    type: "event",
  },
  {
    inputs: [],
    name: "cTokenMetaDataList",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "underlyingAssetAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "exchangeRateCurrent",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "underlyingDecimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "poolBalance",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "underlyingSymbol",
                type: "bytes32",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "contractAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "supplyRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "borrowRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralFactor",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "oraclePrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenSpeed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalReserves",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "cash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenSupplyBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenBorrowBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "reserveFactorMantissa",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "multiplierPerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "kink",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "baseRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "jumpMultiplierPerBlock",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isMintPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isBorrowPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isSeizePaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isTransferPaused",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "borrowCap",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isOraclePaused",
                type: "bool",
              },
            ],
            internalType: "struct WemixfiLendingViewInterface.CTokenInfo",
            name: "cTokenInfo",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "mySuppliedBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "myBorrowedBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mySupplyPrincipalBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "myBorrowPrincipalBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "myRealTokenBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenSupplierIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenBorrowerIndex",
                type: "uint256",
              },
            ],
            internalType: "struct WemixfiLendingViewInterface.AccountInfo",
            name: "accountInfo",
            type: "tuple",
          },
        ],
        internalType: "struct WemixfiLendingViewInterface.CTokenMetaData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "cTokenMetaDataListAuth",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "underlyingAssetAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "exchangeRateCurrent",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "underlyingDecimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "poolBalance",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "underlyingSymbol",
                type: "bytes32",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "contractAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "supplyRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "borrowRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralFactor",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "oraclePrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenSpeed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalReserves",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "cash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenSupplyBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenBorrowBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "reserveFactorMantissa",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "multiplierPerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "kink",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "baseRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "jumpMultiplierPerBlock",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isMintPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isBorrowPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isSeizePaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isTransferPaused",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "borrowCap",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isOraclePaused",
                type: "bool",
              },
            ],
            internalType: "struct WemixfiLendingViewInterface.CTokenInfo",
            name: "cTokenInfo",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "mySuppliedBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "myBorrowedBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mySupplyPrincipalBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "myBorrowPrincipalBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "myRealTokenBalance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenSupplierIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentiveTokenBorrowerIndex",
                type: "uint256",
              },
            ],
            internalType: "struct WemixfiLendingViewInterface.AccountInfo",
            name: "accountInfo",
            type: "tuple",
          },
        ],
        internalType: "struct WemixfiLendingViewInterface.CTokenMetaData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract CToken",
        name: "cTokenBorrowed",
        type: "address",
      },
      {
        internalType: "contract CToken",
        name: "cTokenCollateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "actualRepayAmount",
        type: "uint256",
      },
    ],
    name: "calculateLiquidatorSeizeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract Controller",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "mySuppliedBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "myBorrowedBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mySupplyPrincipalBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "myBorrowPrincipalBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "myRealTokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "incentiveTokenSupplierIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "incentiveTokenBorrowerIndex",
            type: "uint256",
          },
        ],
        internalType: "struct WemixfiLendingViewInterface.AccountInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "getCTokenInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAssetAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "exchangeRateCurrent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "underlyingDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolBalance",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "underlyingSymbol",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "supplyRatePerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRatePerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oraclePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "incentiveTokenSpeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "incentiveTokenSupplyBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "incentiveTokenBorrowBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactorMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "multiplierPerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "kink",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseRatePerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jumpMultiplierPerBlock",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMintPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isBorrowPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isSeizePaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isTransferPaused",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "borrowCap",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOraclePaused",
            type: "bool",
          },
        ],
        internalType: "struct WemixfiLendingViewInterface.CTokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "getLiquidationInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isLiquidateTarget",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "address",
                name: "underlyingTokenAddr",
                type: "address",
              },
              {
                internalType: "address",
                name: "cTokenAddr",
                type: "address",
              },
              {
                internalType: "bool",
                name: "isCollateralAsset",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isBorrowAsset",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "repayAmountMax",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralUnderlyingTokenAmount",
                type: "uint256",
              },
            ],
            internalType: "struct WemixfiLendingViewInterface.TokenInfo[]",
            name: "tokenInfo",
            type: "tuple[]",
          },
        ],
        internalType: "struct WemixfiLendingViewInterface.LiquidationInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "getOraclePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Controller",
        name: "controller_",
        type: "address",
      },
      {
        internalType: "contract WemixfiLendingOracle",
        name: "priceOracle_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mainCTokenSymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mainSymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceOracle",
    outputs: [
      {
        internalType: "contract WemixfiLendingOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Controller",
        name: "newController_",
        type: "address",
      },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract WemixfiLendingOracle",
        name: "priceOracle_",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405260405162000ccc38038062000ccc8339810160408190526200002691620001fc565b62000032838262000046565b6200003d8262000128565b505050620002fa565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a381511562000123576000836001600160a01b031683604051620000ca9190620002dc565b600060405180830381855af49150503d806000811462000107576040519150601f19603f3d011682016040523d82523d6000602084013e6200010c565b606091505b505090508062000121573d806000803e806000fd5b505b505050565b60006200014260008051602062000cac8339815191525490565b90508160008051602062000cac83398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80516001600160a01b0381168114620001b257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001ea578181015183820152602001620001d0565b83811115620001215750506000910152565b6000806000606084860312156200021257600080fd5b6200021d846200019a565b92506200022d602085016200019a565b60408501519092506001600160401b03808211156200024b57600080fd5b818601915086601f8301126200026057600080fd5b815181811115620002755762000275620001b7565b604051601f8201601f19908116603f01168101908382118183101715620002a057620002a0620001b7565b81604052828152896020848701011115620002ba57600080fd5b620002cd836020830160208801620001cd565b80955050505050509250925092565b60008251620002f0818460208701620001cd565b9190910192915050565b6109a2806200030a6000396000f3fe60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146101295780638da5cb5b1461013c578063f2fde38b14610176576100ca565b806301ffc9a7146100d45780633659cfe614610109576100ca565b366100ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d2610196565b005b3480156100e057600080fd5b506100f46100ef366004610806565b6101e1565b60405190151581526020015b60405180910390f35b34801561011557600080fd5b506100d2610124366004610871565b6103af565b6100d261013736600461088c565b610481565b34801561014857600080fd5b5061015161057c565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610100565b34801561018257600080fd5b506100d2610191366004610871565b6105ab565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e8280156101d7578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061027457507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561028157506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831614156102b357506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561039b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103989181019061090f565b60015b6103a85750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e816040518060200160405280600081525061066a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b6105778383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061066a92505050565b505050565b60006105a67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e81610759565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105775760008373ffffffffffffffffffffffffffffffffffffffff16836040516107059190610931565b600060405180830381855af49150503d8060008114610740576040519150601f19603f3d011682016040523d82523d6000602084013e610745565b606091505b50509050806101db573d806000803e806000fd5b60006107837fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006020828403121561081857600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146103a857600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461086c57600080fd5b919050565b60006020828403121561088357600080fd5b6103a882610848565b6000806000604084860312156108a157600080fd5b6108aa84610848565b9250602084013567ffffffffffffffff808211156108c757600080fd5b818601915086601f8301126108db57600080fd5b8135818111156108ea57600080fd5b8760208285010111156108fc57600080fd5b6020830194508093505050509250925092565b60006020828403121561092157600080fd5b815180151581146103a857600080fd5b6000825160005b818110156109525760208186018101518583015201610938565b81811115610961576000828501525b50919091019291505056fea2646970667358221220d2ec357659da93a66b21590e3c56e508e51e4de5703da4d1f7ba0b98d9e047f964736f6c634300080a0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103";

type WemixfiLendingViewConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WemixfiLendingViewConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WemixfiLendingView__factory extends ContractFactory {
  constructor(...args: WemixfiLendingViewConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    implementationAddress: AddressLike,
    ownerAddress: AddressLike,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      implementationAddress,
      ownerAddress,
      data,
      overrides || {}
    );
  }
  override deploy(
    implementationAddress: AddressLike,
    ownerAddress: AddressLike,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(
      implementationAddress,
      ownerAddress,
      data,
      overrides || {}
    ) as Promise<
      WemixfiLendingView & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WemixfiLendingView__factory {
    return super.connect(runner) as WemixfiLendingView__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WemixfiLendingViewInterface {
    return new Interface(_abi) as WemixfiLendingViewInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WemixfiLendingView {
    return new Contract(address, _abi, runner) as unknown as WemixfiLendingView;
  }
}
