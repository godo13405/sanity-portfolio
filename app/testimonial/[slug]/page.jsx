"use server";
import "../../../styles/global.scss";
import style from "./style.module.scss";
import sanityFetch from "../../utils/sanityFetch";
import { PortableText } from "@portabletext/react";
import TestimonialTileGrid from "../../component/TestimonialTileGrid/TestimonialTileGrid";
import shuffleArray from "../../utils/shuffleArray";
import Link from "next/link";

const Project = async ({ params }) => {
  const dataArr = await sanityFetch({
    query: `*[_type == 'testimonial' && slug.current == '${params.slug}']{
    "body": Body,
    date,
    name,
    "imageUrl": image.asset->url,
    role,
    linkedin,
    company->{
      "slug": slug.current,
      name,
      "imageUrl": image.asset->url
    }
}`,
  });
  const data = dataArr[0];

  return (
    <article className={style.projectContainer}>
      <div className={`section unwhite`}>
        <div className="contained">
          <div className={style.imageContainer}>
            <img src={data.imageUrl} title={data.name} alt={data.name} />
            <img
              src={data.company.imageUrl}
              title={data.company.name}
              alt={data.company.name}
            />
          </div>

          <div className={style.headingBlock}>
            <h2>{data.name}</h2>
            <p>{data.role}</p>
          </div>
        </div>
        <div className={`${style.bodyContainer} contained`}>
          <PortableText value={data.body} />
        </div>
      </div>
      <div className="section">
        <div className="contained">
          <h2>You might also like</h2>
          {sanityFetch({
            query: `*[_type == 'testimonial']|order(date desc) {
  role,
    name,
    linkedin,
    shortText,
  "slug": slug.current,
  "imageUrl": image.asset->url
        }`,
          }).then((data) => (
            <TestimonialTileGrid data={shuffleArray(data, 4)} />
          ))}
          <br />
          <br />
          <Link href="/testimonial" className="link">
            View all
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
