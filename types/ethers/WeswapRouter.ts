/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface WeswapRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "WWEMIX"
      | "addLiquidity"
      | "addLiquidityWEMIX"
      | "factory"
      | "getAmountIn"
      | "getAmountOut"
      | "getAmountsIn"
      | "getAmountsOut"
      | "quote"
      | "removeLiquidity"
      | "removeLiquidityWEMIX"
      | "removeLiquidityWEMIXWithPermit"
      | "removeLiquidityWithPermit"
      | "swapExactTokensForTokens"
      | "swapExactTokensForWEMIX"
      | "swapExactWEMIXForTokens"
      | "swapTokensForExactTokens"
      | "swapTokensForExactWEMIX"
      | "swapWEMIXForExactTokens"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddLiquidityReturn"
      | "Receive"
      | "RemoveLiquidityReturn"
  ): EventFragment;

  encodeFunctionData(functionFragment: "WWEMIX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityWEMIX",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountIn",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsIn",
    values: [BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityWEMIX",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityWEMIXWithPermit",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityWithPermit",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForWEMIX",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactWEMIXForTokens",
    values: [BigNumberish, AddressLike[], AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactWEMIX",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapWEMIXForExactTokens",
    values: [BigNumberish, AddressLike[], AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "WWEMIX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityWEMIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityWEMIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityWEMIXWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForWEMIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactWEMIXForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactWEMIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapWEMIXForExactTokens",
    data: BytesLike
  ): Result;
}

export namespace AddLiquidityReturnEvent {
  export type InputTuple = [
    amountA: BigNumberish,
    amountB: BigNumberish,
    liquidity: BigNumberish
  ];
  export type OutputTuple = [
    amountA: bigint,
    amountB: bigint,
    liquidity: bigint
  ];
  export interface OutputObject {
    amountA: bigint;
    amountB: bigint;
    liquidity: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReceiveEvent {
  export type InputTuple = [who: AddressLike, value: BigNumberish];
  export type OutputTuple = [who: string, value: bigint];
  export interface OutputObject {
    who: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveLiquidityReturnEvent {
  export type InputTuple = [amountA: BigNumberish, amountB: BigNumberish];
  export type OutputTuple = [amountA: bigint, amountB: bigint];
  export interface OutputObject {
    amountA: bigint;
    amountB: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface WeswapRouter extends BaseContract {
  connect(runner?: ContractRunner | null): WeswapRouter;
  waitForDeployment(): Promise<this>;

  interface: WeswapRouterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  WWEMIX: TypedContractMethod<[], [string], "view">;

  addLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "nonpayable"
  >;

  addLiquidityWEMIX: TypedContractMethod<
    [
      token: AddressLike,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountWEMIXMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountToken: bigint;
        amountWEMIX: bigint;
        liquidity: bigint;
      }
    ],
    "payable"
  >;

  factory: TypedContractMethod<[], [string], "view">;

  getAmountIn: TypedContractMethod<
    [
      amountOut: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getAmountOut: TypedContractMethod<
    [amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish],
    [bigint],
    "view"
  >;

  getAmountsIn: TypedContractMethod<
    [amountOut: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getAmountsOut: TypedContractMethod<
    [amountIn: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;

  quote: TypedContractMethod<
    [amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish],
    [bigint],
    "view"
  >;

  removeLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;

  removeLiquidityWEMIX: TypedContractMethod<
    [
      token: AddressLike,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountWEMIXMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountToken: bigint; amountWEMIX: bigint }],
    "nonpayable"
  >;

  removeLiquidityWEMIXWithPermit: TypedContractMethod<
    [
      token: AddressLike,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountWEMIXMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountToken: bigint; amountWEMIX: bigint }],
    "nonpayable"
  >;

  removeLiquidityWithPermit: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;

  swapExactTokensForTokens: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapExactTokensForWEMIX: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapExactWEMIXForTokens: TypedContractMethod<
    [
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;

  swapTokensForExactTokens: TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapTokensForExactWEMIX: TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapWEMIXForExactTokens: TypedContractMethod<
    [
      amountOut: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WWEMIX"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addLiquidityWEMIX"
  ): TypedContractMethod<
    [
      token: AddressLike,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountWEMIXMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountToken: bigint;
        amountWEMIX: bigint;
        liquidity: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAmountIn"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountOut"
  ): TypedContractMethod<
    [amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountsIn"
  ): TypedContractMethod<
    [amountOut: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountsOut"
  ): TypedContractMethod<
    [amountIn: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "quote"
  ): TypedContractMethod<
    [amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityWEMIX"
  ): TypedContractMethod<
    [
      token: AddressLike,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountWEMIXMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountToken: bigint; amountWEMIX: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityWEMIXWithPermit"
  ): TypedContractMethod<
    [
      token: AddressLike,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountWEMIXMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountToken: bigint; amountWEMIX: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityWithPermit"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForTokens"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForWEMIX"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactWEMIXForTokens"
  ): TypedContractMethod<
    [
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapTokensForExactTokens"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapTokensForExactWEMIX"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapWEMIXForExactTokens"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;

  getEvent(
    key: "AddLiquidityReturn"
  ): TypedContractEvent<
    AddLiquidityReturnEvent.InputTuple,
    AddLiquidityReturnEvent.OutputTuple,
    AddLiquidityReturnEvent.OutputObject
  >;
  getEvent(
    key: "Receive"
  ): TypedContractEvent<
    ReceiveEvent.InputTuple,
    ReceiveEvent.OutputTuple,
    ReceiveEvent.OutputObject
  >;
  getEvent(
    key: "RemoveLiquidityReturn"
  ): TypedContractEvent<
    RemoveLiquidityReturnEvent.InputTuple,
    RemoveLiquidityReturnEvent.OutputTuple,
    RemoveLiquidityReturnEvent.OutputObject
  >;

  filters: {
    "AddLiquidityReturn(uint256,uint256,uint256)": TypedContractEvent<
      AddLiquidityReturnEvent.InputTuple,
      AddLiquidityReturnEvent.OutputTuple,
      AddLiquidityReturnEvent.OutputObject
    >;
    AddLiquidityReturn: TypedContractEvent<
      AddLiquidityReturnEvent.InputTuple,
      AddLiquidityReturnEvent.OutputTuple,
      AddLiquidityReturnEvent.OutputObject
    >;

    "Receive(address,uint256)": TypedContractEvent<
      ReceiveEvent.InputTuple,
      ReceiveEvent.OutputTuple,
      ReceiveEvent.OutputObject
    >;
    Receive: TypedContractEvent<
      ReceiveEvent.InputTuple,
      ReceiveEvent.OutputTuple,
      ReceiveEvent.OutputObject
    >;

    "RemoveLiquidityReturn(uint256,uint256)": TypedContractEvent<
      RemoveLiquidityReturnEvent.InputTuple,
      RemoveLiquidityReturnEvent.OutputTuple,
      RemoveLiquidityReturnEvent.OutputObject
    >;
    RemoveLiquidityReturn: TypedContractEvent<
      RemoveLiquidityReturnEvent.InputTuple,
      RemoveLiquidityReturnEvent.OutputTuple,
      RemoveLiquidityReturnEvent.OutputObject
    >;
  };
}
