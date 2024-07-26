"use client";

import { useState } from "react";
import Tile from "../Tile/Tile";
import style from "./style.module.scss";
import sanityFetch from "../../app/utils/sanityFetch";

const TileGrid = () => {
    const [data, setData] = useState([]);

    sanityFetch().then(d => setData(d));

    return <div className={style.TileGridContainer}>
        {data.length && data.map(dat => <Tile data={dat} />)}
        {!data.length && <p>Loading</p>}
    </div>
}

export default TileGrid;