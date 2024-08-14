import style from "./style.module.scss";
const { default: Link } = require("next/link")

const Tag = ({data}) => {
    return <Link className={`${style.tagContainer} tag`} href={`/tag/${data.slug}`}>{data.name}</Link>
}

export default Tag;