import { ethers } from "hardhat";

async function main() {

  const Management = await ethers.getContractFactory("Management");
  const man = await Management.deploy();

  await man.deployed();

  console.log(
    `DaiFeiToken deployed to ${man.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
