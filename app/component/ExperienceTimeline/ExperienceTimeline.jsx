import ExperienceTile from "../ExperienceTile/ExperienceTile";
import style from "./style.module.scss";

const ExperienceTimeline = ({data}) => {
    return <div className={style.timelineContainer}>
        {data.map((xp, k) => <ExperienceTile key={k} data={xp} />)}
    </div>
}

export default ExperienceTimeline;