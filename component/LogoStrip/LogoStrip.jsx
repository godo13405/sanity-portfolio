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
console.log(data)

    return <div className={`${style.logoStripContainer} contained`}>
        <h2>I've worked with some great teams</h2>
        <div className={style.inner}>
            {data.map((d, k) => <a key={k}><img src={`${d.imageUrl}?w=200&fit=max&auto=format`} /></a>)}
        </div>
    </div>

}

export default LogoStrip;