"use server";
import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "./utils/sanityFetch";

const Home = () => {
  return sanityFetch({ query: `*[_type == 'project']` }).then((data) => <TileGrid data={data} />);
};

export default Home;
