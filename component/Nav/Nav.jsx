import style from "./style.module.scss";
import "../../styles/global.scss"
import Link from "next/link";

const Nav = () => {
    return <nav className={style.navContainer}>
        <div className={`contained`}>
            <Link href="/">
                <img src="/img/face.svg" alt="Goncalo Stratford Andrade" />
            </Link>

            <div className={style.links}>
                <Link href="/project">Projects</Link>
                <Link href="/testimonial">Testimonials</Link>
                <a href="mailto:goncalo@stratfordandrade.com?subject=Getting%20in%20touch%20from%20your%20portfolio&body=Hi%20Goncalo%0A%0AI've%20just%20been%20to%20your%20portfolio%20site%2C%20and%20would%20love%20to%20get%20in%20touch%20and%20learn%20more%20about%20you.">Get in Touch</a>
            </div>
        </div>
    </nav>
}

export default Nav;