import Link from "next/link";
import style from "./style.module.scss";

const TestimonialTile = ({ data, isWhite }) => {
    return <Link href={`/testimonial/${data.slug}`} className={`${style.testimonialContainer} ${isWhite ? style['white'] : ''}`}>
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
    </Link>

}

export default TestimonialTile;