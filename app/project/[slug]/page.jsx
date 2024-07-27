"use server";
import portableTextImage from "../../utils/portableText/portableTextImage";
import sanityFetch from "../../utils/sanityFetch";
import { PortableText } from "@portabletext/react";

const Project = ({ params }) => {
  return sanityFetch({ query: `*[_type == 'project' && slug.current == '${params.slug}']` }).then((data) => {
    return <PortableText
      	value={data[0].Body}
      	components={portableTextImage}
    	/>
  })
};

export default Project;
