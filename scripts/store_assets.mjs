import { NFTStorage, File } from "nft.storage";
import fs from "fs";
import dontenv from "dotenv";
dontenv.config();

const API_KEY = process.env.NFT_STORAGE_API_KEY;

async function storeAssets() {
  const client = new NFTStorage({ token: API_KEY });

  const metadata = await client.store({
    name: "ExampleNFT",
    description: "My Example NFT is awesome artWork!",
    image: new File([await fs.promises.readFile("assets/nft.png")], "nft.png", {
      type: "image/png",
    }),
  });

  console.log("Metadata stored on Filecoin and IPFS with URL", metadata.url);
}

storeAssets()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
