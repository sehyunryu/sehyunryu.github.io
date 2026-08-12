export function SiteHeader() {
  const navigation = (
    <>
      <a href="/">about</a>
      <a href="/#publications">publications</a>
      <a href="/#experience">experiences</a>
      <a href="/my-vision">my vision</a>
      <a href="/my-learnings">my learnings</a>
    </>
  );

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
