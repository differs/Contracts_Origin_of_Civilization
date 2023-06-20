import { ethers } from "hardhat";

async function main() {

  const CreatCiviTeam = await ethers.getContractFactory("CreateCiviTeam");
  const createCiviTeam = await CreatCiviTeam.deploy();

  await createCiviTeam.deployed();

  console.log(
    `DaiFeiToken deployed to ${createCiviTeam.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
