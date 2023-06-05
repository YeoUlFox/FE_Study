export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        <header>HEADER</header>
        {children}
        <footer>FOOTER</footer>
      </section>
    );
  }