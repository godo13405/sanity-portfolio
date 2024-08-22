import { white, paletteCoral } from "../../styles/_theme.module.scss";

const Arrow = ({stroke = 2, colour = paletteCoral}) => {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.99831 5.8373C12.5856 5.44992 15.2064 5.39905 17.7953 5.68513C18.0173 5.70968 18.2152 5.80876 18.3637 5.95723M18.4836 14.3226C18.871 11.7353 18.9218 9.11449 18.6358 6.52563C18.6112 6.30355 18.5121 6.10569 18.3637 5.95723M18.3637 5.95723L5.63574 18.6851"
        stroke={colour}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;
