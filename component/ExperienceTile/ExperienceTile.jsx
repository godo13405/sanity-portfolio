import dateTransform from "../../app/utils/dateTransform";
import style from "./style.module.scss";

const ExperienceTile = ({data}) => {
    console.log(data)
    return <div className={`${style.tileContainer}`}>
        <h3>{data.name}</h3>
        <div className={style.secondaryContainer}>
            <img src={data.company.imageUrl} title={data.company.name} />
            {dateTransform(data.startDate)} - {dateTransform(data.endDate)}
        </div>
    </div>
}

export default ExperienceTile;