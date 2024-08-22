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
const dataAll = [...data, ...data, ...data];

    return <div className={`${style.logoStripContainer}`}>
        <div className={style.inner}>
            {dataAll.map((d, k) => <a key={k} title={d.name}><img src={`${d.imageUrl}?h=60&fit=max`} alt={d.name} /></a>)}
        </div>
    </div>

}

export default LogoStrip;