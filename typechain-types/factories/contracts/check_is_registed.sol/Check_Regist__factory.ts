/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Check_Regist,
  Check_RegistInterface,
} from "../../../contracts/check_is_registed.sol/Check_Regist";

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
    inputs: [],
    name: "isRegisted",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setRegistContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x608060405273b27a31f1b0af2946b7f582768f03239b1ec07c2c600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561006557600080fd5b5061008261007761008760201b60201c565b61008f60201b60201c565b610153565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610661806101626000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c57806375a13b10146100665780638da5cb5b14610084578063ab38ca02146100a2578063f2fde38b146100be575b600080fd5b6100646100da565b005b61006e6100ee565b60405161007b91906103ee565b60405180910390f35b61008c610191565b604051610099919061044a565b60405180910390f35b6100bc60048036038101906100b79190610496565b6101ba565b005b6100d860048036038101906100d39190610496565b610206565b005b6100e2610289565b6100ec6000610307565b565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317b7cf2b336040518263ffffffff1660e01b815260040161014b919061044a565b602060405180830381865afa158015610168573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018c91906104ef565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101c2610289565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61020e610289565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361027d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102749061059f565b60405180910390fd5b61028681610307565b50565b6102916103cb565b73ffffffffffffffffffffffffffffffffffffffff166102af610191565b73ffffffffffffffffffffffffffffffffffffffff1614610305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fc9061060b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60008115159050919050565b6103e8816103d3565b82525050565b600060208201905061040360008301846103df565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061043482610409565b9050919050565b61044481610429565b82525050565b600060208201905061045f600083018461043b565b92915050565b600080fd5b61047381610429565b811461047e57600080fd5b50565b6000813590506104908161046a565b92915050565b6000602082840312156104ac576104ab610465565b5b60006104ba84828501610481565b91505092915050565b6104cc816103d3565b81146104d757600080fd5b50565b6000815190506104e9816104c3565b92915050565b60006020828403121561050557610504610465565b5b6000610513848285016104da565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061058960268361051c565b91506105948261052d565b604082019050919050565b600060208201905081810360008301526105b88161057c565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006105f560208361051c565b9150610600826105bf565b602082019050919050565b60006020820190508181036000830152610624816105e8565b905091905056fea2646970667358221220b2301a6b93891b4ef3f6b35d226d0855f08f31b296ac305bc06043ef22752c4864736f6c63430008100033";

type Check_RegistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Check_RegistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Check_Regist__factory extends ContractFactory {
  constructor(...args: Check_RegistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Check_Regist> {
    return super.deploy(overrides || {}) as Promise<Check_Regist>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Check_Regist {
    return super.attach(address) as Check_Regist;
  }
  override connect(signer: Signer): Check_Regist__factory {
    return super.connect(signer) as Check_Regist__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Check_RegistInterface {
    return new utils.Interface(_abi) as Check_RegistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Check_Regist {
    return new Contract(address, _abi, signerOrProvider) as Check_Regist;
  }
}