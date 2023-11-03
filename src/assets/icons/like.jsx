import React from 'react';

const LikeIcon = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C11.1964 21 10.4543 20.7893 9.82597 20.4142C9.19767 20.0391 8.71789 19.514 8.45118 18.8999C8.18447 18.2858 8.14413 17.6232 8.33563 17.0104C8.52712 16.3976 8.9424 15.875 9.51753 15.5494C12.1887 14.0147 14.9999 14.125 15 10.5C15 9.39543 14.4732 8.34978 13.5355 7.87404C12.5977 7.39829 11.4023 7.39829 10.4645 7.87404C9.52676 8.34978 9 9.39543 9 10.5C9 12.0133 8.44461 13.5179 7.41429 14.5482C6.80499 15.1575 5.89499 15.1575 5.28569 14.5482C4.67639 13.9389 4.67639 13.0289 5.28569 12.4196C6.60344 11.1019 8.39656 11.1019 9.71431 12.4196C9.87406 12.5794 10.1259 12.5794 10.2856 12.4196L12 10.704L13.7144 12.4196C13.8741 12.5794 14.1259 12.5794 14.2856 12.4196C15.6033 11.1019 17.3964 11.1019 18.7141 12.4196C19.432 13.1375 19.432 14.3625 18.7141 15.0804C17.9962 15.7983 16.7712 15.7983 16.0533 15.0804L12 10.0259L7.94666 14.0803C7.22876 14.7982 6.00379 14.7982 5.28589 14.0803C4.56799 13.3624 4.56799 12.1375 5.28589 11.4196C6.00379 10.7017 7.22876 10.7017 7.94666 11.4196L12 15.4739L16.0533 11.4196C16.7712 10.7017 17.9962 10.7017 18.7141 11.4196C19.432 12.1375 19.432 13.3624 18.7141 14.0803C18.0455 14.7489 16.9199 14.8842 16.0846 14.4426L12 12.1259L12 21Z"
        fill={color}
      />
    </svg>
  );
};

export default LikeIcon;