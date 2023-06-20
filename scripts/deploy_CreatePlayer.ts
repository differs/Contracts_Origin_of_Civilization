import { ethers } from "hardhat";

async function main() {

  const PlayerContract = await ethers.getContractFactory("PlayerContract");
  const player = await PlayerContract.deploy();

  await player.deployed();

  console.log(
    `DaiFeiToken deployed to ${player.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
