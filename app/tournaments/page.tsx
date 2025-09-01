import type React from "react";
import { tournaments } from "../../data/tournaments";

const card: React.CSSProperties = {
  border: "1px solid #e5e5e5",
  borderRadius: 8,
  padding: 16,
  marginBottom: 12,
  background: "#fff"
};

export default function TournamentsPage() {
  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Tournaments</h1>
      <div>
        {tournaments.map(t => (
          <article key={t.id} style={card}>
            <h2 style={{ margin: "0 0 6px" }}>{t.name}</h2>
            <div style={{ opacity: 0.8 }}>
              <div><strong>Date:</strong> {new Date(t.date).toLocaleDateString()}</div>
              <div><strong>Location:</strong> {t.location}</div>
              <div><strong>Entry Fee:</strong> {t.entryFee}</div>
            </div>
            <span style={{
              marginTop: 8,
              display: "inline-block",
              padding: "4px 8px",
              borderRadius: 999,
              border: "1px solid #ddd",
              background: t.status === "Open" ? "#eaffea" : "#f7f7f7"
            }}>
              {t.status}
            </span>
          </article>
        ))}
      </div>
    </>
  );
}
