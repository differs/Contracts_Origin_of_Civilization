/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface RegistContractInterface extends utils.Interface {
  functions: {
    "isRegisted(address)": FunctionFragment;
    "regist()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "isRegisted" | "regist"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isRegisted",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "regist", values?: undefined): string;

  decodeFunctionResult(functionFragment: "isRegisted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "regist", data: BytesLike): Result;

  events: {};
}

export interface RegistContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isRegisted(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    regist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  isRegisted(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  regist(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isRegisted(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    regist(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    isRegisted(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    regist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isRegisted(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    regist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}