"use server";

import "../../styles/global.scss";
import style from "./style.module.scss";
import sanityFetch from "../utils/sanityFetch";
import { PortableText } from "@portabletext/react";
import Face from "../../component/img/face";
import dateTransform from "../utils/dateTransform";
import IconButton from "../../component/IconButton/IconButton";

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
      <IconButton
        className={style.IconButton}
        href="/cv.pdf"
        img="download.svg"
        newTab={true}
      />
      <div className={`contained ${style.outerContainer}`}>
        <div className={style.secondaryContainer}>
          <div className={style.intro}>
            <Face stroke={1} className={style.portrait} />
            <h2>Goncalo Stratford Andrade</h2>
            <p>UX, Product, Service Design & Strategy</p>
          </div>
          <div className={style.section}>
            <h3>About</h3>
            <p className="print-only">
              Portfolio:{" "}
              <a href="goncalo.stratfordandrade.com">
                goncalo.stratfordandrade.com
              </a>
            </p>
            <p>
              <a href="linkedin.com/in/goncaloandrade" target="_blank">
                linkedin.com/in/goncaloandrade
              </a>
            </p>
            <p>
              <a href="mailto:goncalo@stratfordandrade.com">
                goncalo@stratfordandrade.com
              </a>
            </p>
            <p>
              Fluent in <strong>English</strong> and <strong>Portuguese</strong>
              <br />I also speak <strong>French</strong> and{" "}
              <strong>Spanish</strong>
            </p>
          </div>
          <div className={style.section}>
            <h3>Tools</h3>
            {sanityFetch({
              query: `*[_type == 'tool']{
  "name": Name,
  "imageUrl": image.asset->url,
  }`,
            }).then((data) => {
              return (
                <>
                  <div className={style.toolsContainer}>
                    {data.map((tool, k) => (
                      <img
                        key={k}
                        src={tool.imageUrl}
                        title={tool.name}
                        alt={tool.name}
                      />
                    ))}
                  </div>
                </>
              );
            })}
          </div>
          <div className={style.section}>
            <h3>Articles</h3>
            <a
              className={style.article}
              href="https://goncaloandrade.medium.com/how-research-driven-design-can-help-you-focus-you-efforts-8fd0ff9dab68"
              target="_blank"
            >
              How Research Driven Design can help you focus you efforts
              <small>
                <img src="/img/bootCamp.jpeg" title="BootCamp" alt="BootCamp" />
                Published on BootCamp
              </small>
            </a>
            <a
              className={style.article}
              href="https://goncaloandrade.medium.com/5-things-to-consider-on-your-ux-portfolio-5fabd0c04db0"
              target="_blank"
            >
              5 things to consider on your UX portfolio
              <small>
                <img src="/img/bootCamp.jpeg" title="BootCamp" alt="BootCamp" />
                Published on BootCamp
              </small>
            </a>
            <a
              className={style.article}
              href="https://goncaloandrade.medium.com/top-5-ux-résumé-advice-for-juniors-i-give-as-a-mentor-cbb126ac483"
              target="_blank"
            >
              Top 5 UX résumé advice for Juniors I give as a mentor
              <small>
                <img src="/img/bootCamp.jpeg" title="BootCamp" alt="BootCamp" />
                Published on BootCamp
              </small>
            </a>
            <a
              className={style.article}
              href="https://goncaloandrade.medium.com/learning-cards-bf7fb204d2f6"
              target="_blank"
            >
              Learning Cards: organising research findings in an easily
              digestible format
              <small>
                <img
                  src="/img/UXCollective.jpeg"
                  title="UX Collective"
                  alt="UX Collective"
                />
                Published on UX Collective
              </small>
            </a>
            <a
              className={style.article}
              href="https://goncaloandrade.medium.com/when-not-to-call-a-blue-a-blue-functional-colour-names-for-design-systems-773e2a422464"
              target="_blank"
            >
              When not to call a Blue a Blue — functional colour names for
              Design Systems
              <small>
                <img
                  src="/img/UXCollective.jpeg"
                  title="UX Collective"
                  alt="UX Collective"
                />
                Published on UX Collective
              </small>
            </a>
            <a
              className={style.article}
              href="https://goncaloandrade.medium.com/making-your-design-systems-dynamic-644cf1c7d33f"
              target="_blank"
            >
              Making your design systems dynamic
              <small>
                <img
                  src="/img/UXCollective.jpeg"
                  title="UX Collective"
                  alt="UX Collective"
                />
                Published on UX Collective
              </small>
            </a>
          </div>
          <div className={style.section}>
            <h3>Education</h3>
            <p className={style.article}>
              UX Strategy Playbook with Jared Spool<small>2019 London</small>
            </p>
            <p className={style.article}>
              Service Design Course<small>2018 UAL, London</small>
            </p>
            <p className={style.article}>
              MA in Multimedia and Graphic Design
              <small>2009-10 ESAD, Porto Portugal</small>
            </p>
            <p className={style.article}>
              Information Design with Hamish Muir
              <small>2010 ESAD, Porto, Portugal</small>
            </p>
            <p className={style.article}>
              Degree in Graphic Design
              <small>2005-09 ESAD, Porto, Portugal</small>
            </p>
          </div>
          <div className={style.section}>
            <h3>Additional Experience</h3>
            <p className={style.article}>
              UX/Product Design Teacher & Mentor
              <small>From Apr 2020, UX Academy, UXPA UK, ADPlist, Google</small>
              <div className={style.mentorImages}>
                <img
                  src="https://cdn.sanity.io/images/a8hjghpv/production/2b852b8275fd2c98664f58192118df0a604a788e-200x120.svg"
                  title="ADP List"
                  alt="ADP List"
                />
                <img
                  src="https://cdn.sanity.io/images/a8hjghpv/production/8cd53d3f4001156a1c9fa566d3110b9679f06062-200x120.svg"
                  title="UX Academy"
                  alt="UX Academy"
                />
                <img
                  src="https://cdn.sanity.io/images/a8hjghpv/production/04317ec3f568588738552b14a3779fd102cace3e-1200x800.svg"
                  title="Google"
                  alt="Google"
                />
              </div>
            </p>
            <p className={style.article}>
              Tutor for Designing VoiceInteractions
              <small>2018-19 UX Academy, MUXL, London</small>
            </p>
            <p className={style.article}>
              Aviva Spotlight award
              <small>2017, Aviva, London</small>
            </p>
            <p className={style.article}>
              UX Scrum training with Roman Pichler
              <small>2015, London</small>
            </p>
            <p className={style.article}>
              Student Body president
              <small>ESAD, Porto, Portugal</small>
            </p>
            <p className={style.article}>
              Design Survival Manual
              <small>Atelier da Imagem, Porto, Portugal</small>
            </p>
          </div>
        </div>
        <div className={style.primaryContainer}>
          {data.experience.map((d, k) => (
            <div className={style.experienceContainer}>
              <div className={style.experienceTitle}>
                <h3>{d.name}</h3>
                <div className={style.experienceSubtitle}>
                  <img
                    src={d.company.imageUrl}
                    title={d.company.name}
                    titaltle={d.company.name}
                  />
                  <p>
                    {dateTransform(d.startDate)} - {dateTransform(d.endDate)}
                  </p>
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
