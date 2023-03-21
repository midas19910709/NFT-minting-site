import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/base/Button";
import { FaEthereum, FaHome, FaExclamationCircle } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { useMobile } from "../hooks/isMobile";
import { useARStatus } from "../hooks/isARStatus";
import { ForemanABI, ApprenticeABI, HewerABI } from "../contractABI";
import { contractAddresses } from "../constants/MockupData";
import { AlertMessage } from "../components/base/Alert";
import Web3 from "web3";

const NFTDetail = () => {
  const isMobile = useMobile();

  const [colors, setColors] = useState([]);

  const [iswallet, setIswallet] = useState(true);

  const [statuse, setStatuse] = useState(false);

  const [statuss, setStatuss] = useState(false);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    setColors([]);
    return () => {};
  }, [state]);

  const isARSupport = useARStatus(state.item.src);
  console.log(state.nftName);
  console.log(state.siteName);

  const handleclick = async () => {
    if (!window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (err) {
        console.log(err);
        setIswallet(false);
      }
    } else {
      const web3 = new Web3(window.ethereum);
      let contractABI = [];
      contractABI =
        state.nftName === "Apprentice"
          ? ApprenticeABI
          : state.nftName === "Foreman"
          ? ForemanABI
          : HewerABI;
      const contract = new web3.eth.Contract(
        contractABI,
        contractAddresses[state.nftName][state.siteName]
      );
      await window.ethereum.enable();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      let name = state.item.name.split(" ");
      let id = name[name.length - 1];

      await contract.methods
        .buy(Number(id))
        .send({ from: account, value: web3.utils.toWei(state.price, "ether") })
        .on("error", function (error) {
          console.log(error);
          setStatuse(true);
        })
        .on("transactionHash", function (transactionHash) {
          console.log(transactionHash);
        })
        .on("receipt", function (receipt) {
          console.log(receipt);
          setStatuss(true);
        });
    }
  };

  return (
    <div>
      <div id="nft-detail-card-wrapper">
        {statuss && (
          <AlertMessage
            param={"success"}
            msg={"Your transaction is succeed!"}
          />
        )}
        {statuse && (
          <AlertMessage param={"error"} msg={"Your transaction is failed!"} />
        )}
        {!iswallet && (
          <AlertMessage
            param={"info"}
            msg={"No wallet is found. Pls download and install it!"}
          />
        )}
        <Card
          width={isMobile ? "100%" : "50vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            <div id="detail-content">
              {isARSupport ? (
                <model-viewer
                  ar-scale="auto"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  id="arDetail"
                  loading="eager"
                  camera-controls
                  auto-rotate
                  src={state.item.src}
                >
                  {" "}
                </model-viewer>
              ) : (
                <>
                  {" "}
                  <ColorExtractor getColors={getColors}>
                    <img id="detail-image" src={state.item.src} />
                  </ColorExtractor>
                </>
              )}

              <div id="detail-info" style={{}}>
                <div id="detail-info-container">
                  <p id="collection"> {state.item.name} </p>
                  <p id="name"> {state.item.name} </p>
                  <p id="description"> {state.item.description} </p>
                </div>

                <div id="detail-controls">
                  {state.item.sale ? (
                    <Button
                      onClick={handleclick}
                      width={isMobile ? "70%" : "70%"}
                      height="50px"
                      child={
                        <div id="button-child">
                          <Icon
                            icon="cryptocurrency:matic"
                            style={{ fontSize: "28px" }}
                          />
                          <p id="price">{state.price}</p>
                        </div>
                      }
                    ></Button>
                  ) : (
                    <Button
                      width={isMobile ? "70%" : "70%"}
                      height="50px"
                      child={
                        <div id="button-child">
                          <FaExclamationCircle size="28px" />
                          <p id="price">Sold out</p>
                        </div>
                      }
                    ></Button>
                  )}
                  <Button
                    margin-left="5px"
                    onClick={function () {
                      return navigate("/");
                    }}
                    width={isMobile ? "70%" : "70%"}
                    height="50px"
                    child={
                      <div id="button-child">
                        <FaHome size="28px" />
                        <p id="price">Home</p>
                      </div>
                    }
                  ></Button>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default NFTDetail;
