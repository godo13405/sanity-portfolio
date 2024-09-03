"use client";

import { InView } from "react-intersection-observer";
import dateTransform from "../../utils/dateTransform";
import style from "./style.module.scss";

const ExperienceTile = ({ data, k }) => {
  return (
    <InView key={k}>
      {({ inView, ref, entry }) => {
        return (
          <div
            className={`${style.tileContainer} ${
              entry && entry.isIntersecting ? style.inView : ""
            }`}
            ref={ref}
          >
            <h3>{data.name}</h3>
            <div className={style.secondaryContainer}>
              <img
                src={data.company.imageUrl}
                title={data.company.name}
                alt={data.company.name}
              />
              {dateTransform(data.startDate)} - {dateTransform(data.endDate)}
            </div>
          </div>
        );
      }}
    </InView>
  );
};

export default ExperienceTile;
