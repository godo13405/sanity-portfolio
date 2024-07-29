"use client";

import Tile from "../Tile/Tile";
import style from "./style.module.scss";

const TileGrid = ({data}) => {
    return <div className={style.TileGridContainer}>
        {data && data.length && data.map((dat, k) => <Tile key={k} data={dat} />)}
        {!data || !data.length && <p>Loading</p>}
    </div>
}

export default TileGrid;