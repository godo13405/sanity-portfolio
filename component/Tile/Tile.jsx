"use client";

import Link from "next/link";
import Tag from "../Tag/Tag";
import style from "./style.module.scss";
import { InView } from "react-intersection-observer";
import Arrow from "../img/arrow";

const Tile = ({ data, k }) => {
  return (
    <InView key={k}>
    {({ inView, ref, entry }) => {
    return <Link href={`/project/${data.slug}`} ref={ref} className={`${style.TileContainer} ${entry && entry.isIntersecting ? style.inView :''} ${data.color && style[`background-${data.color.replace(" ", "")}`]}`}>
      <i style={{ backgroundImage: `url(${data.imageUrl})` }}></i>
      <div className={`${style.iconButton} IconButton`}>
        <Arrow />
      </div>
      <div className={style.textContainer}>
        <h4>{data.name}</h4>
        {data.tags && data.tags.length && <div className={style.tagsContainer}>{data.tags.map((tag, k) => <Tag key={k} data={tag} />)}</div>}
      </div>
    </Link>}}
    </InView>
  );
};

export default Tile;
