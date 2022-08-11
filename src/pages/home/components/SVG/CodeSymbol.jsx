const CodeSymbol = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width="42"
      height="30"
      viewBox="0 0 42 30"
      fill="#FF751D"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_286_86)">
        <path
          d="M27.2651 21.6723L29.0417 23.7033L39.4493 14.6032L29.0417 5.50317L27.2651 7.53419L35.3372 14.6032L27.2651 21.6723Z"
          fill="inherit"
        />
        <path
          d="M16.3853 25.7883L18.965 26.5542L25.8946 3.41823L23.3149 2.65234L16.3853 25.7883Z"
          fill="inherit"
        />
        <path
          d="M2.83032 14.6032L13.2379 23.7033L15.0145 21.6723L6.94247 14.6032L15.0145 7.53419L13.2379 5.50317L2.83032 14.6032Z"
          fill="inherit"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_286_86"
          x="0.370966"
          y="0.192988"
          width="41.5379"
          height="28.8206"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.22968" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.968627 0 0 0 0 0.447059 0 0 0 0 0.113725 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_286_86"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_286_86"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CodeSymbol;
