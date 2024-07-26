import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "./utils/sanityFetch";

const Home = () => {
    return <TileGrid q={`[_type == 'project']`} />
}

export default Home;