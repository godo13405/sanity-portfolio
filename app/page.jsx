"use server";
import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "./utils/sanityFetch";
import "../styles/global.scss";
import Hero from "../component/Hero/Hero";
import LogoStrip from "../component/LogoStrip/LogoStrip";
import Link from "next/link";
import TestimonialTileGrid from "../component/TestimonialTileGrid/TestimonialTileGrid";
import ExperienceTimeline from "../component/ExperienceTimeline/ExperienceTimeline";
import Tag from "../component/Tag/Tag";
import style from "./style.module.scss";
import MindBlown from "../component/img/mindBlown";
import Footer from "../component/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="section fit">
        <LogoStrip />
      </div>
      <div className="section unwhite">
        <div className="contained">
          <div className={style.headingBlock}>
            <h2>Projects</h2>
            <p>See some of my best work</p>
          </div>
          {sanityFetch({
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
          }).then((data) => (
            <TileGrid data={data} />
          ))}
          <Link href="/project" className="link">
            View all
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="contained">
          <div className={style.headingBlock}>
            <h2>Skills</h2>
          </div>
          {sanityFetch({
            query: `*[_type == 'tag' && skill == true]{
  "slug": Slug.current,
  "name": Name
  }`,
          }).then((data) => {
            return (
              <>
                <div className={style.skillsContainer}>
                  <div className={style.skillTags}>
                    {data.map((tag, k) => (
                      <Tag key={k} data={tag} />
                    ))}
                  </div>
                  <MindBlown />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="section unwhite">
        <div className="contained">
          <div className={style.headingBlock}>
            <h2>Recent Experience</h2>
          </div>
          {sanityFetch({
            query: `*[_type == 'experience']|order(startDate desc){
    name,
    endDate,
    startDate,
  "slug": slug.current,
  "company": company-> {
    name,
    "imageUrl": image.asset->url
  }
        }[0...4]`,
          }).then((data) => (
            <ExperienceTimeline data={data} />
          ))}
          <a
            href="https://cv.goncalo.stratfordandrade.com"
            target="_blank"
            className="link"
          >
            View my full CV
          </a>
        </div>
      </div>
      <div className="section">
        <div className="contained">
          <div className={style.headingBlock}>
            <h2>Testimonials</h2>
            <p>
              What others say about me <br /> Get a glimpse at what it’s like
              working with me
            </p>
          </div>
          {sanityFetch({
            query: `*[_type == 'testimonial' && featured == true]|order(date desc) {
  role,
    name,
    linkedin,
    shortText,
  "slug": slug.current,
  "imageUrl": image.asset->url
        }[0...4]`,
          }).then((data) => (
            <TestimonialTileGrid data={data} />
          ))}
          <Link href="/testimonial" className="link">
            View all
          </Link>
        </div>
      </div>
      <div className="section unwhite">
        <div className="contained">
          <div className={style.headingBlock}>
            <h2>Giving Back</h2>
          </div>
          <div className={style.givingBackContainer}>
            <div className={style.givingBackContainerInner}>
              <div>
                <h3>Teaching</h3>
                <p>
                  I've taught and mentored hundreads of students over the years
                </p>
              </div>
              <a
                href="https://adplist.org/mentors/goncalo-andrade"
                target="_blank"
              >
                <img
                  title="ADPList"
                  src="https://cdn.sanity.io/images/a8hjghpv/production/2b852b8275fd2c98664f58192118df0a604a788e-200x120.svg"
                />
              </a>
            </div>
            <div className={style.givingBackContainerInner}>
              <div>
                <h3>Mentoring</h3>
                <p>
                  I'm part of the Amazing Design People List, you can book a{" "}
                  <a
                    className="link"
                    target="_blank"
                    href="https://adplist.org/mentors/goncalo-andrade?session=4963-general-mentorship"
                  >
                    mentoring session
                  </a>{" "}
                  or{" "}
                  <a
                    className="link"
                    target="_blank"
                    href="https://adplist.org/mentors/goncalo-andrade?session=45743-craft-your-portfolio"
                  >
                    porfolio assitance
                  </a>{" "}
                  with me
                </p>
              </div>
              <a href="https://myuxacademy.com/" target="_blank">
                <img
                  title="UX Academy"
                  src="https://cdn.sanity.io/images/a8hjghpv/production/8cd53d3f4001156a1c9fa566d3110b9679f06062-200x120.svg"
                />
              </a>
            </div>
            <div className={style.givingBackContainerInner}>
              <div>
                <h3>Writing</h3>
                <p>I have also written articles on Medium</p>
              </div>
              <a
                href="https://adplist.org/mentors/goncalo-andrade"
                target="_blank"
              >
                <img title="Medium" src="/img/medium.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
