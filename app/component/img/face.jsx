import { paletteGunmetal } from "../../../styles/_theme.module.scss";

const Face = ({ stroke = 2, colour = paletteGunmetal, className }) => {
  return (
    <svg
      viewBox="0 0 140 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M77.0693 86.5C77.0693 95.6127 84.4566 103 93.5693 103C102.682 103 110.069 95.6127 110.069 86.5C110.069 77.3873 102.682 70 93.5693 70C84.4566 70 77.0693 77.3873 77.0693 86.5ZM77.0693 86.5C71.2065 82.6389 67.9222 82.7105 62.0693 86.5M62.0693 86.5C62.0693 95.6127 54.682 103 45.5693 103C36.4566 103 29.0693 95.6127 29.0693 86.5C29.0693 77.3873 36.4566 70 45.5693 70C54.682 70 62.0693 77.3873 62.0693 86.5Z"
        stroke={colour}
        strokeWidth={stroke * 2}
      />
      <path
        d="M110.569 88.5001C110.569 88.5001 111.222 47.5005 92.0694 47.5C83.5694 47.4997 89.5693 48.5001 69.5693 48.5001C49.5693 48.5001 55.5694 47.4998 47.0694 47.5C27.9168 47.5006 28.5694 88.5002 28.5694 88.5002M110.569 88.5001C110.569 88.5001 115.069 81.5 115.069 55.0001C117.236 45.8334 118.369 25.7 105.569 18.5M110.569 88.5001C110.736 87.0001 111.769 84.0001 114.569 84.0001C119.569 84.0001 116.569 107 111.569 107C109.136 107 109.236 105.167 109.569 104M110.569 88.5001L110.069 97M105.569 18.5C107.069 18 114.069 12 107.569 10.5C104.569 9.99995 107.069 12.5 103.569 12.5C100.069 12.5 97.0693 2.5 84.0693 2.5C81.0693 2.5 74.4027 3.83333 76.0693 4.5C74.736 3.83333 70.9693 2.5 66.5693 2.5C62.1693 2.5 57.4027 6.83333 55.5693 9C46.5693 9 38.0694 16.5 31.5694 19.5C25.0694 22.5 25.0694 27 25.5694 28.5C24.0694 29 22.5694 35 22.5694 37.5C22.5694 39.5 23.9028 42.3333 24.5694 43.5C24.5694 69.9998 28.5694 88.5002 28.5694 88.5002M105.569 18.5C103.235 21.1666 95.6671 25.8 84.0693 23M28.5694 88.5002C28.4028 87.0002 27.3694 84 24.5694 84C19.5696 84 22.5696 107 27.5694 107C30.0025 107 29.9028 105.167 29.5694 104M28.5694 88.5002L29.0694 97M88.5694 122.5C88.5694 122.5 88.0694 113.5 69.5694 113.5C51.0694 113.5 50.5694 122.5 50.5694 122.5M88.5694 122.5C88.5694 122.5 83.5694 119.5 69.5694 119.5C55.5694 119.5 50.5694 122.5 50.5694 122.5M88.5694 122.5C90.0694 122.833 94.5694 122.3 100.569 117.5C106.569 112.7 109.403 101.833 110.069 97M88.5694 122.5C87.5694 125.833 84.1694 132.5 78.5694 132.5C71.5694 132.5 76.5694 127.5 69.5694 127.5C62.5694 127.5 67.5694 132.5 60.5694 132.5C54.9694 132.5 51.5694 125.833 50.5694 122.5M50.5694 122.5C49.0694 122.833 44.5694 122.3 38.5694 117.5C32.5694 112.7 29.7361 101.833 29.0694 97M110.069 97C110.069 125 92.0694 142.5 69.5694 142.5C47.0694 142.5 29.0694 125 29.0694 97M63.5721 103.5C63.5721 103.5 62.075 108.5 69.5721 108.5C77.0693 108.5 75.5721 103.5 75.5721 103.5"
        stroke={colour}
        strokeWidth={stroke * 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.5693 85.5C80.0693 82.5 83.1693 76.5 91.5693 76.5C99.9693 76.5 102.403 81.8333 102.569 84.5M60.5693 85.5C60.0693 82.5 56.9693 76.5 48.5693 76.5C40.1693 76.5 37.736 81.8333 37.5693 84.5M96.0693 86.5C96.0693 90.0899 93.1592 93 89.5693 93C85.9795 93 83.0693 90.0899 83.0693 86.5C83.0693 82.9101 85.9795 80 89.5693 80C93.1592 80 96.0693 82.9101 96.0693 86.5ZM44.0693 86.5C44.0693 90.0899 46.9795 93 50.5693 93C54.1592 93 57.0693 90.0899 57.0693 86.5C57.0693 82.9101 54.1592 80 50.5693 80C46.9795 80 44.0693 82.9101 44.0693 86.5Z"
        stroke={colour}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Face;
