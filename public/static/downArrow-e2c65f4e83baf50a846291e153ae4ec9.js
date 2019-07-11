import React from "react"

const SVG = ({ className, style, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 18"
    className={`svg-icon ${className || ""}`}
    style={style}
    width={width}
    height={height || width}
  >
    <defs>
      <linearGradient id="down-arrow-a" x1="100%" x2="0%" y1="50%" y2="50%">
        <stop offset="0%" stop-color="#415EFA" />
        <stop offset="100%" stop-color="#50E3C2" />
      </linearGradient>
    </defs>
    <path
      fill="url(#down-arrow-a)"
      d="M173.946243,977.804071 L174.382694,978.286464 C174.731619,978.672118 174.726691,979.260849 174.371361,979.640608 L160.730203,994.219596 C160.352865,994.622876 159.720049,994.643906 159.316769,994.266568 C159.300596,994.251435 159.28493,994.235769 159.269797,994.219596 L145.628639,979.640608 C145.273309,979.260849 145.268381,978.672118 145.617306,978.286464 L146.053757,977.804071 C146.424292,977.394533 147.056667,977.362914 147.466206,977.733449 C147.4862,977.751538 147.505453,977.770429 147.52392,977.790075 L159.271372,990.287364 C159.649638,990.689774 160.2825,990.709347 160.68491,990.331082 C160.69993,990.316963 160.714509,990.302384 160.728628,990.287364 L172.47608,977.790075 C172.854345,977.387665 173.487207,977.368092 173.889617,977.746357 C173.909263,977.764824 173.928154,977.784078 173.946243,977.804071 Z"
      transform="translate(-145 -977)"
    />
  </svg>
)

export default SVG
