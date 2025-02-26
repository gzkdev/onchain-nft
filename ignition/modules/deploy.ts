import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTManagerModule = buildModule("NFTManagerModule", (m) => {
  const reservedForTeam = 10; // Set the number of NFTs reserved for the team

  const nftManager = m.contract("NFTManager", [reservedForTeam]);

  return { nftManager };
});

export default NFTManagerModule;
