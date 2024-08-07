import IconButton from "../IconButton/IconButton";
import style from "./style.module.scss"

const Hero = () => {
    return <div className={style.heroContainer}>
        <div className={`${style.heroInner} contained`}>
            <div className={style.textContainer}>
                <h1>Goncalo <br />S. Andrade</h1>
                <p>Product Designer <br /> Problem Solver <br /> Teacher & Mentor</p>
            </div>
            <div className={style.pictureContainer}>
                    <div className={style.picture} style={{backgroundImage: 'url(/img/me.png)'}} />
                <IconButton className={style.IconButton} href="cv.goncalo.stratfordandrade.com" img="cv.svg" newTab={true}/>
                <div className={style.iconButtonGroup}>
                    <IconButton href="cv.goncalo.stratfordandrade.com" img="linkedin.svg" newTab={true}/>
                    <IconButton href="cv.goncalo.stratfordandrade.com" img="discord.svg" newTab={true}/>
                    <IconButton href="cv.goncalo.stratfordandrade.com" img="mail.svg" newTab={true}/>
                </div>
            </div>
        </div>
    </div>
}


export default Hero;