"use client";
import ExperienceTimeline from "../component/ExperienceTimeline/ExperienceTimeline";
import sanityFetch from "../utils/sanityFetch";
import { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";

const RecentExperience = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      sanityFetch({
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
      }).then((d) => setData(d));
    }
  }, [data]);
  if (!data) return <Loading />;
  return <ExperienceTimeline data={data} />;
};

export default RecentExperience;
