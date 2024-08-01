const portableTextImage = {
  types: {
    image: ({ value, isInline }) => {
      return (
        <figure>
          <img
          src={`${value.asset.url}?w=800&fit=max&auto=format`}
          alt={value.asset.altText}
        />
        {value.asset.title && <caption>{value.asset.title}</caption>}
        </figure>
      );
      },
  },
};

export default portableTextImage;