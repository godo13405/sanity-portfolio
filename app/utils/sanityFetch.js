import SanityClient from "next-sanity-client";

const sanityFetch = async ({ query = `[_type == 'project']` }) => {
  const client = new SanityClient({
    projectId: process.env.PROCESS_ID,
    dataset: process.env.NODE_ENV || "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  return await client.fetch({
    query,
    config: {
      cache: "force-cache",
      next: { revalidate: 60 },
    },
  });
};

export default sanityFetch;
