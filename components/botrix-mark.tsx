// Botrix mark cropped out of the white logo (mark occupies x 52–192, y 86–221 of the 752×332 PNG)
export default function BotrixMark({ size }: { size: number }) {
  const k = size / 140
  return (
    <div
      style={{
        width: size,
        height: 135 * k,
        backgroundImage: "url(/images/botrix-logo.png)",
        backgroundSize: `${752 * k}px ${332 * k}px`,
        backgroundPosition: `${-52 * k}px ${-86 * k}px`,
      }}
    />
  )
}
