import React from 'react';

// Spider icon - 8-legged arachnid
export const Spider = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Body */}
    <circle cx="12" cy="11" r="3" />
    {/* Head */}
    <circle cx="12" cy="6.5" r="1.5" />
    {/* Left legs */}
    <path d="M9 10 L4 6" />
    <path d="M9 11 L3 10" />
    <path d="M9 12 L4 15" />
    <path d="M9.5 13 L5 19" />
    {/* Right legs */}
    <path d="M15 10 L20 6" />
    <path d="M15 11 L21 10" />
    <path d="M15 12 L20 15" />
    <path d="M14.5 13 L19 19" />
  </svg>
);

// Python logo - two intertwined snakes
export const PythonLogo = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Top snake */}
    <path d="M12 2C8 2 7 4 7 5.5V8h5v1H6.5C5 9 3 10.5 3 13.5S5 18 6.5 18H8v-2.5C8 14 9.5 12.5 11 12.5h4c1 0 2-1 2-2V5.5C17 4 16 2 12 2z" />
    <circle cx="9.5" cy="5" r="0.8" fill="currentColor" stroke="none" />
    {/* Bottom snake */}
    <path d="M12 22c4 0 5-2 5-3.5V16h-5v-1h5.5c1.5 0 3.5-1.5 3.5-4.5S19.5 6 17.5 6H16v2.5c0 1.5-1.5 3-3 3h-4c-1 0-2 1-2 2v5c0 1.5 1 3.5 5 3.5z" />
    <circle cx="14.5" cy="19" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
