const portableTextImage = {
  types: {
    image: ({ value, isInline }) => {
      return (
        <figure>
          <img
          src={`${value.asset.url}?w=800&fit=max&auto=format`}
        />
        {value.asset.altText && <caption>{value.asset.altText}</caption>}
        </figure>
      );
      },
  },
};

export default portableTextImage;