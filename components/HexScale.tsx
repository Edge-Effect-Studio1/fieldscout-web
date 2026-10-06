const BANDS = [
  { key: "dormant", label: "Dormant", color: "var(--band-dormant)" },
  { key: "early", label: "Early", color: "var(--band-early)" },
  { key: "prime", label: "Prime", color: "var(--band-prime)" },
  { key: "late", label: "Late", color: "var(--band-late)" },
  { key: "over", label: "Over", color: "var(--band-over)" },
] as const;

// A small hex grid, one color per cell cycling through the 5-band scale,
// so the illustration doubles as a legend. Pure inline SVG, no assets.
function hexPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

export default function HexScale() {
  const r = 26;
  const w = r * Math.sqrt(3);
  const h = r * 1.5;
  const cols = 7;
  const rows = 5;
  const cells: { cx: number; cy: number; band: number }[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * w + (row % 2 === 1 ? w / 2 : 0) + 30;
      const cy = row * h + 30;
      const band = (row + col) % BANDS.length;
      cells.push({ cx, cy, band });
    }
  }

  const viewW = cols * w + 30;
  const viewH = rows * h + 30;

  return (
    <svg
      viewBox={`0 0 ${viewW.toFixed(0)} ${viewH.toFixed(0)}`}
      role="img"
      aria-label="Hex grid map colored by fruiting stage: Dormant, Early, Prime, Late, Over"
      className="w-full h-auto"
    >
      {cells.map((c, i) => (
        <polygon
          key={i}
          points={hexPoints(c.cx, c.cy, r - 2)}
          fill={BANDS[c.band].color}
          stroke="var(--bg)"
          strokeWidth={2}
          opacity={0.9}
        />
      ))}
    </svg>
  );
}

export function HexScaleLegend() {
  return (
    <ul className="flex flex-wrap gap-3 text-sm">
      {BANDS.map((b) => (
        <li key={b.key} className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: b.color }}
            aria-hidden
          />
          <span className="text-[var(--muted)]">{b.label}</span>
        </li>
      ))}
    </ul>
  );
}
