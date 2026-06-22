export default function Logo({ className = "", width = 160 }: { className?: string; width?: number }) {
  const height = width * 0.75;
  return (
    <svg
      viewBox="0 0 200 150"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ember & Stone Pizza logo"
      role="img"
    >
      {/* Flame / Ember shape */}
      <path
        d="M100 8C92 28 72 38 72 62C72 78 80 92 100 92C120 92 128 78 128 62C128 38 108 28 100 8Z"
        fill="#E8590C"
        opacity="0.95"
      />
      <path
        d="M100 32C96 44 86 50 86 64C86 74 91 82 100 82C109 82 114 74 114 64C114 50 104 44 100 32Z"
        fill="#FEF3C7"
        opacity="0.6"
      />
      {/* Inner bright ember */}
      <ellipse cx="100" cy="70" rx="8" ry="6" fill="#FEF3C7" opacity="0.4" />

      {/* Stone slab base */}
      <rect x="55" y="96" width="90" height="10" rx="3" fill="#78716C" />
      <rect x="60" y="96" width="80" height="10" rx="2" fill="#8B7E6A" opacity="0.4" />

      {/* Text: EMBER & STONE */}
      <text
        x="100"
        y="126"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="4"
        fill="#FFF8F0"
      >
        EMBER &amp; STONE
      </text>

      {/* Text: PIZZA */}
      <text
        x="100"
        y="143"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="400"
        letterSpacing="6"
        fill="#8B7E6A"
      >
        PIZZA
      </text>
    </svg>
  );
}
