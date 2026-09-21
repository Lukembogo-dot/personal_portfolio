export default function MeshBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <svg
        className="mesh-cluster mesh-cluster-a absolute -top-16 -left-16 w-[420px] h-[420px] opacity-[0.28]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <g stroke="var(--mesh-a)" strokeWidth="1">
          <line x1="20" y1="30" x2="120" y2="10" />
          <line x1="120" y1="10" x2="90" y2="110" />
          <line x1="20" y1="30" x2="90" y2="110" />
          <line x1="90" y1="110" x2="180" y2="90" />
          <line x1="120" y1="10" x2="180" y2="90" />
          <line x1="180" y1="90" x2="230" y2="20" />
          <line x1="120" y1="10" x2="230" y2="20" />
          <line x1="90" y1="110" x2="60" y2="200" />
          <line x1="20" y1="30" x2="60" y2="200" />
          <line x1="60" y1="200" x2="150" y2="220" />
          <line x1="90" y1="110" x2="150" y2="220" />
          <line x1="150" y1="220" x2="180" y2="90" />
          <line x1="230" y1="20" x2="300" y2="60" />
          <line x1="180" y1="90" x2="300" y2="60" />
          <line x1="300" y1="60" x2="260" y2="150" />
          <line x1="180" y1="90" x2="260" y2="150" />
          <line x1="150" y1="220" x2="260" y2="150" />
          <line x1="60" y1="200" x2="100" y2="290" />
          <line x1="150" y1="220" x2="100" y2="290" />
        </g>
        <g fill="var(--mesh-a)">
          {[
            [20, 30], [120, 10], [90, 110], [180, 90], [230, 20],
            [60, 200], [150, 220], [300, 60], [260, 150], [100, 290],
          ].map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3"
              className="mesh-node"
              style={{ animationDelay: `${(index % 5) * 0.6}s` }}
            />
          ))}
        </g>
      </svg>

      <svg
        className="mesh-cluster mesh-cluster-b absolute -bottom-20 -right-16 w-[460px] h-[460px] opacity-[0.28]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <g stroke="var(--mesh-b)" strokeWidth="1">
          <line x1="380" y1="370" x2="280" y2="390" />
          <line x1="280" y1="390" x2="310" y2="290" />
          <line x1="380" y1="370" x2="310" y2="290" />
          <line x1="310" y1="290" x2="220" y2="310" />
          <line x1="280" y1="390" x2="220" y2="310" />
          <line x1="220" y1="310" x2="170" y2="380" />
          <line x1="280" y1="390" x2="170" y2="380" />
          <line x1="310" y1="290" x2="340" y2="200" />
          <line x1="380" y1="370" x2="340" y2="200" />
          <line x1="340" y1="200" x2="250" y2="180" />
          <line x1="310" y1="290" x2="250" y2="180" />
          <line x1="250" y1="180" x2="220" y2="310" />
          <line x1="170" y1="380" x2="80" y2="340" />
          <line x1="220" y1="310" x2="80" y2="340" />
          <line x1="80" y1="340" x2="100" y2="250" />
          <line x1="220" y1="310" x2="100" y2="250" />
          <line x1="250" y1="180" x2="100" y2="250" />
          <line x1="340" y1="200" x2="300" y2="110" />
          <line x1="250" y1="180" x2="300" y2="110" />
        </g>
        <g fill="var(--mesh-b)">
          {[
            [380, 370], [280, 390], [310, 290], [220, 310], [170, 380],
            [340, 200], [250, 180], [80, 340], [100, 250], [300, 110],
          ].map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3"
              className="mesh-node"
              style={{ animationDelay: `${(index % 5) * 0.5 + 0.3}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
