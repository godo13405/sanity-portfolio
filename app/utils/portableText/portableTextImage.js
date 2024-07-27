const portableTextImage = {
  types: {
    image: ({ value, isInline }) => {
      return (
        <img
          src={`https://cdn.sanity.io/images/${process.env.PROJECT_ID}/${process.env.DATASET}/${value.asset._ref.replace(/^([^\-]*)-/gm, '').replace(/-([^\-]*)$/gm, ".$1")}?w=800&fit=max&auto=format`}
        />
      );
        },
  },
};

export default portableTextImage;