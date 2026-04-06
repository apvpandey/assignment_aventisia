const s = {
  width: 18,
  height: 18,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  viewBox: "0 0 24 24",
};
const S = {
  width: 28,
  height: 28,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  viewBox: "0 0 24 24",
};

export const IconAgents = () => (
  <svg {...s}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);
export const IconAIModels = () => (
  <svg {...s}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
export const IconLibrary = () => (
  <svg {...s}>
    <rect x="2" y="3" width="4" height="18" rx="1" />
    <rect x="8" y="3" width="4" height="18" rx="1" />
    <path d="M14 3l4 18M18 3l2 9" />
  </svg>
);
export const IconPublished = () => (
  <svg {...s}>
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
  </svg>
);
export const IconMachines = () => (
  <svg {...s}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M8 4v16M2 9h20M2 15h6" />
  </svg>
);
export const IconQueues = () => (
  <svg {...s}>
    <path d="M4 6h16M4 10h16M4 14h10" />
  </svg>
);
export const IconTriggers = () => (
  <svg {...s}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
export const IconJobs = () => (
  <svg {...s}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);
export const IconExecutions = () => (
  <svg {...s}>
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <path d="M8 3v18M2 9h6M2 15h6" />
  </svg>
);
export const IconVault = () => (
  <svg {...s}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
export const IconKnowledgeBase = () => (
  <svg {...s}>
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>
);
export const IconKeyStore = () => (
  <svg {...s}>
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 4 4-6" />
  </svg>
);
export const IconTenant = () => (
  <svg {...s}>
    <rect x="2" y="2" width="9" height="9" rx="1" />
    <rect x="13" y="2" width="9" height="9" rx="1" />
    <rect x="2" y="13" width="9" height="9" rx="1" />
    <path d="M13 13h9v9h-9z" strokeDasharray="2 2" />
  </svg>
);
export const IconIntegrations = () => (
  <svg {...s}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20" />
  </svg>
);

export const IconSearch = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
export const IconBell = () => (
  <svg {...s}>
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
export const IconChevronDown = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
export const IconPlus = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    viewBox="0 0 24 24"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
export const IconDots = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);
export const IconX = () => (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconChevronFirst = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline points="17 18 11 12 17 6" />
    <line x1="7" y1="6" x2="7" y2="18" />
  </svg>
);
export const IconChevronLast = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline points="7 18 13 12 7 6" />
    <line x1="17" y1="6" x2="17" y2="18" />
  </svg>
);
export const IconChevronLeft = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
export const IconChevronRight = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const IconUpload = () => (
  <svg {...S}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
export const IconDoc = () => (
  <svg {...S}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
export const IconLink = () => (
  <svg {...S}>
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
);
export const IconGlobe = () => (
  <svg {...S}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);

const iconMap = {
  agents: IconAgents,
  aiModels: IconAIModels,
  library: IconLibrary,
  published: IconPublished,
  machines: IconMachines,
  queues: IconQueues,
  triggers: IconTriggers,
  jobs: IconJobs,
  executions: IconExecutions,
  vault: IconVault,
  knowledgeBase: IconKnowledgeBase,
  keyStore: IconKeyStore,
  tenant: IconTenant,
  integrations: IconIntegrations,
  upload: IconUpload,
  doc: IconDoc,
  link: IconLink,
  globe: IconGlobe,
};

export const getIcon = (key) => iconMap[key] || IconAgents;
