"use server";
import "../../styles/global.scss";
import style from "./style.module.scss";

const About = () => {
  return (
    <main>
      <div className="section unwhite">
        <div className={`contained ${style.containedInner}`}>
          <h1>
            <small>Hi, I’m</small>
            <br />
            Gonçalo Stratford Andrade
          </h1>
          <div className={style.picture}></div>
          <p>
            I'm a seasoned UX professional with over 14 years of experience
            shaping exceptional digital experiences. My career spans industries
            like finance, energy, media, and retail, where I’ve collaborated
            with high-profile clients such as <strong>Lloyds</strong>,{" "}
            <strong>Aviva</strong>,<strong>Vogue</strong>, <strong>EDF</strong>,{" "}
            <strong>Shell</strong>, and more to deliver impactful solutions.
          </p>
          <p>
            Throughout my journey, I’ve honed my leadership skills, successfully
            guiding and mentoring design teams to excel in fast-paced,
            high-stakes environments. I take pride in fostering a culture of
            innovation and collaboration, empowering teams to unlock their
            potential and create meaningful outcomes.
          </p>
          <p>
            Design systems are a cornerstone of my expertise. I’ve led the
            creation, scaling, and optimization of systems that ensure
            consistency, flexibility, and efficiency across large-scale
            projects. Whether working with established guidelines or creating a
            framework from scratch, I thrive on balancing structure with
            creativity.
          </p>
          <p>
            Workshops are where my passion for collaboration shines. I
            specialize in crafting and facilitating workshops that bring
            together cross-functional teams to solve complex challenges, define
            strategic goals, and align around shared visions. By blending
            service design thinking with hands-on activities, I ensure every
            session drives actionable insights and value
          </p>
          <p>
            Fluent in English and Portuguese, and adept with tools like Figma,
            Miro, Adobe XD, and Sketch, I bring a comprehensive skill set to
            every project. My portfolio reflects my dedication to delivering
            user-centered, data-informed solutions that not only meet but exceed
            expectations.
          </p>
          <p>Let’s create something remarkable together.</p>
          <a className="CTA" href="mailto:goncalo@stratfordandrade.com?subject=Getting%20in%20touch%20from%20your%20portfolio&body=Hi%20Goncalo%0A%0AI've%20just%20been%20to%20your%20portfolio%20site%2C%20and%20would%20love%20to%20get%20in%20touch%20and%20learn%20more%20about%20you.">
            Contact me
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
