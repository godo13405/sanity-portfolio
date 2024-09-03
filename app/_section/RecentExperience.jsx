"use server";
import ExperienceTimeline from "../component/ExperienceTimeline/ExperienceTimeline";
import sanityFetch from "../utils/sanityFetch";

const RecentExperience = async () => {
  const data = await sanityFetch({
    query: `*[_type == 'experience']|order(startDate desc){
    name,
    endDate,
    startDate,
  "slug": slug.current,
  "company": company-> {
    name,
    "imageUrl": image.asset->url
  }
        }[0...4]`,
  });
  return <ExperienceTimeline data={data} />;
};

export default RecentExperience;
