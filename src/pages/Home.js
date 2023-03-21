import Hero from "../components/Hero";
import "../styles/Home.css";
import { hotDropsData } from "../constants/MockupData";

const Home = () => {
  return (
    <div id="home">
      <Hero list={hotDropsData} />
    </div>
  );
};

export default Home;
