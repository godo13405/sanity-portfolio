"use client";

import Link from "next/link";
import Tag from "../Tag/Tag";
import style from "./style.module.scss";

const Tile = ({ data, k }) => {
  return (
    <Link key={k} href={`/project/${data.slug}`} className={`${style.TileContainer} ${data.color && style[`background-${data.color.replace(" ", "")}`]}`}>
      <i style={{ backgroundImage: `url(${data.imageUrl})` }}></i>
      <div className={`${style.iconButton} IconButton`}>
        <img src="/img/arrow.svg" />
      </div>
      <div className={style.textContainer}>
        <h4>{data.name}</h4>
        {data.tags && data.tags.length && <div className={style.tagsContainer}>{data.tags.map((tag, k) => <Tag key={k} data={tag} />)}</div>}
      </div>
    </Link>
  );
};

export default Tile;
