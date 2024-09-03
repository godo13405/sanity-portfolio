"use client";
import TestimonialTileGrid from "../component/TestimonialTileGrid/TestimonialTileGrid";
import sanityFetch from "../utils/sanityFetch";
import { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";

const Testimonials = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      sanityFetch({
        query: `*[_type == 'testimonial' && featured == true]|order(date desc) {
  role,
    name,
    linkedin,
    shortText,
  "slug": slug.current,
  "imageUrl": image.asset->url
        }[0...4]`,
      }).then((d) => setData(d));
    }
  }, [data]);
  if (!data) return <Loading />;
  return <TestimonialTileGrid data={data} />;
};

export default Testimonials;
