import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

const portableTextImage = {
  types: {
    image: ({ value, isInline }) => {
      return <img
        src={urlBuilder()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
      />
        },
  },
};

export default portableTextImage;
