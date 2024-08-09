"use server";

import { createClient } from "@sanity/client";

const sanityFetch = async ({ query }) => {
  
  const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET || "production",
    perspective: 'published',
    useCdn: new Boolean(process.env.USE_CACHE) || true,
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  });

  const response = await client.fetch(query);

  return response;
};

export default sanityFetch;
