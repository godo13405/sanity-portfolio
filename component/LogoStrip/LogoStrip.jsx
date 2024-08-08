"use server"

import sanityFetch from "../../app/utils/sanityFetch";
import style from "./style.module.scss"

const LogoStrip = async () => {
    const data = await sanityFetch({
        query: `*[_type == 'company' && featured == true] {
  name,
  "slug": slug.current,
  "imageUrl": image.asset->url,
}` });

    return <div className={`${style.logoStripContainer} contained`}>
        {/* <h3>I've worked with some great teams</h3> */}
        <div className={style.inner}>
            {data.map((d, k) => <a key={k} title={d.name}><img src={`${d.imageUrl}?h=60&fit=max`} /></a>)}
        </div>
    </div>

}

export default LogoStrip;