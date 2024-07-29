"use server";
import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "./utils/sanityFetch";
import "../styles/global.scss";
import Hero from "../component/Hero/Hero";
import LogoStrip from "../component/LogoStrip/LogoStrip";

const Home = () => {
  return <main>
    <Hero />
    <LogoStrip />
    <div className="contained">
      {sanityFetch({ query: `*[_type == 'project']` }).then((data) => <TileGrid data={data} />)}
    </div>
    </main>
};

export default Home;
