/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CreateCiviTeam,
  CreateCiviTeamInterface,
} from "../../../contracts/creat_team.sol/CreateCiviTeam";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "CiviTeams",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalMembers",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
    ],
    name: "createGroup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creator",
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
        internalType: "address",
        name: "_groupOwner",
        type: "address",
      },
    ],
    name: "joinGroup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "joinedGroup",
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
        name: "_groupOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_addressMember",
        type: "address",
      },
    ],
    name: "kickMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_teamOwner",
        type: "address",
      },
    ],
    name: "leaveGroup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "returnTotalCiviGroups",
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
        internalType: "address",
        name: "_groupOwner",
        type: "address",
      },
    ],
    name: "returnTotalMembers",
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
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "returnWitchGroupIn",
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
        internalType: "address",
        name: "_groupOwner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "setGroupInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whichGroup",
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
] as const;

const _bytecode =
  "0x6080604052735ea4f6ebd22241e0605eb093da55136ad622eb9a600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561006557600080fd5b50612872806100756000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a6bfb1b011610071578063a6bfb1b014610179578063b2b5811a14610195578063c80785f8146101c5578063eb2bd4fd146101f7578063ed422d8714610213578063f2de40fc14610243576100b4565b806302d05d3f146100b95780630e6f9c40146100d75780633cce8f91146101075780636871eb4d1461012557806396db1ed8146101415780639a824c4f1461015d575b600080fd5b6100c1610273565b6040516100ce91906119ec565b60405180910390f35b6100f160048036038101906100ec9190611a47565b610297565b6040516100fe9190611a8d565b60405180910390f35b61010f6102e8565b60405161011c9190611a8d565b60405180910390f35b61013f600480360381019061013a9190611aa8565b6102f2565b005b61015b60048036038101906101569190611b4d565b61065c565b005b61017760048036038101906101729190611a47565b61073d565b005b610193600480360381019061018e9190611de6565b610c43565b005b6101af60048036038101906101aa9190611a47565b611263565b6040516101bc91906119ec565b60405180910390f35b6101df60048036038101906101da9190611a47565b611296565b6040516101ee93929190611f0c565b60405180910390f35b610211600480360381019061020c9190611a47565b6113d0565b005b61022d60048036038101906102289190611a47565b611797565b60405161023a91906119ec565b60405180910390f35b61025d60048036038101906102589190611a47565b611800565b60405161026a9190611f6c565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060040154915050919050565b6000600354905090565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610360576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035790611fd3565b60405180910390fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661042c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104239061203f565b60405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060030160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f4906120d1565b60405180910390fd5b61050a8160020183611820565b60008160030160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160040160008282546106509190612120565b92505081905550505050565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c190611fd3565b60405180910390fd5b6000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050848482600001918261072092919061236b565b50828282600101918261073492919061236b565b50505050505050565b60011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317b7cf2b336040518263ffffffff1660e01b815260040161079c91906119ec565b602060405180830381865afa1580156107b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dd9190612467565b15151461081f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610816906124e0565b60405180910390fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156108ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e390612572565b60405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166109b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109af9061203f565b60405180910390fd5b60001515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610a4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a42906125de565b60405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001816004016000828254610c3891906125fe565b925050819055505050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610d10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0790612572565b60405180910390fd5b60011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317b7cf2b336040518263ffffffff1660e01b8152600401610d6f91906119ec565b602060405180830381865afa158015610d8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db09190612467565b151514610df2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de9906124e0565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816000019081610e469190612632565b5082816001019081610e589190612632565b5060005b82518110156110915781600201838281518110610e7c57610e7b612704565b5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001826003016000858481518110610eff57610efe612704565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001826004016000828254610f6d91906125fe565b92505081905550600160046000858481518110610f8d57610f8c612704565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055503360056000858481518110610ffe57610ffd612704565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808061108990612733565b915050610e5c565b5080600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555033600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600181600401600082825461123c91906125fe565b9250508190555060016003600082825461125691906125fe565b9250508190555050505050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508060000180546112b99061218e565b80601f01602080910402602001604051908101604052809291908181526020018280546112e59061218e565b80156113325780601f1061130757610100808354040283529160200191611332565b820191906000526020600020905b81548152906001019060200180831161131557829003601f168201915b5050505050908060010180546113479061218e565b80601f01602080910402602001604051908101604052809291908181526020018280546113739061218e565b80156113c05780601f10611395576101008083540402835291602001916113c0565b820191906000526020600020905b8154815290600101906020018083116113a357829003601f168201915b5050505050908060040154905083565b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661149c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611493906127ed565b60405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155f9061203f565b60405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611639576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611630906120d1565b60405180910390fd5b6116468160020133611820565b60008160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018160040160008282546116b59190612120565b925050819055506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60046020528060005260406000206000915054906101000a900460ff1681565b60005b82805490508110156119a6578173ffffffffffffffffffffffffffffffffffffffff1683828154811061185957611858612704565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036119935782600184805490506118b19190612120565b815481106118c2576118c1612704565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838281548110611900576118ff612704565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828054806119595761195861280d565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590556119a6565b808061199e90612733565b915050611823565b505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119d6826119ab565b9050919050565b6119e6816119cb565b82525050565b6000602082019050611a0160008301846119dd565b92915050565b6000604051905090565b600080fd5b600080fd5b611a24816119cb565b8114611a2f57600080fd5b50565b600081359050611a4181611a1b565b92915050565b600060208284031215611a5d57611a5c611a11565b5b6000611a6b84828501611a32565b91505092915050565b6000819050919050565b611a8781611a74565b82525050565b6000602082019050611aa26000830184611a7e565b92915050565b60008060408385031215611abf57611abe611a11565b5b6000611acd85828601611a32565b9250506020611ade85828601611a32565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f840112611b0d57611b0c611ae8565b5b8235905067ffffffffffffffff811115611b2a57611b29611aed565b5b602083019150836001820283011115611b4657611b45611af2565b5b9250929050565b600080600080600060608688031215611b6957611b68611a11565b5b6000611b7788828901611a32565b955050602086013567ffffffffffffffff811115611b9857611b97611a16565b5b611ba488828901611af7565b9450945050604086013567ffffffffffffffff811115611bc757611bc6611a16565b5b611bd388828901611af7565b92509250509295509295909350565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c3082611be7565b810181811067ffffffffffffffff82111715611c4f57611c4e611bf8565b5b80604052505050565b6000611c62611a07565b9050611c6e8282611c27565b919050565b600067ffffffffffffffff821115611c8e57611c8d611bf8565b5b611c9782611be7565b9050602081019050919050565b82818337600083830152505050565b6000611cc6611cc184611c73565b611c58565b905082815260208101848484011115611ce257611ce1611be2565b5b611ced848285611ca4565b509392505050565b600082601f830112611d0a57611d09611ae8565b5b8135611d1a848260208601611cb3565b91505092915050565b600067ffffffffffffffff821115611d3e57611d3d611bf8565b5b602082029050602081019050919050565b6000611d62611d5d84611d23565b611c58565b90508083825260208201905060208402830185811115611d8557611d84611af2565b5b835b81811015611dae5780611d9a8882611a32565b845260208401935050602081019050611d87565b5050509392505050565b600082601f830112611dcd57611dcc611ae8565b5b8135611ddd848260208601611d4f565b91505092915050565b600080600060608486031215611dff57611dfe611a11565b5b600084013567ffffffffffffffff811115611e1d57611e1c611a16565b5b611e2986828701611cf5565b935050602084013567ffffffffffffffff811115611e4a57611e49611a16565b5b611e5686828701611cf5565b925050604084013567ffffffffffffffff811115611e7757611e76611a16565b5b611e8386828701611db8565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ec7578082015181840152602081019050611eac565b60008484015250505050565b6000611ede82611e8d565b611ee88185611e98565b9350611ef8818560208601611ea9565b611f0181611be7565b840191505092915050565b60006060820190508181036000830152611f268186611ed3565b90508181036020830152611f3a8185611ed3565b9050611f496040830184611a7e565b949350505050565b60008115159050919050565b611f6681611f51565b82525050565b6000602082019050611f816000830184611f5d565b92915050565b7f596f7520617265206e6f7420746869732067726f7570206f776e65722e000000600082015250565b6000611fbd601d83611e98565b9150611fc882611f87565b602082019050919050565b60006020820190508181036000830152611fec81611fb0565b9050919050565b7f47726f7570206f776e657220646f6573206e6f74206578697374000000000000600082015250565b6000612029601a83611e98565b915061203482611ff3565b602082019050919050565b600060208201905081810360008301526120588161201c565b9050919050565b7f596f7520617265206e6f742061206d656d626572206f6620746869732067726f60008201527f7570000000000000000000000000000000000000000000000000000000000000602082015250565b60006120bb602283611e98565b91506120c68261205f565b604082019050919050565b600060208201905081810360008301526120ea816120ae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061212b82611a74565b915061213683611a74565b925082820390508181111561214e5761214d6120f1565b5b92915050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121a657607f821691505b6020821081036121b9576121b861215f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026122217fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826121e4565b61222b86836121e4565b95508019841693508086168417925050509392505050565b6000819050919050565b600061226861226361225e84611a74565b612243565b611a74565b9050919050565b6000819050919050565b6122828361224d565b61229661228e8261226f565b8484546121f1565b825550505050565b600090565b6122ab61229e565b6122b6818484612279565b505050565b5b818110156122da576122cf6000826122a3565b6001810190506122bc565b5050565b601f82111561231f576122f0816121bf565b6122f9846121d4565b81016020851015612308578190505b61231c612314856121d4565b8301826122bb565b50505b505050565b600082821c905092915050565b600061234260001984600802612324565b1980831691505092915050565b600061235b8383612331565b9150826002028217905092915050565b6123758383612154565b67ffffffffffffffff81111561238e5761238d611bf8565b5b612398825461218e565b6123a38282856122de565b6000601f8311600181146123d257600084156123c0578287013590505b6123ca858261234f565b865550612432565b601f1984166123e0866121bf565b60005b82811015612408578489013582556001820191506020850194506020810190506123e3565b868310156124255784890135612421601f891682612331565b8355505b6001600288020188555050505b50505050505050565b61244481611f51565b811461244f57600080fd5b50565b6000815190506124618161243b565b92915050565b60006020828403121561247d5761247c611a11565b5b600061248b84828501612452565b91505092915050565b7f596f7520617265206e6f742072656769737465642e0000000000000000000000600082015250565b60006124ca601583611e98565b91506124d582612494565b602082019050919050565b600060208201905081810360008301526124f9816124bd565b9050919050565b7f596f752061726520616c72656164792061206d656d626572206f66206120677260008201527f6f75700000000000000000000000000000000000000000000000000000000000602082015250565b600061255c602383611e98565b915061256782612500565b604082019050919050565b6000602082019050818103600083015261258b8161254f565b9050919050565b7f596f7520617265206a6f696e6564206f6e652067726f75700000000000000000600082015250565b60006125c8601883611e98565b91506125d382612592565b602082019050919050565b600060208201905081810360008301526125f7816125bb565b9050919050565b600061260982611a74565b915061261483611a74565b925082820190508082111561262c5761262b6120f1565b5b92915050565b61263b82611e8d565b67ffffffffffffffff81111561265457612653611bf8565b5b61265e825461218e565b6126698282856122de565b600060209050601f83116001811461269c576000841561268a578287015190505b612694858261234f565b8655506126fc565b601f1984166126aa866121bf565b60005b828110156126d2578489015182556001820191506020850194506020810190506126ad565b868310156126ef57848901516126eb601f891682612331565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061273e82611a74565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036127705761276f6120f1565b5b600182019050919050565b7f596f7520617265206e6f742061206d656d626572206f6620616e792067726f7560008201527f7000000000000000000000000000000000000000000000000000000000000000602082015250565b60006127d7602183611e98565b91506127e28261277b565b604082019050919050565b60006020820190508181036000830152612806816127ca565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220cc06927e1ffd0d991163c8b612aa00170b39479ae5cadbd0bb28274d7b70413164736f6c63430008100033";

type CreateCiviTeamConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreateCiviTeamConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreateCiviTeam__factory extends ContractFactory {
  constructor(...args: CreateCiviTeamConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CreateCiviTeam> {
    return super.deploy(overrides || {}) as Promise<CreateCiviTeam>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CreateCiviTeam {
    return super.attach(address) as CreateCiviTeam;
  }
  override connect(signer: Signer): CreateCiviTeam__factory {
    return super.connect(signer) as CreateCiviTeam__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreateCiviTeamInterface {
    return new utils.Interface(_abi) as CreateCiviTeamInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateCiviTeam {
    return new Contract(address, _abi, signerOrProvider) as CreateCiviTeam;
  }
}
