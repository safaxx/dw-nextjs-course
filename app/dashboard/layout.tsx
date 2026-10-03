export default function DashboardLayout({
  children,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <header>{children}</header>

      <div style={{ display: "flex", gap: "1rem" }}>
        <section style={{ flex: 2 }}>{revenue}</section>
        <aside style={{ flex: 1 }}>{notifications}</aside>
      </div>
    </div>
  );
}
