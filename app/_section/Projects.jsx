"use client";
import { useEffect, useState } from "react";
import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "../utils/sanityFetch";
import Loading from "../component/Loading/Loading";

const Projects = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      sanityFetch({
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
      }).then((d) => setData(d));
    }
  }, [data]);
  if (!data) return <Loading />;
  return <TileGrid data={data} />;
};

export default Projects;
