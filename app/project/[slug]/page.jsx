"use server";
import style from "./page.module.scss";
import "../../../styles/global.scss";
import portableTextImage from "../../utils/portableText/portableTextImage";
import sanityFetch from "../../utils/sanityFetch";
import { PortableText } from "@portabletext/react";
import TileGrid from "../../../component/TileGrid/TileGrid";
import Tag from "../../../component/Tag/Tag";

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
    "name": Name,
    "slug": Slug.current
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
  },
    company->{
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }
}` });
  const data = dataArr[0];

  return <article className={style.projectContainer}>
    <div className={`${style.hero} section unwhite`}>
      <div className="contained">
        <div className={style.featuredContainer}>
          <a href={`javascript:navigator.clipboard.writeText('${process.env.NEXT_PUBLIC_URL}/${data.slug}')`} className={style.iconButton}>
            <img src="/img/share.svg" />
          </a>
          <img className={style.featuredImage} src={data.imageUrl} style={{ backgroundColor: `${data.color || 'grey'}` }} />
          {data.company && <a className={style.companyContainer}><img src={data.company.imageUrl} /></a>}
        </div>

        <h2>{data.name}</h2>
        {data.tags && data.tags.length && <div className={style.tagsContainer}>{data.tags.map((tag, k) => <Tag key={k} data={tag} />)}</div>}
      </div>
    </div>
    <div className={`${style.projectContainerInner} contained`}>
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
