"use client";

import Link from "next/link";
import style from "./style.module.scss";

const Tile = ({data}) => {
  return (
    <Link href={`/project/${data.slug.current}`} className={style.TileContainer}>
      <div className={style.textContainer}>
        <h2>{data.name}</h2>
      </div>
    </Link>
  );
};

export default Tile;
