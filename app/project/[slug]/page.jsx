"use server";
import style from "./page.module.scss";
import portableTextImage from "../../utils/portableText/portableTextImage";
import sanityFetch from "../../utils/sanityFetch";
import { PortableText } from "@portabletext/react";
import TileGrid from "../../../component/TileGrid/TileGrid";

const Project = async ({ params }) => {
  const data = await sanityFetch({ query: `*[_type == 'project' && slug.current == '${params.slug}'] {
  ...,
  tools[]->,
  relatedProjects[]->
}` });

  return <div className={style.projectContainer}>
    <PortableText
      value={data[0].Body}
      components={portableTextImage}
    />
    <h2>You might also like</h2>
    <TileGrid data={data}/>
    </div>
};

export default Project;
