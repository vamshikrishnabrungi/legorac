import React from 'react';

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const PartnersIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M15 12a3 3 0 1 0 0-5.999A3 3 0 0 0 15 12z" />
    <path d="M4 20v-1a5 5 0 0 1 5-5h.5" />
    <path d="M20 20v-1a5 5 0 0 0-5-5h-.5" />
  </svg>
);

export const ParalegalIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <path d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M4 19.5v-1.5a5 5 0 0 1 5-5h6" />
    <path d="M16 14.5h2a2 2 0 0 1 2 2V19" />
    <path d="M16 19.5v-8" />
  </svg>
);

export const OpsIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 9h8" />
    <path d="M8 15h8" />
    <path d="M12 9v6" />
  </svg>
);

export const ClientIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
    <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
    <path d="M4 9c0 4 2 7 8 7" />
    <path d="M20 9c0 4-2 7-8 7" />
  </svg>
);

export const ResearchIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-3-3" />
    <path d="M8 11h6" />
    <path d="M11 8v6" />
  </svg>
);

export const DraftIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <path d="M4 5a2 2 0 0 1 2-2h6.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 19 9.414V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M13 3v4a2 2 0 0 0 2 2h4" />
    <path d="M8 15h8" />
    <path d="M8 11h4" />
  </svg>
);

export const ReviewIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <path d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 17.6-3.1" />
    <path d="M12 12a3 3 0 1 0-3-3" />
    <path d="m16 17 3 3 5-5" />
  </svg>
);

export const WorkspaceIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <rect x="4" y="5" width="16" height="14" rx="2" />
    <path d="M4 10h16" />
    <path d="M8 15h8" />
    <path d="M6.5 15h.01" />
    <path d="M17.49 15h.01" />
  </svg>
);

export default {
  PartnersIcon,
  ParalegalIcon,
  OpsIcon,
  ClientIcon,
  ResearchIcon,
  DraftIcon,
  ReviewIcon,
  WorkspaceIcon,
};
