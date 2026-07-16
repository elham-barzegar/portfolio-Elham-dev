type IconProps = {
  className?: string;
};

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LayoutIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <rect x="3.5" y="5" width="17" height="14" rx="2" className="stroke-current" />
      <path d="M3.5 10.5h17M12 5v14" strokeLinecap="round" />
    </svg>
  );
}

export function ChartIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <path d="M4.5 19V10.5m6 8.5V6m6 13V12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 19.5h18" strokeLinecap="round" />
      <rect x="3.5" y="8.5" width="5" height="3.5" rx="1" />
      <rect x="9.5" y="4.5" width="5" height="6.5" rx="1" />
      <rect x="15.5" y="10.5" width="5" height="5.5" rx="1" />
    </svg>
  );
}

export function MegaphoneIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <path
        d="M4 11.5a2 2 0 0 1 2-2h3.5L18 6v12l-8.5-3.5H6a2 2 0 0 1-2-2Z"
        strokeLinejoin="round"
      />
      <path d="M7 15.5 6 19" strokeLinecap="round" />
      <path d="M19.5 9.5a3 3 0 0 1 0 5" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <path
        d="M12 21s-6-4.2-6-9.2A6 6 0 0 1 12 5a6 6 0 0 1 6 6.8C18 16.8 12 21 12 21Z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.5" r="2" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <path
        d="M7.75 4h8.5A1.75 1.75 0 0 1 18 5.75v12.5A1.75 1.75 0 0 1 16.25 20h-8.5A1.75 1.75 0 0 1 6 18.25V5.75A1.75 1.75 0 0 1 7.75 4Z"
        strokeLinejoin="round"
      />
      <path d="M10 6h4" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GlobeIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.75 6.5 3.75 9S14.5 17.5 12 21M12 3c-2.5 2.5-3.75 6.5-3.75 9S9.5 17.5 12 21" />
    </svg>
  );
}
