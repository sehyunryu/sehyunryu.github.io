export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="/"><strong>Sehyun Ryu</strong></a>
        <div className="nav-links">
          <a href="/">about</a>
          <a href="/#publications">publications</a>
          <a href="/#experience">experiences</a>
          <a href="/my-vision">my vision</a>
          <a href="/my-learnings">my learnings</a>
        </div>
      </nav>
    </header>
  );
}
