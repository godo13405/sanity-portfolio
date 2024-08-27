"use server";
import TileGrid from "../../component/TileGrid/TileGrid";
import sanityFetch from "../utils/sanityFetch";

const Projects = async () => {
  const data = await sanityFetch({
    query: `*[_type == 'project' && featured == true]|order(date desc){
  "color": colour.label,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  name,
  tags[]-> {
    "name": Name,
    "slug": Slug.current
  }
}[0...5]`,
  });
  return <TileGrid data={data} />;
};

export default Projects;
