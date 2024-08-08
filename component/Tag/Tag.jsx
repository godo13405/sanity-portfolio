import style from "./style.module.scss";
const { default: Link } = require("next/link")

const Tag = ({data}) => {
    return <Link className={style.tagContainer} href={`/tag/${data.slug}`}>{data.name}</Link>
}

export default Tag;