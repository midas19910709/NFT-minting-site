import react, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { Select } from '@material-ui/core';
import {SelectSiteName} from "./base/SelectSiteName";
import {SelectNftName} from "./base/SelectNftName";

const Header = () => {

  const { activateBrowserWallet, deactivate, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const [siteName, setSiteName] = useState("Argillite Site");
  const [nftName, setNFTName] = useState("Apprentice");
  const handleWallet = () => {
    activateBrowserWallet();
  }
  const handleChange = event => {
    setNFTName(event.target.value);
  };

  const handleChangeSiteName = event => {
    setSiteName(event.target.value);
  };

  return (
    <div id="header">
      {/* <select style={{ height: '40px'}} value={siteName} onChange={handleChangeSiteName}>
        <option value="Argillite Site">Argillite Site</option>
        <option value="Argillite Multi Color Site">Argillite Multi Color Site</option>
        <option value="Blue Gray Site">Blue Gray Site</option>
        <option value="River Rock Site">River Rock Site</option>
      </select> */}
      <SelectSiteName siteName = {siteName}/>
      {/* <Link to='/' id='logo'>NFT Room</Link> */}
      {/* <select style={{ height: '40px'}} value={nftName} onChange={handleChange}>
        <option value="Apprentice">Apprentice</option>
        <option value="Foreman">Foreman</option>
        <option value="Hewer">Hewer</option>
      </select> */}
      <SelectNftName nftName = {nftName}/>
      <div id="link-containers">
        {/* {!account && <button id="connect-wallet" onClick={activateBrowserWallet}> Connect </button>}
        {account && <button  id="connect-wallet"onClick={deactivate}> {account}</button>} */}
        {/* {account && <button id = "connect-wallet">Account: {account}</button>}  */}

        {/* <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button> */}
      </div>
    </div>
  );
}

export default Header;