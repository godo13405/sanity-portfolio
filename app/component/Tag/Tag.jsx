import style from "./style.module.scss";
// const { default: Link } = require("next/link")

const Tag = ({data}) => {
  //  href={`/tag/${data.slug}`}
  return <a className={`${style.tagContainer} tag`}>{data.name}</a>;
}

export default Tag;