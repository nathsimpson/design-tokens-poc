import { getContrastColor } from "hex-a11y";

export const ColorCard = ({ label, value, varName }) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: 8,
        backgroundColor: value,
        color: value && getContrastColor(value),
      }}
    >
      <span>{label}</span>
      <span>{value}</span>
      <pre style={{ margin: 0 }}>{varName}</pre>
    </div>
  );
};
