"use server";
import style from "./page.module.scss";
import "../../../styles/global.scss";
import portableTextImage from "../../utils/portableText/portableTextImage";
import sanityFetch from "../../utils/sanityFetch";
import { PortableText } from "@portabletext/react";
import TileGrid from "../../../component/TileGrid/TileGrid";

const Project = async ({ params }) => {
  const dataArr = await sanityFetch({
    query: `*[_type == 'project' && slug.current == '${params.slug}'] {
  ...,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  tools[]->,
  tags[]->,
  relatedProjects[]->
}` });
const data = dataArr[0];

  return <article className={style.projectContainer}>
    <div className={style.hero} style={{backgroundImage:`url(${data.imageUrl})`,backgroundColor: `${data.color.hex || 'grey'}`}}></div>
    <div className={`${style.projectContainerInner} contained`}>
      <h1>{data.name}</h1>
      <PortableText
        value={data.Body}
        components={portableTextImage}
      />
      <h2>You might also like</h2>
      <TileGrid data={data.relatedProjects} />
    </div>
  </article >
};

export default Project;
