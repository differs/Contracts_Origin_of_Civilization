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

export interface CreateCivilizationInterface extends utils.Interface {
  functions: {
    "CiviMembers(address)": FunctionFragment;
    "createGroup(string,string,address[])": FunctionFragment;
    "creator()": FunctionFragment;
    "joinGroup(address)": FunctionFragment;
    "joinedGroup(address)": FunctionFragment;
    "kickMember(address,address)": FunctionFragment;
    "leaveGroup(address)": FunctionFragment;
    "returnTotalMembers(address)": FunctionFragment;
    "returnWitchGroupIn(address)": FunctionFragment;
    "setGroupInfo(address,string,string)": FunctionFragment;
    "whichGroup(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CiviMembers"
      | "createGroup"
      | "creator"
      | "joinGroup"
      | "joinedGroup"
      | "kickMember"
      | "leaveGroup"
      | "returnTotalMembers"
      | "returnWitchGroupIn"
      | "setGroupInfo"
      | "whichGroup"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CiviMembers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "joinGroup",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "joinedGroup",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "kickMember",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "leaveGroup",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "returnTotalMembers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "returnWitchGroupIn",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setGroupInfo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "whichGroup",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "CiviMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinGroup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinedGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kickMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leaveGroup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnTotalMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnWitchGroupIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGroupInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whichGroup", data: BytesLike): Result;

  events: {};
}

export interface CreateCivilization extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CreateCivilizationInterface;

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
    CiviMembers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        name: string;
        description: string;
        totalMembers: BigNumber;
      }
    >;

    createGroup(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _members: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    joinGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    joinedGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    kickMember(
      _groupOwner: PromiseOrValue<string>,
      _addressMember: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leaveGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnTotalMembers(
      _groupOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnWitchGroupIn(
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setGroupInfo(
      _groupOwner: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whichGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  CiviMembers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      name: string;
      description: string;
      totalMembers: BigNumber;
    }
  >;

  createGroup(
    _name: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    _members: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  creator(overrides?: CallOverrides): Promise<string>;

  joinGroup(
    _groupOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  joinedGroup(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kickMember(
    _groupOwner: PromiseOrValue<string>,
    _addressMember: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leaveGroup(
    _groupOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnTotalMembers(
    _groupOwner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnWitchGroupIn(
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  setGroupInfo(
    _groupOwner: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  whichGroup(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    CiviMembers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        name: string;
        description: string;
        totalMembers: BigNumber;
      }
    >;

    createGroup(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _members: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    creator(overrides?: CallOverrides): Promise<string>;

    joinGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    joinedGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kickMember(
      _groupOwner: PromiseOrValue<string>,
      _addressMember: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    leaveGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    returnTotalMembers(
      _groupOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnWitchGroupIn(
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    setGroupInfo(
      _groupOwner: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    whichGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    CiviMembers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createGroup(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _members: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    joinGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    joinedGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kickMember(
      _groupOwner: PromiseOrValue<string>,
      _addressMember: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leaveGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnTotalMembers(
      _groupOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnWitchGroupIn(
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGroupInfo(
      _groupOwner: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    whichGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CiviMembers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createGroup(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _members: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    joinGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    joinedGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kickMember(
      _groupOwner: PromiseOrValue<string>,
      _addressMember: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leaveGroup(
      _groupOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnTotalMembers(
      _groupOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnWitchGroupIn(
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGroupInfo(
      _groupOwner: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    whichGroup(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}