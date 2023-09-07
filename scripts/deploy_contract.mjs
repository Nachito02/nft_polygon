async function deployContract() {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const exampleNFT = await ExampleNFT.deploy();

  await exampleNFT.deployed();

  const txHash = exampleNFT.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);

  const contractAddress = txReceipt.contractAddress;

  console.log("Contract DEPLOYED TO ADDRESS", contractAddress);
}

deployContract()
  .then(() => process.exit(1))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
