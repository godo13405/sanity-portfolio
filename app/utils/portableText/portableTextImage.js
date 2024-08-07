import style from "./style.module.scss"

const portableTextImage = {
  types: {
    image: ({ value, isInline }) => {
      console.log(value.asset.tags)
      return (
        <figure className={style.figure}>
          <img
          className={`${value.asset.hasTransparency ? style.transparent : ''} ${value.asset.tags && value.asset.tags.padding ? style.padding : ''}`}
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