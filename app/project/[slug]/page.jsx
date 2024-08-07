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
  "color": color.hex,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  tools[]->{
    Name,
    "Slug": Slug.current,
    "imageUrl": image.asset->url
  },
  tags[]->{
    Name,
    "Slug": Slug.current,
    "imageUrl": image.asset->url
  },
  "relatedProjects": relatedProjects[]->{
    "imageUrl": image.asset->url,
    "slug": slug.current,
    name
  },
  name,
  "body": Body[]{
    ...,
    "asset": asset->{
      url,
      altText,
      title,
      "tags": opt.media.tags[]->name.current,
      "hasTransparency": metadata.hasAlpha
    },
  }
}` });
const data = dataArr[0];

  return <article className={style.projectContainer}>
    <div className={style.hero} style={{backgroundColor: `${data.color || 'grey'}`}}>
    <img className={`${style.inner} contained`} src={data.imageUrl} />
    </div>
    <div className={`${style.projectContainerInner} contained`}>
      <h1>{data.name}</h1>
      <PortableText
        value={data.body}
        components={portableTextImage}
      />
      <h2>You might also like</h2>
      <TileGrid data={data.relatedProjects} />
    </div>
  </article >
};

export default Project;
