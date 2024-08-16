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

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="section">
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
            query: `*[_type == 'tool' || (_type == 'tag' && skill == true)]{
  "slug": Slug.current,
  "name": Name,
  "imageUrl": image.asset->url,
  _type
  }`,
          }).then((data) => {
            return (
              <>
                <div className={style.toolsContainer}>
                  {data
                    .filter((x) => x._type == "tool")
                    .map((tool, k) => (
                      <img src={tool.imageUrl} title={tool.name} />
                    ))}
                </div>
                <div className={style.skillsContainer}>
                  {data
                    .filter((x) => x._type == "tag")
                    .map((tag, k) => (
                      <Tag data={tag} />
                    ))}
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
            <p>I enjoy teaching and mentoring</p>
          </div>

          <div className={style.schoolLogoContainer}>
            <a
              href="https://adplist.org/mentors/goncalo-andrade"
              target="_blank"
            >
              <img
                title="ADPList"
                src="https://cdn.sanity.io/images/a8hjghpv/production/2b852b8275fd2c98664f58192118df0a604a788e-200x120.svg"
              />
            </a>
            <a href="https://myuxacademy.com/" target="_blank">
              <img
                title="UX Academy"
                src="https://cdn.sanity.io/images/a8hjghpv/production/8cd53d3f4001156a1c9fa566d3110b9679f06062-200x120.svg"
              />
            </a>
          </div>

          {/* ADPList booking form */}
          {/* <section style={{
          height: 496,
          boxShadow: 'rgba(142, 151, 158, 0.15) 0px 4px 19px 0px',
          borderRadius: 16,
          overflow: 'hidden',
          width: '100%',
          maxWidth: 650
        }}>
          <iframe src="https://adplist.org/widgets/booking?src=goncalo-andrade" title="" width="100%" height="100%" loading="lazy" style={{ border: 0 }}></iframe>
        </section> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
