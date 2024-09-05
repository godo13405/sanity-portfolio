"use client";

import TestimonialTileGrid from "../component/TestimonialTileGrid/TestimonialTileGrid";
import "../../styles/global.scss";
import { useEffect, useState } from "react";
import sanityFetch from "../utils/sanityFetch";
import Loading from "../component/Loading/Loading";

const Project = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      sanityFetch({
        query: `*[_type == 'testimonial']|order(date desc) {
  role,
    name,
    linkedin,
    shortText,
  "slug": slug.current,
  "imageUrl": image.asset->url
        }`,
      }).then((d) => setData(d));
    }
  }, [data]);
  if (!data) return <Loading />;
  return (
    <main className={`section unwhite`}>
      <div className="contained">
        <div>
          <h1>Testimonials</h1>
          <TestimonialTileGrid data={data} isWhite={true} />
        </div>
      </div>
    </main>
  );
};

export default Project;
