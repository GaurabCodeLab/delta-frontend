export const API_BASE_URL =
  import.meta.env.VITE_API_BASE || "https://delta-option.onrender.com";

export const statCards = [
  { label: "Bot Status", key: "running" },
  { label: "Index Price", key: "index_price" },
  { label: "Unrealized PnL", key: "unrealized_pnl" },
  { label: "Positions", key: "position_count" },
];
