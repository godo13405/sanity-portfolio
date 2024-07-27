"use server";
import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "./utils/sanityFetch";
import "../styles/global.scss";
import Hero from "../component/Hero/Hero";

const Home = () => {
  return <main>
    <Hero />
    <div class="contained">
      {sanityFetch({ query: `*[_type == 'project']` }).then((data) => <TileGrid data={data} />)}
    </div>
    </main>
};

export default Home;
