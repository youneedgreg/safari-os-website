/** The Safari OS mark from the canvas, as inline SVG-free CSS shapes. */
export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.27,
        background: "var(--accent)",
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: size * 0.35,
          height: size * 0.35,
          borderRadius: "50%",
          background: "var(--accent-soft)",
        }}
      />
    </span>
  );
}
