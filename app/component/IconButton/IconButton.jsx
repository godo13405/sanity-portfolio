import style from "./style.module.scss";

const IconButton = ({
  className = "",
  href = "/",
  newTab = false,
  img = "face.svg",
  locale = true,
}) => {
  return (
    <a
      className={`${className} ${style.iconButton} ${style.iconButtonCta}`}
      href={href}
      target={newTab ? "_blank" : ""}
      locale={locale}
      style={{
        backgroundImage: `url(/img/${img})`,
      }}
    />
  );
};

export default IconButton;
