"use server";
import TileGrid from "../component/TileGrid/TileGrid";
import sanityFetch from "./utils/sanityFetch";
import "../styles/global.scss";
import Hero from "../component/Hero/Hero";
import LogoStrip from "../component/LogoStrip/LogoStrip";
import Link from "next/link";
import TestimonialTileGrid from "../component/TestimonialTileGrid/TestimonialTileGrid";

const Home = () => {
  return <main>
    <Hero />
    <div className="section">
      <LogoStrip />
    </div>
    <div className="section unwhite">
      <div className="contained">
        {sanityFetch({
          query: `*[_type == 'project' && featured == true]|order(date desc){
  "color": color.hex,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  name,
  tags[]-> {
    "name": Name,
    "slug": Slug.current
  }
}[0...4]` }).then((data) => <TileGrid data={data} />)}
        <Link href="/project" className="link">View all</Link>
      </div>
    </div>
    <div className="section">
      <div className="contained">
        <h2>Skills</h2>
      </div>
    </div>
    <div className="section unwhite">
      <div className="contained">
        <h2>Recent Experience</h2>
      </div>
    </div>
    <div className="section">
      <div className="contained">
        <h2>Testimonials</h2>
        <p>What others say about me <br /> Get a glimpse at what it’s like working with me</p>
        {sanityFetch({
          query: `*[_type == 'testimonial' && featured == true]|order(date desc) {
  role,
    name,
    linkedin,
    shortText,
  "slug": slug.current,
  "imageUrl": image.asset->url
        }[0...3]` }).then((data) => <TestimonialTileGrid data={data} />)}
        <Link href="/testimonial" className="link">View all</Link>
      </div>
    </div>
    <div className="section unwhite">
      <div className="contained">
        <h2>Giving Back</h2>

        {/* ADPList booking form */}
        <section style={{
          height: 496,
          boxShadow: 'rgba(142, 151, 158, 0.15) 0px 4px 19px 0px',
          borderRadius: 16,
          overflow: 'hidden',
          width: '100%',
          maxWidth: 650
        }}>
          <iframe src="https://adplist.org/widgets/booking?src=goncalo-andrade" title="" width="100%" height="100%" loading="lazy" style={{ border: 0 }}></iframe>
        </section>
      </div>
    </div>
  </main>
};

export default Home;
