import React, { useEffect, useState } from "react";
import "../styles/NFTCard.css";
import { FaEthereum } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { ColorExtractor } from "react-color-extractor";
import Card from "./base/Card";
import Button from "./base/Button";
import { Colors } from "../constants/Colors";

import { useARStatus } from "../hooks/isARStatus";

const NFTCard = ({ nftName, price, nftSrc, sale, onClick }) => {
  const [colors, setColors] = useState([]);

  const isARSupport = useARStatus(nftSrc);

  useEffect(() => {
    console.log(isARSupport);
  }, []);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  return (
    <Card
      blurColor={colors[0]}
      child={
        <>
          {isARSupport ? (
            <model-viewer
              ar-scale="auto"
              ar
              ar-modes="webxr scene-viewer quick-look"
              id="reveal"
              loading="eager"
              camera-controls
              auto-rotate
              src={nftSrc}
            >
              {" "}
            </model-viewer>
          ) : (
            <>
              <ColorExtractor getColors={getColors}>
                <img className="nft-image" src={nftSrc} />
              </ColorExtractor>
            </>
          )}
          <div className="wrapper">
            <div className="info-container">
              <p className="owner"> KISH MINE </p>
              <p className="name">{nftName}</p>
            </div>

            <div className="price-container">
              <p className="price-label">Price</p>
              <p className="price">
                {" "}
                <Icon icon="cryptocurrency:matic" /> {price}
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button
              color={sale ? Colors.buttons.primary : Colors.buttons.secondary}
              textContent={sale ? "Buy Now" : "Sold Out"}
              disabled={!sale}
              onClick={onClick}
            />
          </div>
        </>
      }
    ></Card>
  );
};

export default NFTCard;
