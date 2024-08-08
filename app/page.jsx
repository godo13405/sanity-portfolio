"use server";
import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "./utils/sanityFetch";
import "../styles/global.scss";
import Hero from "../component/Hero/Hero";
import LogoStrip from "../component/LogoStrip/LogoStrip";
import Link from "next/link";

const Home = () => {
  return <main>
    <Hero />
    <div className="section">
      <LogoStrip />
    </div>
    <div className="section unwhite">
      <div className="contained">
        {sanityFetch({
          query: `*[_type == 'project' && featured == true]|order(date asc){
  "color": color.hex,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  name,
  tags[]-> {
    "name": Name,
    "slug": Slug.current
  }
}` }).then((data) => <TileGrid data={data} />)}
      <Link href="/project">View all</Link>
      </div>
    </div>
  </main>
};

export default Home;
