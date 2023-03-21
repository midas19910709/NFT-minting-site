import React, { useEffect, useState } from "react";

import NFTCard from "./NFTCard";
import "../styles/CardList.css";

import { useNavigate } from "react-router-dom";

import { ForemanABI, ApprenticeABI, HewerABI } from "../contractABI";
import { contractAddresses } from "../constants/MockupData";
import Web3 from "web3";

const WEB3_provider =
  "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_provider));

const CardList = ({ list, type = "horizontal", siteName, nftName }) => {
  const [price, setPrice] = useState(" ");

  let navigate = useNavigate();
  let contractABI = [];

  contractABI =
    nftName === "Apprentice"
      ? ApprenticeABI
      : nftName === "Foreman"
      ? ForemanABI
      : HewerABI;

  const contract = new web3.eth.Contract(
    contractABI,
    contractAddresses[nftName][siteName]
  );

  useEffect(() => {
    contract.methods.PRICE().call(function (err, result) {
      setPrice(web3.utils.fromWei(result, "ether"));
    });
  }, [contract.methods, nftName]);

  return (
    <div
      id="card-list"
      style={{ flexDirection: type === "horizontal" ? "row" : "column" }}
    >
      {typeof list[nftName] != "undefined" &&
        list[nftName][siteName].map((item, index) => (
          <NFTCard
            price={price}
            nftSrc={item.src}
            nftName={item.name}
            sale={item.sale}
            key={index}
            onClick={() =>
              navigate("/detail", {
                state: {
                  item: item,
                  nftName: nftName,
                  siteName: siteName,
                  price: price,
                },
              })
            }
          />
        ))}
    </div>
  );
};

export default CardList;
