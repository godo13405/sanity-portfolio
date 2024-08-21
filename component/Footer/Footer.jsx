"use server";

import style from "./style.module.scss";
import "../../styles/global.scss";

const Footer = () => {
    return (
      <nav className={style.footerContainer}>
        <div className={`contained ${style.footerContainerInner}`}>
          <div>🤍 Lovingly hand coded</div>
          <div>
            <a href="/cv" target="_blank">
              CV
            </a>
            <a href="mailto:goncalo@stratfordandrade.com?subject=Getting%20in%20touch%20from%20your%20portfolio&body=Hi%20Goncalo%0A%0AI've%20just%20been%20to%20your%20portfolio%20site%2C%20and%20would%20love%20to%20get%20in%20touch%20and%20learn%20more%20about%20you.">
              Get in Touch
            </a>
            <a href="http://linkedin.com/in/goncaloandrade/" target="_blank">
              <img src="/img/linkedin.svg" />
            </a>
          </div>
        </div>
      </nav>
    );
}

export default Footer;