import style from "./style.module.scss";
import "../../styles/global.scss"
import Link from "next/link";

const Nav = () => {
    return <nav className={style.navContainer}>
        <div className={`contained`}>
            <Link href="/">
                <img src="/img/face.svg" />
            </Link>

            <div className={style.socials}>
                <Link href="https://linkedin/com/in/goncaloandrade" target="_blank">
                    <img src="/img/linkedin.svg" />
                </Link>
                <Link href="https://discord.com/users/289787309061046272" target="_blank">
                    <img src="/img/discord.svg" />
                </Link>
                <Link href="mailto:goncalo@stratfordandrade.com" target="_blank">
                    <img src="/img/mail.svg" />
                </Link>
            </div>
        </div>
    </nav>
}

export default Nav;