import style from "./style.module.scss"

const Hero = () => {
    return <div className={style.heroContainer}>
        <div className={`${style.heroInner} contained`}>
            <h1>Goncalo Stratford Andrade is a Digital Designer in London</h1>
            <img src="/img/me.png" />
        </div>
    </div>
}


export default Hero;