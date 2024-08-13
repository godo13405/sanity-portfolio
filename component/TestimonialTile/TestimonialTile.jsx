"use client";

import Link from "next/link";
import style from "./style.module.scss";
import { InView } from "react-intersection-observer";

const TestimonialTile = ({ data, isWhite, k }) => {
    return <InView key={k}>
    {({ inView, ref, entry }) => {
        return <Link href={`/testimonial/${data.slug}`} ref={ref} className={`${style.testimonialContainer} ${isWhite ? style['white'] : ''} ${entry && entry.isIntersecting ? style.inView :''}`}>
        <img src="/img/laurels.svg" />
        <div className={style.contentContainer}>
            <div className={style.cardHeading}>
                <img src={data.imageUrl} />
                <div className={style.identity}>
                    <p>{data.name}</p>
                    <label>{data.role} {data.date}</label>
                </div>
            </div>
            <p>{data.shortText}</p>
            <a className="link">Read more</a>
        </div>
        <img src="/img/laurels.svg" />
    </Link>}}
    </InView>

}

export default TestimonialTile;