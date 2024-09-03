"use server";

import TestimonialTileGrid from "../component/TestimonialTileGrid/TestimonialTileGrid";
import "../../styles/global.scss";
import sanityFetch from "../utils/sanityFetch";

const Project = async ({ params }) => {
  const data = await sanityFetch({
    query: `*[_type == 'testimonial']|order(date desc) {
  role,
    name,
    linkedin,
    shortText,
  "slug": slug.current,
  "imageUrl": image.asset->url
        }`,
  });

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
