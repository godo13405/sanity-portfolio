import CareerYears from "../../utils/careerYears";
import IconButton from "../IconButton/IconButton";
import style from "./style.module.scss";

const Hero = () => {
  return (
    <div className={`${style.heroContainer} section unwhite`}>
      <div className={`${style.heroInner} contained`}>
        <div className={style.textContainer}>
          <div>
            <h1>
              Goncalo <br />
              S. Andrade
            </h1>
            <p className={style.hideMobile}>
              {process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
            </p>
          </div>

          <div className={`${style.countersContainer} ${style.hideMobile}`}>
            <div>
              <h2>{CareerYears()}+</h2>
              <p>years of experience</p>
            </div>
            <div>
              <h2>100+</h2>
              <p>Students & Mentees helped</p>
            </div>
          </div>
        </div>
        <div className={style.pictureContainer}>
          <div
            className={style.picture}
            style={{ backgroundImage: "url(/img/me.png)" }}
          />
          <IconButton
            className={style.IconButton}
            href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1ylnCcmXUsE-8e804Bht5DXu4rTvYdsy2/export?format=pdf"
            img="cv.svg"
          />
          <div className={style.iconButtonGroup}>
            <IconButton
              href="http://linkedin.com/in/goncaloandrade/"
              img="linkedin.svg"
              newTab={true}
            />
            <IconButton
              href="https://discord.com/users/289787309061046272"
              img="discord.svg"
              newTab={true}
            />
            <IconButton
              href="mailto:goncalo@stratfordandrade.com?subject=Getting%20in%20touch%20from%20your%20portfolio&body=Hi%20Goncalo%0A%0AI've%20just%20been%20to%20your%20portfolio%20site%2C%20and%20would%20love%20to%20get%20in%20touch%20and%20learn%20more%20about%20you."
              img="mail.svg"
              newTab={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
