"use server";
import TestimonialTileGrid from "../../component/TestimonialTileGrid/TestimonialTileGrid";
import sanityFetch from "../utils/sanityFetch";

const Testimonials = async () => {
  const data = await sanityFetch({
    query: `*[_type == 'testimonial' && featured == true]|order(date desc) {
  role,
    name,
    linkedin,
    shortText,
  "slug": slug.current,
  "imageUrl": image.asset->url
        }[0...4]`,
  });
  return <TestimonialTileGrid data={data} />;
};

export default Testimonials;
