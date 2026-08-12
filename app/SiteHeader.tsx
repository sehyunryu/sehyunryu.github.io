type ActivePage = "about" | "my-vision" | "my-learnings";

const navItems = [
  { key: "about", label: "about", href: "/" },
  { key: "publications", label: "publications", href: "/#publications" },
  { key: "experience", label: "experiences", href: "/#experience" },
  { key: "my-vision", label: "my vision", href: "/my-vision" },
  { key: "my-learnings", label: "my learnings", href: "/my-learnings" },
] as const;

export function SiteHeader({ activePage = "about" }: { activePage?: ActivePage }) {
  const navigation = navItems.map((item) => (
    <a
      className={`nav-link nav-${item.key}${activePage === item.key ? " is-active" : ""}`}
      href={item.href}
      key={item.key}
      aria-current={activePage === item.key ? "page" : undefined}
    >
      {item.label}
    </a>
  ));

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="/">
          <strong>Sehyun Ryu</strong><span> | Wireless for Scalable Intelligence</span>
        </a>
        <div className="nav-links">{navigation}</div>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span></span><span></span><span></span>
          </summary>
          <div className="mobile-nav-links">{navigation}</div>
        </details>
      </nav>
    </header>
  );
}
