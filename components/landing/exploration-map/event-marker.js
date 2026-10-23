export default function EventMarker({
  event,
  isSelected = false,
  onClick,
}) {
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${event.name}, ${event.city}`}
      style={{ cursor: "pointer", outline: "none" }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <circle
        r={isSelected ? 16 : 11}
        fill="rgba(59, 130, 246, 0.10)"
        stroke="rgba(147, 197, 253, 0.25)"
        strokeWidth="1"
      />
      <circle
        r={isSelected ? 9 : 6.5}
        fill={isSelected ? "rgba(147, 197, 253, 1)" : "rgba(59, 130, 246, 0.95)"}
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="1.4"
      />
      <circle r={isSelected ? 3.5 : 2.8} fill="rgba(255,255,255,0.96)" />
      {isSelected ? (
        <text
          y={26}
          textAnchor="middle"
          fill="rgba(255,255,255,0.92)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.05em"
        >
          {event.city}
        </text>
      ) : null}
    </g>
  );
}