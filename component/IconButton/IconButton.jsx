import style from "./style.module.scss"

const IconButton = ({className = '', href = '/', newTab = false, img = 'face.svg'}) => {
return <a className={`${className} ${style.iconButton} ${style.iconButtonCta}`} href={href} target="_blank" style={{
    backgroundImage: `url(/img/${img})`
}} />
}

export default IconButton;