"use server";

import "../../styles/global.scss";
import style from "./style.module.scss";
import sanityFetch from "../utils/sanityFetch";
import { PortableText } from "@portabletext/react";
import Face from "../../component/img/face";
import dateTransform from "../utils/dateTransform";

const Project = async ({ params }) => {
  const dataArr = await sanityFetch({
    query: `*[_type == 'experience']|order(startDate desc){
  startDate,
    endDate,
    name,
    type,
    "body": Body,
  "relatedProjects": relatedProjects[]->{
    name,
    "slug": slug.current,
    "imageUrl": image.asset->url
  },
  "company": company-> {
    name,
    "imageUrl": image.asset->url
  }
}`,
  });
  const data = {
    experience: dataArr.filter((d) => d.type == "experience"),
    additionalExperience: dataArr.filter(
      (d) => d.type == "additionalExperience"
    ),
  };

  return (
    <main className="section unwhite">
      <div className={`contained ${style.outerContainer}`}>
        <div className={style.secondaryContainer}>
          <div className={style.intro}>
            <Face stroke={1} className={style.portrait} />
            <h2>Goncalo Stratford Andrade</h2>
          </div>
          {data.additionalExperience.map((d, k) => (
            <div className={style.experienceContainer}>
              <h3>{d.name}</h3>
              <PortableText value={d.body} />
            </div>
          ))}
        </div>
        <div className={style.primaryContainer}>
          {data.experience.map((d, k) => (
            <div className={style.experienceContainer}>
              <div className={style.experienceTitle}>
                <h3>{d.name}</h3>
                <div className={style.experienceSubtitle}>
                    <img src={d.company.imageUrl} title={d.company.name} />
                    <p>{dateTransform(d.startDate)} - {dateTransform(d.endDate)}</p>
                </div>
              </div>
              <PortableText value={d.body} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Project;
