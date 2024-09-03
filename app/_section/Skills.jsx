"use client";
import Tag from "../component/Tag/Tag";
import sanityFetch from "../utils/sanityFetch";
import { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";

const Skills = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      sanityFetch({
        query: `*[_type == 'tag' && skill == true]{
  "slug": Slug.current,
  "name": Name
  }`,
      }).then((d) => setData(d));
    }
  }, [data]);
  if (!data) return <Loading />;
  return data.map((tag, k) => <Tag key={k} data={tag} />);
};

export default Skills;
