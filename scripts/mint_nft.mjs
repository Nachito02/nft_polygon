const CONTRACT_ADDRESS = "0xa3506d8520898681744425a4C06C855D4a2EaDb0";
const META_DATA_URL =
  "https://bafyreifa3clpzp2hiu53jqc7wrfntnq7i4niyycjolgvacz5jhjmgzqdua.ipfs.dweb.link/metadata.json";

async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
