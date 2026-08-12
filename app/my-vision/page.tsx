import type { Metadata } from "next";
import { SiteHeader } from "../SiteHeader";

export const metadata: Metadata = {
  title: "My Vision — Sehyun Ryu",
  description: "Sehyun Ryu’s vision for communication, artificial intelligence, access to information, and human opportunity.",
};

export default function MyVision() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <header className="page-hero vision-hero">
          <p className="eyebrow">My Vision</p>
          <h1>Free people from constraints.<br />Let them pursue their own paths.</h1>
          <div className="vision-sequence" aria-label="Four dimensions of freedom">
            <span>Access</span><i>→</i><span>Visibility</span><i>→</i><span>Opportunity</span><i>→</i><span>Capability</span>
          </div>
          <p className="page-lead">These are the four dimensions that define whether a person can pursue their own path.</p>
        </header>

        <article className="vision-article">
          <p>Humans are born with countless constraints shaped by both genetics and environment. While genetic limitations may be inevitable for now and define individual uniqueness, <strong>environmental conditions often restrict a person’s potential and aspirations at many levels.</strong></p>
          <p>I envision a world where an individual’s opportunities are not determined by birthplace, location, access to information, or available resources. I believe everyone should be free to define the meaning of their own lives and to walk their own path with minimal constraints.</p>

          <h2>Access to information</h2>
          <p>At the core of this belief lies <strong>access to information.</strong> Physical location, social background, and limited connectivity still impose severe constraints on human potential. I believe true freedom for all begins with equality of opportunity, and that such equality is fundamentally enabled by ubiquitous and reliable access to information.</p>
          <p>People must be able to understand what paths are available to them—what choices they can make, and how they might shape their own lives—and this requires access to sufficient and meaningful information.</p>

          <h2>Visibility and opportunity</h2>
          <p>Beyond access alone, <strong>individuals must also be able to emerge and be recognized</strong> within connected information networks. A truly free society is one in which individuals are not only connected to information, but can also become visible within that network and flexibly access the resources they need.</p>
          <p>Such a system allows hidden potential to surface, enabling individuals to access opportunities aligned with their needs and capabilities. I believe this creates not only a more just society, but also a more efficient one, where talent and resources are connected with minimal friction rather than remaining fragmented or unseen.</p>

          <aside className="vision-callout">
            <p>In this context, <strong>communication and artificial intelligence</strong> play a central role.</p>
          </aside>

          <p>Ultra-fast and reliable communication can <strong>dissolve physical barriers</strong>, <strong>reduce information asymmetry</strong>, and <strong>enable the flow of information independent of geography.</strong></p>
          <p>At the same time, advances in artificial intelligence can <strong>help individuals overcome inefficiencies</strong> that once demanded disproportionate time, resources, or institutional support.</p>
          <p>Motivated by this vision, <strong>I study communication systems as infrastructure for seamless, scalable, and dependable AI applications.</strong> My goal is to design technologies that reduce systemic inefficiencies, expand access to information, and ultimately empower individuals to realize their potential regardless of their background.</p>
          <p className="vision-contact">If this resonates with you, <a href="mailto:sh.ryu@postech.ac.kr">I would be happy to talk.</a></p>
        </article>

        <section className="symbol-section">
          <img className="sunflower-image" src="/skyblue-sunflower.png" alt="Skyblue Sunflower symbol created by Sehyun Ryu" width="507" height="492" />
          <div>
            <p className="eyebrow">The Skyblue Sunflower</p>
            <h2>Engineering is the art of enriching the world through truth.</h2>
            <p>With a deep passion for exploration, I aspire for my life’s journey to be one of advancing technology for the betterment of humanity. To embody the path I pursue, I created the Skyblue Sunflower as its symbol.</p>
            <p>White and blue—symbols of truth, deep inquiry, humanity, and peace. Brown for balance, silver for reflection. Together, they form a sunflower, a symbol of human happiness and the pursuit of a brighter future.</p>
          </div>
        </section>
      </main>
      <footer><div><strong>Sehyun Ryu</strong><span>Systems engineer for scalable machine intelligence.</span></div><p>© 2026 Sehyun Ryu · Hosted on GitHub Pages</p></footer>
    </>
  );
}
