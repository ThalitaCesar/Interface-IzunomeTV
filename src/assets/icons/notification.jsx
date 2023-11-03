import React from 'react';

const NotificationIcon = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={(size * 30) / 24} 
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.39999 27.3913C10.2 29.1304 13.8 29.1304 15.6 27.3913"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1984 1.37228C13.1995 1.34978 13.2 1.32713 13.2 1.30435C13.2 0.583977 12.6627 0 12 0C11.3373 0 10.8 0.583977 10.8 1.30435C10.8 1.32715 10.8005 1.34982 10.8016 1.37233C6.78442 2.00169 3.00443 6.91237 3.60006 12.3913C3.90855 14.0679 2.93721 14.9562 1.92621 15.8807C0.970865 16.7543 -0.0198983 17.6603 0.000303825 19.2945C0.000303825 21.5849 1.20001 22.8261 2.96196 23.4416C2.96196 23.4416 6.18886 24.7826 12.0001 24.7826C17.8114 24.7826 21.0383 23.4416 21.0383 23.4416C22.8002 22.8261 24.0003 21.5217 24 19.2945C23.9998 17.6462 23.0096 16.7399 22.0596 15.8703C21.0531 14.9489 20.0916 14.0688 20.4002 12.3913C20.5073 11.4062 20.4730 10.4396 20.3212 9.51282C19.7956 9.99525 19.1411 10.317 18.4218 10.4082C18.4757 10.9649 18.4770 11.5356 18.4185 12.1132C18.2060 13.37 18.4473 14.4515 18.9782 15.3696C19.4574 16.1980 20.1444 16.8279 20.6054 17.2505L20.6233 17.2669C21.6914 18.2462 21.9999 18.5956 22 19.2947C22.0001 20.0313 21.8092 20.4721 21.5903 20.7589C21.3598 21.0607 20.9813 21.343 20.3787 21.5535L20.3242 21.5726L20.2782 21.5917L20.2777 21.5919L20.2707 21.5947C20.2584 21.5995 20.2339 21.6090 20.1973 21.6224C20.1241 21.6494 20.0028 21.6923 19.8344 21.7461C19.4978 21.8537 18.9734 22.0047 18.2712 22.1583C16.8673 22.4653 14.7512 22.7826 12.0001 22.7826C9.24912 22.7826 7.13298 22.4653 5.72906 22.1583C5.02688 22.0047 4.50253 21.8537 4.16587 21.7461C3.99754 21.6923 3.87618 21.6494 3.80301 21.6224C3.76642 21.6090 3.74190 21.5995 3.72958 21.5947L3.72256 21.5919L3.72211 21.5917L3.67611 21.5726L3.62158 21.5535C2.99592 21.3350 2.62409 21.0596 2.4033 20.7737C2.19655 20.5060 2.0003 20.0732 2.0003 19.2945V19.2821L2.00015 19.2698C1.99195 18.6062 2.27927 18.2695 3.36046 17.2792L3.37887 17.2624C3.84215 16.8381 4.53163 16.2067 5.01355 15.3784C5.54762 14.4606 5.79515 13.3757 5.58184 12.1133C5.34274 9.75492 6.10171 7.51248 7.36296 5.86032C8.66198 4.15868 10.3040 3.30435 11.6629 3.30435H12.3374C13.1802 3.30435 14.1320 3.63302 15.0433 4.2887C15.4223 3.69702 15.9477 3.22447 16.5625 2.9331C15.5308 2.10786 14.3747 1.55651 13.1984 1.37228Z"
        fill={color}
      />
      <ellipse cx="18" cy={(6.52172 * size) / 24} rx={(2.4 * size) / 24} ry={(2.6087 * size) / 24} fill='#00b9ae' />
    </svg>
  );
};

export default NotificationIcon;
