"use server";
import style from "./page.module.scss";
import "../../styles/global.scss";
import sanityFetch from "../utils/sanityFetch";
import TileGrid from "../component/TileGrid/TileGrid";

const Project = async ({ params }) => {
  const dataArr = await sanityFetch({
    query: `*[_type == 'project']|order(date desc){
  "color": color.hex,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  name,
  tags[]-> {
    "name": Name,
    "slug": Slug.current
  }
}`,
  });
  const data = dataArr[0];

  return (
    <main className={`${style.tilesContainer} section unwhite`}>
      <div className="contained">
        <TileGrid data={dataArr} />
      </div>
    </main>
  );
};

export default Project;
