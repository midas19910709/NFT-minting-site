import { useState, useEffect } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import CardList from "../components/CardList";
import { main } from "../constants/MockupData";
import "../styles/Explore.css";
import { SelectSiteName } from "../components/base/SelectSiteName";
import { SelectNftName } from "../components/base/SelectNftName";
import { Loading } from "../components/base/loading";

import Search from "../components/Search";
const Explore = () => {
  const [siteName, setSiteName] = useState("Argillite Site");
  const [nftName, setNFTName] = useState("Apprentice");
  const [exploreList, setExploreList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function response() {
      setLoading(true);
      let res = await main();
      setExploreList(res);
      setLoading(false);
    }
    response();
  }, []);

  return (
    <div id="explore">
      <div id="header">
        <SelectSiteName setSiteNamee={setSiteName} />
        <SelectNftName setNftNamee={setNFTName} />
        <div id="link-containers">
          <ConnectWallet />
        </div>
      </div>
      <Search />
      <div id="list-container">
        {loading && <Loading />}
        {!loading && (
          <CardList list={exploreList} siteName={siteName} nftName={nftName} />
        )}
      </div>
    </div>
  );
};

export default Explore;
