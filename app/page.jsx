"use server";
import "../styles/global.scss";
import Hero from "./component/Hero/Hero";
import LogoStrip from "./component/LogoStrip/LogoStrip";
import Link from "next/link";
import style from "./style.module.scss";
import MindBlown from "./component/img/mindBlown";
import Projects from "./_section/Projects";
import Skills from "./_section/Skills";
import RecentExperience from "./_section/RecentExperience";
import Testimonials from "./_section/Testimonials";

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
          <Projects />
          <Link href="/project" className="link">
            View all
          </Link>
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
          <Testimonials />
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
              <a href="https://myuxacademy.com/" target="_blank">
                <img
                  title="UX Academy"
                  alt="UX Academy"
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
                <img title="Medium" alt="Medium" src="/img/medium.svg" />
              </a>
            </div>
            <div className={style.givingBackContainerInner}>
              <div>
                <h3>Mentoring</h3>
                <p>
                  I help other designers, you can book a mentoring session with
                  me on these platforms
                </p>
              </div>
              <a
                href="https://adplist.org/mentors/goncalo-andrade"
                target="_blank"
              >
                <img
                  title="ADPList"
                  alt="ADPList"
                  src="https://cdn.sanity.io/images/a8hjghpv/production/2b852b8275fd2c98664f58192118df0a604a788e-200x120.svg"
                />
              </a>
              <a href="https://topmate.io/goncalosandrade" target="_blank">
                <img
                  title="TopMate"
                  alt="TopMate"
                  src="https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Ftopmate-light.svg&w=256&q=75"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="contained">
          <div className={style.headingBlock}>
            <h2>Skills</h2>
          </div>
          <div className={style.skillsContainer}>
            <div className={style.skillTags}>
              <Skills />
            </div>
            <MindBlown />
          </div>
        </div>
      </div>
      <div className="section unwhite">
        <div className="contained">
          <div className={style.headingBlock}>
            <h2>Recent Experience</h2>
          </div>
          <RecentExperience />
          <a
            href="https://docs.google.com/document/d/1ylnCcmXUsE-8e804Bht5DXu4rTvYdsy2/export?format=pdf"
            className="link"
          >
            Get my full CV
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
