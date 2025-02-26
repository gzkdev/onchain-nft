import hre from "hardhat";

const main = async () => {
  const contractAddress = "0x1013e5136279c83C997a95D4a0d626C8eCAc3eD7";
  const reservedForTeam = 10;

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [reservedForTeam],
  });

  console.log(`Contract verified on Sepolia!`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
