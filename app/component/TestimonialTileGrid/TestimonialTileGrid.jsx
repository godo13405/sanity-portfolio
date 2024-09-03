import TestimonialTile from "../TestimonialTile/TestimonialTile";
import style from "./style.module.scss";

const TestimonialTileGrid = ({data, isWhite}) => {
    return <div className={style.TileGridContainer}>
        {data && data.length && data.map((dat, k) => <TestimonialTile key={k} data={dat} isWhite={isWhite} />)}
        {!data || !data.length && <p>Loading</p>}
    </div>
}

export default TestimonialTileGrid;