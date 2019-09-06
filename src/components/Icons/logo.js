import React from "react"

const SVG = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 260 260"
    className={props.className}
  >
    <defs>
      <path
        id="logo-a"
        d="M250.160912,95.4395411 L180.351361,198.886047 C180.042423,199.343842 179.420864,199.464515 178.963069,199.155578 C178.827461,199.064064 178.716376,198.940678 178.639556,198.796239 L164.010494,171.290584 C163.836809,170.96402 163.857567,170.568253 164.064463,170.261651 L235.98059,63.6880953 C242.100571,73.4485237 246.909604,84.1145986 250.160912,95.4395411 Z M119.519226,198.663616 L104.803682,171.007239 C104.629902,170.680637 104.650638,170.284775 104.857589,169.978116 L178.238425,61.2430399 C178.424341,60.9675523 178.734976,60.8024324 179.067328,60.8024324 L212.441353,60.8024324 C212.993638,60.8024324 213.441353,61.2501477 213.441353,61.8024324 C213.441353,62.0017727 213.381777,62.1965643 213.270272,62.3618012 L121.230955,198.753254 C120.922024,199.211054 120.300467,199.331735 119.842667,199.022804 C119.707104,198.931324 119.596047,198.807992 119.519226,198.663616 Z M153.886573,62.3610425 L118.547768,114.832485 C118.239256,115.290566 117.61781,115.411817 117.159728,115.103305 C117.023565,115.011601 116.912072,114.887785 116.835093,114.742787 L88.9781251,62.2713449 C88.7191519,61.7835424 88.9046546,61.178161 89.3924572,60.9191878 C89.5368664,60.8425213 89.6978711,60.8024324 89.8613697,60.8024324 L153.057142,60.8024324 C153.609427,60.8024324 154.057142,61.2501477 154.057142,61.8024324 C154.057142,62.0014609 153.997752,62.1959622 153.886573,62.3610425 Z"
      />
      <filter
        id="logo-b"
        width="105.1%"
        height="105.8%"
        x="-2.4%"
        y="-3.2%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology in="SourceAlpha" radius="2" result="shadowSpreadInner1" />
        <feGaussianBlur
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
          stdDeviation="1.5"
        />
        <feOffset
          dx="2"
          dy="4"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
        />
      </filter>
      <path
        id="logo-c"
        d="M29.3637507,204.157815 C28.2812251,202.691216 27.2299927,201.200108 26.2110392,199.685477 L95.6601888,96.4860551 C95.9685349,96.0278618 96.5899378,95.9063866 97.0481312,96.2147326 C97.1844243,96.3064526 97.2960217,96.430338 97.3730577,96.5754373 L112.002435,124.130217 C112.175542,124.456269 112.154939,124.851171 111.948842,125.157438 L79.3675097,173.574453 C79.0591728,174.032652 79.1806605,174.654053 79.63886,174.96239 C79.8038748,175.073433 79.998255,175.132746 80.1971533,175.132746 L96.5747364,175.132746 C96.9443704,175.132746 97.2838586,175.336646 97.4575113,175.66295 L111.888996,202.780566 C112.148457,203.268109 111.96356,203.873676 111.476017,204.133137 C111.331386,204.210107 111.170058,204.250362 111.006221,204.250362 L53.1634397,204.250362 C53.1378835,204.250362 53.1171661,204.229645 53.1171661,204.204089 C53.1171661,204.178532 53.0964488,204.157815 53.0708926,204.157815 L29.3637507,204.157815 Z M156.514066,175.663087 L170.940164,202.780703 C171.199549,203.268286 171.014559,203.873824 170.526975,204.13321 C170.382378,204.210133 170.221101,204.250362 170.057316,204.250362 L129.874713,204.250362 C129.322429,204.250362 128.874713,203.802647 128.874713,203.250362 C128.874713,203.051023 128.934289,202.856233 129.045792,202.690997 L147.345066,175.573381 C147.530978,175.297877 147.841623,175.132746 148.173987,175.132746 L155.631218,175.132746 C156.000908,175.132746 156.340438,175.336707 156.514066,175.663087 Z M92.3134195,90.1687687 L44.5501147,90.1687687 C43.9978299,90.1687687 43.5501147,89.7210534 43.5501147,89.1687687 L43.5501147,61.8024324 C43.5501147,61.2501477 43.9978299,60.8024324 44.5501147,60.8024324 L77.7812858,60.8024324 C78.1512443,60.8024324 78.490975,61.0066871 78.6644849,61.3334341 L93.1966185,88.6997703 C93.4556392,89.1875477 93.2701952,89.7929471 92.7824178,90.0519677 C92.637987,90.1286637 92.4769509,90.1687687 92.3134195,90.1687687 Z"
      />
      <filter
        id="logo-d"
        width="105.7%"
        height="106.3%"
        x="-3.1%"
        y="-3.1%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology in="SourceAlpha" radius="2" result="shadowSpreadInner1" />
        <feGaussianBlur
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
          stdDeviation="1.5"
        />
        <feOffset
          dx="2"
          dy="4"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
        />
      </filter>
      <linearGradient id="logo-e" x1="-30.143%" x2="129.298%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#323232" />
        <stop offset="100%" />
      </linearGradient>
      <circle id="logo-g" cx="130" cy="130" r="107" />
      <filter
        id="logo-f"
        width="105.1%"
        height="105.1%"
        x="-2.6%"
        y="-2.6%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology in="SourceAlpha" radius="4" result="shadowSpreadInner1" />
        <feGaussianBlur
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
          stdDeviation="1.5"
        />
        <feOffset
          dx="2"
          dy="4"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
        />
      </filter>
      <path
        id="logo-i"
        d="M130,255 C60.9644063,255 5,199.035594 5,130 C5,60.9644063 60.9644063,5 130,5 C199.035594,5 255,60.9644063 255,130 C255,199.035594 199.035594,255 130,255 Z"
      />
      <filter
        id="logo-h"
        width="104.4%"
        height="104.4%"
        x="-2.2%"
        y="-2.2%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology in="SourceAlpha" radius="4" result="shadowSpreadInner1" />
        <feGaussianBlur
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
          stdDeviation="1.5"
        />
        <feOffset
          dx="2"
          dy="4"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
        />
      </filter>
      <linearGradient id="logo-j" x1="100%" x2="0%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#415EFA" />
        <stop offset="100%" stopColor="#50E3C2" />
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="#415EFA" xlinkHref="#logo-a" />
      <use fill="#000" filter="url(#logo-b)" xlinkHref="#logo-a" />
      <use fill="#50E3C2" xlinkHref="#logo-c" />
      <use fill="#000" filter="url(#logo-d)" xlinkHref="#logo-c" />
      <path
        fill="url(#logo-e)"
        d="M5,130 C5,60.9644063 60.9644063,5 130,5 C174.676035,5 213.877902,28.4377016 235.98059,63.6880953 L164.064463,170.261651 C163.857567,170.568253 163.836809,170.96402 164.010494,171.290584 L178.639556,198.796239 C178.898893,199.283848 179.504413,199.468898 179.992022,199.20956 C180.136461,199.132739 180.259847,199.021654 180.351361,198.886047 L250.160912,95.4395411 C253.31208,106.415678 255,118.010722 255,130 C255,199.035594 199.035594,255 130,255 C88.7276502,255 52.1271333,234.997505 29.3637568,204.157823 L53.0708926,204.157815 C53.0964488,204.157815 53.1171661,204.178532 53.1171661,204.204089 C53.1171661,204.204089 53.1171661,204.204089 53.1171661,204.204089 C53.1171661,204.229645 53.1378835,204.250362 53.1634397,204.250362 L111.006221,204.250362 C111.558506,204.250362 112.006221,203.802647 112.006221,203.250362 C112.006221,203.086525 111.965966,202.925197 111.888996,202.780566 L97.4575113,175.66295 C97.2838586,175.336646 96.9443704,175.132746 96.5747364,175.132746 L80.1971533,175.132746 C79.6448686,175.132746 79.1971533,174.685031 79.1971533,174.132746 C79.1971533,173.933848 79.2564661,173.739468 79.3675097,173.574453 L111.948842,125.157438 C112.154939,124.851171 112.175542,124.456269 112.002435,124.130217 L97.3730577,96.5754373 C97.1140761,96.0876393 96.5086915,95.9021469 96.0208935,96.1611285 C95.8757942,96.2381646 95.7519087,96.349762 95.6601888,96.4860551 L26.2110392,199.685477 C12.8166801,179.775336 5,155.80051 5,130 Z M121.230955,198.753254 L213.270272,62.3618012 C213.579203,61.904002 213.458521,61.2824444 213.000722,60.9735135 C212.835485,60.8620088 212.640694,60.8024324 212.441353,60.8024324 L179.067328,60.8024324 C178.734976,60.8024324 178.424341,60.9675523 178.238425,61.2430399 L104.857589,169.978116 C104.650638,170.284775 104.629902,170.680637 104.803682,171.007239 L119.519226,198.663616 C119.778651,199.151178 120.384204,199.33612 120.871766,199.076696 C121.016143,198.999875 121.139475,198.888817 121.230955,198.753254 Z M153.057142,60.8024324 L89.8613697,60.8024324 C89.309085,60.8024324 88.8613697,61.2501477 88.8613697,61.8024324 C88.8613697,61.965931 88.9014586,62.1269357 88.9781251,62.2713449 L116.835093,114.742787 C117.094066,115.23059 117.699448,115.416092 118.18725,115.157119 C118.332248,115.08014 118.456064,114.968648 118.547768,114.832485 L153.886573,62.3610425 C154.195084,61.9029608 154.073834,61.2815139 153.615752,60.973002 C153.450672,60.8618227 153.256171,60.8024324 153.057142,60.8024324 Z M155.631218,175.132746 L148.173987,175.132746 C147.841623,175.132746 147.530978,175.297877 147.345066,175.573381 L129.045792,202.690997 C128.736863,203.148797 128.857548,203.770354 129.315348,204.079283 C129.480584,204.190787 129.675375,204.250362 129.874713,204.250362 L170.057316,204.250362 C170.609601,204.250362 171.057316,203.802647 171.057316,203.250362 C171.057316,203.086577 171.017087,202.9253 170.940164,202.780703 L156.514066,175.663087 C156.340438,175.336707 156.000908,175.132746 155.631218,175.132746 Z M93.1966185,88.6997703 L78.6644849,61.3334341 C78.490975,61.0066871 78.1512443,60.8024324 77.7812858,60.8024324 L44.5501147,60.8024324 C43.9978299,60.8024324 43.5501147,61.2501477 43.5501147,61.8024324 L43.5501147,89.1687687 C43.5501147,89.7210534 43.9978299,90.1687687 44.5501147,90.1687687 L92.3134195,90.1687687 C92.8657042,90.1687687 93.3134195,89.7210534 93.3134195,89.1687687 C93.3134195,89.0052372 93.2733145,88.8442011 93.1966185,88.6997703 Z"
      />
      <use fill="#000" filter="url(#logo-f)" xlinkHref="#logo-g" />
      <path
        fill="url(#logo-e)"
        d="M130,255 C60.9644063,255 5,199.035594 5,130 C5,60.9644063 60.9644063,5 130,5 C199.035594,5 255,60.9644063 255,130 C255,199.035594 199.035594,255 130,255 Z M130,236.884058 C189.030435,236.884058 236.884058,189.030435 236.884058,130 C236.884058,70.9695648 189.030435,23.115942 130,23.115942 C70.9695648,23.115942 23.115942,70.9695648 23.115942,130 C23.115942,189.030435 70.9695648,236.884058 130,236.884058 Z"
      />
      <use fill="#000" filter="url(#logo-h)" xlinkHref="#logo-i" />
      <path
        fill="url(#logo-j)"
        d="M130,260 C58.2029825,260 0,201.797017 0,130 C0,58.2029825 58.2029825,0 130,0 C201.797017,0 260,58.2029825 260,130 C260,201.797017 201.797017,260 130,260 Z M130,255 C199.035594,255 255,199.035594 255,130 C255,60.9644063 199.035594,5 130,5 C60.9644063,5 5,60.9644063 5,130 C5,199.035594 60.9644063,255 130,255 Z"
      />
    </g>
  </svg>
)

export default SVG