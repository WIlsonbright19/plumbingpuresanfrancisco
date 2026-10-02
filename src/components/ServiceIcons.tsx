interface IconProps {
  className?: string;
}

/**
 * 01. Emergency Plumbing: Minimalist high-pressure gauge & alert pulse
 */
export function EmergencyIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Gauge Outer Arc */}
      <circle cx="12" cy="12" r="9" strokeDasharray="3 3" opacity="0.4" />
      <path d="M5.5 16.5A8 8 0 1 1 18.5 16.5" />
      {/* Dial Needle */}
      <line x1="12" y1="12" x2="15.5" y2="7.5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      {/* Emergency alert pulse droplet */}
      <path d="M12 2v2" strokeWidth="1.8" />
      <path d="M4 12H2" />
      <path d="M22 12h-2" />
    </svg>
  );
}

/**
 * 02. Water Heaters: Minimalist tankless heat unit & dual thermal wave
 */
export function WaterHeaterIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Slim Modern Chassis */}
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      {/* Upper mechanical display line */}
      <line x1="9" y1="7" x2="15" y2="7" />
      {/* Bottom pipe stubs */}
      <line x1="8" y1="21" x2="8" y2="23" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="16" y1="21" x2="16" y2="23" />
      {/* Clean Flame Symbol */}
      <path
        d="M12 11c1.5 1.5 2 3 2 4a2 2 0 1 1-4 0c0-1 .5-2.5 2-4z"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/**
 * 03. Drain Cleaning: Minimalist spiral auger & vortex rotary clean line
 */
export function DrainCleaningIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Vertical Drain Pipe */}
      <path d="M7 3v6l3 4v8h4v-8l3-4V3" />
      <line x1="5" y1="3" x2="19" y2="3" />
      {/* Rotating Spiral Cleanline */}
      <path d="M12 7c-1.5 0-2.5.5-2.5 1.5s1 1.5 2.5 1.5 2.5.5 2.5 1.5-1 1.5-2.5 1.5" strokeWidth="1.6" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

/**
 * 04. Sewer & Piping: Minimalist interlocking architectural manifold & flange joint
 */
export function SewerPipingIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Horizontal Main */}
      <path d="M2 9h20M2 15h20" />
      {/* Flange Collars */}
      <line x1="5" y1="8" x2="5" y2="16" strokeWidth="1.8" />
      <line x1="19" y1="8" x2="19" y2="16" strokeWidth="1.8" />
      {/* Vertical Branch T-Junction */}
      <path d="M10 2v7M14 2v7" />
      <line x1="9" y1="2" x2="15" y2="2" />
      {/* Flow arrow line */}
      <path d="M10 12h4" strokeWidth="1.6" />
      <path d="M13 10l2 2-2 2" strokeWidth="1.6" />
    </svg>
  );
}

/**
 * 05. Fixtures: Minimalist architectural swan-neck faucet & single suspended drop
 */
export function FixturesIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Gooseneck Spout */}
      <path d="M5 20V9a5 5 0 0 1 10 0v3" strokeWidth="1.6" />
      {/* Spout Aerator Tip */}
      <line x1="13.5" y1="12" x2="16.5" y2="12" strokeWidth="2" />
      {/* Countertop Mounting Base */}
      <line x1="3" y1="20" x2="7" y2="20" strokeWidth="2" />
      {/* Handle Lever */}
      <path d="M5 13h-3" strokeWidth="2" />
      {/* Perfect Water Drop */}
      <path
        d="M15 17c0 1.2.9 2 2 2s2-.8 2-2c0-1-2-3-2-3s-2 2-2 3z"
        strokeWidth="1.4"
      />
    </svg>
  );
}

/**
 * 06. Remodeling: Minimalist architectural square, ruler & rough-in plumbing angle
 */
export function RemodelingIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Architectural Drafting L-Square */}
      <path d="M3 4v16a1 1 0 0 0 1 1h16" strokeWidth="1.8" />
      {/* Precision Graduation Ticks */}
      <line x1="3" y1="8" x2="6" y2="8" />
      <line x1="3" y1="12" x2="6" y2="12" />
      <line x1="3" y1="16" x2="6" y2="16" />
      <line x1="8" y1="18" x2="8" y2="21" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="16" y1="18" x2="16" y2="21" />
      {/* Rough-in 90-degree Copper Elbow */}
      <path d="M12 6h4a2 2 0 0 1 2 2v4" strokeWidth="1.6" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  );
}

export function getServiceIcon(id: string, className = "w-5 h-5") {
  switch (id) {
    case "emergency":
      return <EmergencyIcon className={className} />;
    case "water-heaters":
      return <WaterHeaterIcon className={className} />;
    case "drain-cleaning":
      return <DrainCleaningIcon className={className} />;
    case "sewer-piping":
      return <SewerPipingIcon className={className} />;
    case "fixtures":
      return <FixturesIcon className={className} />;
    case "remodeling":
      return <RemodelingIcon className={className} />;
    default:
      return <EmergencyIcon className={className} />;
  }
}
