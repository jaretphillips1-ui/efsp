export type Tournament = {
  id: string;
  name: string;
  date: string;       // ISO date
  location: string;
  entryFee: string;
  status: "Open" | "Closed";
};

export const tournaments: Tournament[] = [
  { id: "bay-001", name: "Bay Classic", date: "2025-09-20", location: "Saint John, NB", entryFee: "$75", status: "Open" },
  { id: "fundy-002", name: "Fundy Fall Slam", date: "2025-10-04", location: "Grand Manan, NB", entryFee: "$90", status: "Open" },
  { id: "winter-003", name: "Winter Kickoff", date: "2026-01-17", location: "Moncton, NB", entryFee: "$60", status: "Closed" }
];
