import { HexColorPicker } from "react-colorful";

export default function ColorPickerComponent({
  color,
  setColor,
}) {
  return (
    <div className="flex items-center gap-6">

      <HexColorPicker
        color={color}
        onChange={setColor}
      />

      <div
        className="w-16 h-16 rounded border"
        style={{
          background: color,
        }}
      ></div>

    </div>
  );
}