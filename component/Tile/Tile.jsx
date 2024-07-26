import style from "./style.module.scss";

const Tile = () => {
  return (
    <div className={style.TileContainer}>
      <Tile />
    </div>
  );
};

export default Tile;
