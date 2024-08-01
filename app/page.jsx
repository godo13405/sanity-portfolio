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
      {sanityFetch({
        query: `*[_type == 'project' && featured == true]|order(date asc){
  "color": color.hex,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  name
}` }).then((data) => <TileGrid data={data} />)}
    </div>
  </main>
};

export default Home;
