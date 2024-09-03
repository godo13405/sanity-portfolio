"use server";
import Tag from "../component/Tag/Tag";
import sanityFetch from "../utils/sanityFetch";

const Skills = async () => {
  const data = await sanityFetch({
    query: `*[_type == 'tag' && skill == true]{
  "slug": Slug.current,
  "name": Name
  }`,
  });
  return data.map((tag, k) => <Tag key={k} data={tag} />);
};

export default Skills;
