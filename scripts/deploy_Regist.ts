import { ethers } from "hardhat";

async function main() {

  const Regit = await ethers.getContractFactory("RegistContract");
  const rgist = await Regit.deploy();

  await rgist.deployed();

  console.log(
    `DaiFeiToken deployed to ${rgist.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
