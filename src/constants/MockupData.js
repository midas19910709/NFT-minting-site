// Abi info, web3 and alcjemy libraries
import { ForemanABI, ApprenticeABI, HewerABI } from "../contractABI";
import { Alchemy, Network } from "alchemy-sdk";
import Web3 from "web3";

// web3 config url
const WEB3_provider =
  "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_provider));

// alchemy config info
const config = {
  apiKey: "4EuyiFYH25pUx_FfIcLBctVeEttiI4np",
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);

//Original Owner address
const originalOwner = "0xB6c4C95B0181BD9392b4c8958314322C9eB42B9c";

//contract addresses
export const contractAddresses = {
  Apprentice: {
    "River Rock Site": "0xd95b55384a167228Dee43ec037c6A3D0Cc23e244",
    "Blue Gray Site": "0xb135dCc76513b46401aE1c06a7404ecf3247A73B",
    "Argillite Multi Color Site": "0xA3F84deED8976eC8B00f690052CfAcDC07165f74",
    "Argillite Site": "0xd4C3658E4D1c802C8833B263a190742D52A8b2d3",
  },
  Foreman: {
    "River Rock Site": "0x4572e604671f23907bc1eB817095667b123aEce7",
    "Blue Gray Site": "0xA8432B52d2D3ec327F3d95959c5c6C20d9FdA8fe",
    "Argillite Multi Color Site": "0x501F5384bd27a84B417AF5e819E18f6849e24053",
    "Argillite Site": "0x7D2CCD92214F9B331d2b928417c32694E55781a6",
  },
  Hewer: {
    "River Rock Site": "0x88143713635BA7C3Fa2C6D6a310c28b0b59E4C23",
    "Blue Gray Site": "0x3CdE8024bA9D68210041370a10FbDfA85c21Bb36",
    "Argillite Multi Color Site": "0xf80b85796Ae57dd583994E8CF56b59252Ecc3Dde",
    "Argillite Site": "0x519a6423f259405ed32ED8ba40A214f9586B7401",
  },
};

// Retrieve all NFT data by contract
export const main = async () => {
  // Flag to omit metadata
  const omitMetadata = false;

  let nftData = {};

  // Get all NFTs
  let response = await alchemy.nft.getNftsForContract(
    contractAddresses["Apprentice"]["River Rock Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Apprentice"] = {};
  nftData["Apprentice"]["River Rock Site"] = [];
  const contract = new web3.eth.Contract(
    ApprenticeABI,
    contractAddresses["Apprentice"]["River Rock Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Apprentice"]["River Rock Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Apprentice"]["Blue Gray Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Apprentice"]["Blue Gray Site"] = [];
  const contract1 = new web3.eth.Contract(
    ApprenticeABI,
    contractAddresses["Apprentice"]["Blue Gray Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract1.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Apprentice"]["Blue Gray Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Apprentice"]["Argillite Multi Color Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Apprentice"]["Argillite Multi Color Site"] = [];
  const contract2 = new web3.eth.Contract(
    ApprenticeABI,
    contractAddresses["Apprentice"]["Argillite Multi Color Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract2.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Apprentice"]["Argillite Multi Color Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Apprentice"]["Argillite Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Apprentice"]["Argillite Site"] = [];
  const contract3 = new web3.eth.Contract(
    ApprenticeABI,
    contractAddresses["Apprentice"]["Argillite Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract3.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Apprentice"]["Argillite Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Foreman"]["River Rock Site"],
    {
      omitMetadata: omitMetadata,
    }
  );
  // console.log(response.nfts);
  nftData["Foreman"] = {};
  nftData["Foreman"]["River Rock Site"] = [];
  const contract4 = new web3.eth.Contract(
    ForemanABI,
    contractAddresses["Foreman"]["River Rock Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract4.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Foreman"]["River Rock Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Foreman"]["Blue Gray Site"],
    {
      omitMetadata: omitMetadata,
    }
  );
  // console.log(response.nfts);
  nftData["Foreman"]["Blue Gray Site"] = [];
  const contract5 = new web3.eth.Contract(
    ForemanABI,
    contractAddresses["Foreman"]["Blue Gray Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract5.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Foreman"]["Blue Gray Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Foreman"]["Argillite Multi Color Site"],
    {
      omitMetadata: omitMetadata,
    }
  );
  // console.log(response.nfts);
  nftData["Foreman"]["Argillite Multi Color Site"] = [];
  const contract6 = new web3.eth.Contract(
    ForemanABI,
    contractAddresses["Foreman"]["Argillite Multi Color Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract6.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Foreman"]["Argillite Multi Color Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Foreman"]["Argillite Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Foreman"]["Argillite Site"] = [];
  const contract7 = new web3.eth.Contract(
    ForemanABI,
    contractAddresses["Foreman"]["Argillite Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract7.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Foreman"]["Argillite Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Hewer"]["River Rock Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Hewer"] = {};
  nftData["Hewer"]["River Rock Site"] = [];
  const contract8 = new web3.eth.Contract(
    HewerABI,
    contractAddresses["Hewer"]["River Rock Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract8.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Hewer"]["River Rock Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Hewer"]["Blue Gray Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Hewer"]["Blue Gray Site"] = [];
  const contract9 = new web3.eth.Contract(
    HewerABI,
    contractAddresses["Hewer"]["Blue Gray Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract9.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Hewer"]["Blue Gray Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Hewer"]["Argillite Multi Color Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Hewer"]["Argillite Multi Color Site"] = [];
  const contract10 = new web3.eth.Contract(
    HewerABI,
    contractAddresses["Hewer"]["Argillite Multi Color Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract10.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Hewer"]["Argillite Multi Color Site"][val] = data;
    }
  }

  response = await alchemy.nft.getNftsForContract(
    contractAddresses["Hewer"]["Argillite Site"],
    {
      omitMetadata: omitMetadata,
    }
  );

  nftData["Hewer"]["Argillite Site"] = [];
  const contract11 = new web3.eth.Contract(
    HewerABI,
    contractAddresses["Hewer"]["Argillite Site"]
  );
  for (let i = 0; i < response["nfts"].length; i++) {
    let temp;
    let nft = response["nfts"][i];

    contract11.methods.ownerOf(nft.tokenId).call(function (err, result) {
      if (result) {
        temp = result === originalOwner ? true : false;
        dataInput(i);
      } else {
        console.log(err);
      }
    });

    function dataInput(val) {
      let data = {
        src: nft.rawMetadata.image,
        name: nft.rawMetadata.name + " " + nft.tokenId,
        description: nft.rawMetadata.description,
        sale: temp,
      };
      nftData["Hewer"]["Argillite Site"][val] = data;
    }
  }

  return nftData;
};

export const hotDropsData = [
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1633250587603-42e4fd67f5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1614812513172-567d2fe96a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1573221566340-81bdde00e00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1559762717-99c81ac85459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Test NFT #1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    src: "https://images.unsplash.com/photo-1608085575984-d61d8335340e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
