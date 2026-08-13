import React from "react";
import { SiteHeader } from "./SiteHeader";

const publications = [
  {
    title: "Preprints",
    items: [
      <><strong>[P1]</strong> Sehyun Ryu, Yumin Kim, Minjae Lee, Hyun Jong Yang*, and John M. Cioffi*, <a href="https://arxiv.org/abs/2607.24872">“Beam-Response Contrastive Learning for Transmitter-Side MIMO CSI Representation,”</a> <em className="venue-mark arxiv-mark">arXiv</em>, 2026.</>,
      <><strong>[P2]</strong> Sehyun Ryu, Seungmin Choi, Hyun Jong Yang*, and John M. Cioffi*, <a href="https://arxiv.org/abs/2608.01713">“End-to-End Mobility-Aware Multi-RIS Optimization via Blockage Detection and Closed-Form Riemannian Updates,”</a> submitted to <em>IEEE Transactions on Wireless Communications</em>, 2026.</>,
      <><strong>[P3]</strong> Jeonghyun An(=), Sehyun Ryu(=), and Hyun Jong Yang*, “Contamination-Aware Task Allocation for Cell-Free Cloud-Robotic AMR Warehouses,” submitted to <em>IEEE Internet of Things Journal</em>, 2026.</>,
      <><strong>[P4]</strong> Minwoo Kim, Hyeonsu Lyu, Sehyun Ryu, Sojeong Park, and Hyun Jong Yang*, “Temporal Channel Estimation for Generalized CSI Feedback,” <em className="venue-mark arxiv-mark">arXiv</em>, 2026.</>,
      <><strong>[P5]</strong> Hyeonsu Lyu, Minwoo Kim, Sehyun Ryu, and Hyun Jong Yang*, double-blinded, submitted to <em>IEEE INFOCOM</em>, 2026.</>,
      <><strong>[P6]</strong> Hyeonsu Lyu, Jonggyu Jang, Sehyun Ryu, and Hyun Jong Yang*, <a href="https://arxiv.org/abs/2312.05586">“Deeper Understanding of Black-box Predictions via Generalized Influence Functions,”</a> <em className="venue-mark arxiv-mark">arXiv</em>, 2024.</>,
    ],
    tags: [[1, 3], [2], [2, 3], [1, 4], [1, 2, 4], [4]],
  },
  {
    title: "International Journals",
    items: [
      <><strong>[J7]</strong> Minjae Lee, Sehyun Ryu, Hosung Joo, Seungmin Choi, and Hyun Jong Yang, “Importance-Aware CSI Feedback with Adaptive Latent Truncation,” <em className="venue-mark journal-mark">IEEE Transactions on Vehicular Technology</em>, accepted, 2026.</>,
      <><strong>[J6]</strong> Hosung Joo(=), Seungmin Choi(=), Sehyun Ryu, and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11417943">“Compressed-CSI Feedback with Near Real-time Domain Adaptation,”</a> <em className="venue-mark journal-mark">IEEE Transactions on Communications</em>, vol. 74, pp. 11048–11061, 2026.</>,
      <><strong>[J5]</strong> Hyun Jong Yang, Howon Lee*, Kyuhong Shim, Jeongho Kwak, Hyunsoo Kim, Donghoon Kim, Sehyun Ryu, Jaehyun Choi, Youbin Kim, Chanjun Moon, Michael Ryoo, and Byonghyo Shim*, <a href="https://ieeexplore.ieee.org/document/11543360">“Advancing Multi-Robot Networks via MLLM-Driven Sensing, Communication, and Computation: A Comprehensive Survey,”</a> <em className="venue-mark journal-mark">IEEE Communications Surveys and Tutorials</em>, vol. 28, pp. 5833–5871, 2026.</>,
      <><strong>[J4]</strong> Sehyun Ryu and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11480097">“Standards-Compliant DM-RS Allocation via Temporal Channel Prediction for Massive MIMO Systems,”</a> <em className="venue-mark journal-mark">IEEE Transactions on Vehicular Technology</em>, vol. 75, no. 7, pp. 15171–15175, 2026.</>,
      <><strong>[J3]</strong> Sehyun Ryu*, <a href="https://rdcu.be/e6u0K">“From Isolated to Interconnected: An Evolutionary Psychological Account of Artificial Othering and a Design Paradigm to Preserve Human Social Cohesion,”</a> <em className="venue-mark ai-ethics-mark">AI and Ethics</em>, vol. 6, no. 182, 2026.</>,
      <><strong>[J2]</strong> Seungmin Choi(=), Hosung Joo(=), Sehyun Ryu, Tommaso Melodia, and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11215681">“Performance-Guaranteed CSI Feedback via Model-Free Incremental Residual Compression Framework,”</a> <em className="venue-mark journal-mark">IEEE Wireless Communications Letters</em>, vol. 15, pp. 880–884, 2025.</>,
      <><strong>[J1]</strong> Sehyun Ryu(=), Jonggyu Jang(=), and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/10609362?source=authoralert">“Noise Variance Optimization in Differential Privacy: A Game-Theoretic Approach Through Per-Instance Differential Privacy,”</a> <em className="venue-mark journal-mark">IEEE Access</em>, vol. 12, pp. 103104–103118, 2024.</>,
    ],
    tags: [[1, 3], [2, 3], [1, 4], [1, 2, 3], [4], [1, 3], [4]],
  },
  {
    title: "International Conference Proceedings",
    items: [
      <><strong>[C3]</strong> Sehyun Ryu and Hyun Jong Yang*, “Blockage-Aware Multi-RIS Sensing and Optimization for mmWave Smart Radio Environments,” <em className="venue-mark conference-mark">IEEE GLOBECOM</em>, Macau, China, accepted, 2026.</>,
      <><strong>[C2]</strong> Jaehyun Choi, Sehyun Ryu, Seungmin Choi, and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11263604">“RT-AUGGAN: Robust Fingerprint Positioning under Environmental Variations via Ray Tracing-Assisted GAN Augmentation,”</a> <em className="venue-mark conference-mark">IEEE ICCE-Asia</em>, Busan, Republic of Korea, 2025.</>,
      <><strong>[C1]</strong> Sehyun Ryu, Hosung Joo, Jonggyu Jang, and Hyun Jong Yang*, <a href="https://ojs.aaai.org/index.php/AAAI/article/view/30506">“Instance-Wise Laplace Mechanism via Deep Reinforcement Learning,”</a> <em className="venue-mark aaai-mark">AAAI Conference on Artificial Intelligence (Student Abstract and Poster Program)</em>, Vancouver, Canada, 2024, 38(21), pp. 23640–23641. <span className="award">Oral presentation</span></>,
    ],
    tags: [[2], [1, 2, 3], [4]],
  },
  {
    title: "Korean Domestic Papers",
    items: [
      <><strong>[D6]</strong> Sehyun Ryu, Jaehyun Choi, and Hyun Jong Yang*, “Communication-Aware Multi-Agent Path Finding for Wi-Fi 6 Warehouse Robot Coordination,” <em className="venue-mark domestic-mark">Summer Conference of KICS</em>, Jeju Island, Republic of Korea, 2026.</>,
      <><strong>[D5]</strong> Hyeonsu Lyu, Minwoo Kim, Sehyun Ryu, and Hyun Jong Yang*, “Towards Building a Ray-Tracing-Compatible Digital Twin Scene for Wireless-Aware Physical AI Systems,” <em className="venue-mark domestic-mark">JCCI</em>, Yeosu, Republic of Korea, 2026.</>,
      <><strong>[D4]</strong> Sehyun Ryu and Hyun Jong Yang*, <a href="https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12738510&width=1280">“A Survey of the Application of Ray-Tracing-Based Channel Modeling for Digital Twin Environments,”</a> <em className="venue-mark domestic-mark">Winter Conference of KICS</em>, Pyeongchang, Republic of Korea, 2026.</>,
      <><strong>[D3]</strong> Sehyun Ryu and Hyun Jong Yang*, “Trends in Utilizing Generative Models for Wireless Communications,” <em className="venue-mark domestic-mark">KICS Information and Communications Magazine</em>, 2024.</>,
      <><strong>[D2]</strong> Sehyun Ryu and Hyun Jong Yang*, “Research Trends of Deep Learning-Based Algorithms for Reduced CSI Feedback Overhead,” <em className="venue-mark domestic-mark">JCCI</em>, Busan, Republic of Korea, 2024.</>,
      <><strong>[D1]</strong> Sehyun Ryu and Hyun Jong Yang*, “Additive Machine Unlearning Algorithm Using Orthogonality,” <em className="venue-mark domestic-mark">Summer Conference of KICS</em>, Jeju Island, Republic of Korea, 2023.</>,
    ],
    tags: [[1, 2, 4], [1, 4], [1, 4], [1, 3], [1, 3], [4]],
  },
];

const researchTagMeta: Record<number, { label: string; className: string }> = {
  1: { label: "AI-Native RAN", className: "research-tag-1" },
  2: { label: "Adaptive Wireless Systems", className: "research-tag-2" },
  3: { label: "CSI Representation", className: "research-tag-3" },
  4: { label: "Machine Intelligence and Physical AI", className: "research-tag-4" },
};

const patents = [
  '“Data Augmentation Method for Indoor Positioning based on Wireless Channel State Information and Computer Device Thereof,” Hyun Jong Yang, Jaehyun Choi, Seungmin Choi, and Sehyun Ryu, KR 10-2026-0012777 (filed).',
  '“Method and Apparatus for Channel Prediction-Based Reference Signal Allocation in Massive MIMO Wireless Communication System,” Hyun Jong Yang and Sehyun Ryu, KR 10-2025-0214422 (filed).',
  '“Method for Channel State Information (CSI) Feedback Using Multi-Stage Residual Compression and User Equipment Performing the Same,” Hyun Jong Yang, Seungmin Choi, Sehyun Ryu, and Hosung Joo, KR 10-2025-0202288 (filed).',
  '“Apparatus and Method for Providing Statistical Data,” Hyun Jong Yang, Sehyun Ryu, and Jonggyu Jang, KR 10-2998547.',
  '“Electronic Device for Deriving Influence Function,” Hyun Jong Yang, Hyunsu Lyu, Jonggyu Jang, and Sehyun Ryu, KR 10-2024-0045157 (filed).',
];

const timeline = [
  { period: "Starting Oct. 2026", role: "Visiting Student Researcher", institution: "Stanford University", location: "Stanford, CA, USA", logo: "/stanford-logo.jpg", logoClass: "stanford", detail: "Department of Electrical Engineering · Machine Learning and Communications Laboratory · Host: Prof. John M. Cioffi" },
  { period: "Nov. 2025 — Present", role: "Industry-sponsored Ph.D. Researcher", institution: "Samsung Electronics", location: "Hwaseong, Republic of Korea", logo: "/samsung-logo.png", logoClass: "samsung", detail: "DS Division, System LSI Business, Modem Development Team · Post-graduation Employment Program" },
  { period: "Jan. 2025 — Present", role: "External Research Fellow", institution: "Seoul National University", location: "Seoul, Republic of Korea", logo: "/snu-logo.png", logoClass: "snu", detail: "Institute of New Media and Communications · Advanced Intelligent Systems Laboratory" },
];

const education = [
  { period: "Feb. 2023 — Present", role: "Ph.D. Candidate in Electrical Engineering", institution: "POSTECH", location: "Pohang, Republic of Korea", logo: "/postech-logo.png", logoClass: "postech", detail: "Advanced Intelligent Systems Laboratory · Advisor: Prof. Hyun Jong Yang" },
  { period: "Feb. 2018 — Feb. 2023", role: "B.S. in Electrical Engineering", institution: "POSTECH", location: "Pohang, Republic of Korea", logo: "/postech-logo.png", logoClass: "postech", detail: "Magna Cum Laude" },
];

function PublicationGroup({ title, items, tags }: { title: string; items: React.ReactNode[]; tags: number[][] }) {
  return (
    <section className="publication-group">
      <h3>{title}</h3>
      <ol className="publication-list">
        {items.map((item, index) => {
          const href = findFirstPublicationHref(item);
          const publicationId = findPublicationId(item);
          const content = highlightSelfAuthor(unwrapPublicationLinks(item));
          return <li id={publicationId ? `publication-${publicationId}` : undefined} key={index}>
            {href ? <a className="publication-entry-link" href={href}>{content}</a> : content}
            <div className="publication-tags" aria-label="Research interest tags">
              {(tags[index] ?? []).map((tagId) => {
                const tag = researchTagMeta[tagId];
                return <a className={`research-tag ${tag.className}`} href={`#research-papers-${tagId}`} key={tagId}>{tag.label}</a>;
              })}
            </div>
          </li>;
        })}
      </ol>
    </section>
  );
}

function findFirstPublicationHref(node: React.ReactNode): string | undefined {
  if (Array.isArray(node)) {
    for (const child of node) {
      const href = findFirstPublicationHref(child);
      if (href) return href;
    }
    return undefined;
  }
  if (React.isValidElement<{ children?: React.ReactNode; href?: string }>(node)) {
    if (node.type === "a" && node.props.href) return node.props.href;
    return findFirstPublicationHref(node.props.children);
  }
  return undefined;
}

function unwrapPublicationLinks(node: React.ReactNode): React.ReactNode {
  if (Array.isArray(node)) return node.map((child) => unwrapPublicationLinks(child));
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    if (node.type === "a") return unwrapPublicationLinks(node.props.children);
    return React.cloneElement(node, undefined, unwrapPublicationLinks(node.props.children));
  }
  return node;
}

function nodeText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) return nodeText(node.props.children);
  return "";
}

function findPublicationId(node: React.ReactNode): string | undefined {
  return nodeText(node).match(/^\[([PJCD]\d+)\]/)?.[1];
}

function relatedPublications(tagId: number) {
  return publications.flatMap((group) => group.items.flatMap((item, index) => {
    if (!group.tags[index]?.includes(tagId)) return [];
    const id = findPublicationId(item) ?? `${group.title}-${index + 1}`;
    return [{ id, item, href: findFirstPublicationHref(item) ?? `#publication-${id}` }];
  }));
}

function RelatedPapersLink({ tagId }: { tagId: number }) {
  const count = relatedPublications(tagId).length;
  return <a className="related-papers-link" href={`#research-papers-${tagId}`}>Related {count} {count === 1 ? "paper" : "papers"}</a>;
}

function ResearchPapersModal({ tagId }: { tagId: number }) {
  const tag = researchTagMeta[tagId];
  const related = relatedPublications(tagId);
  return (
    <section className="research-modal" id={`research-papers-${tagId}`} aria-labelledby={`research-papers-title-${tagId}`}>
      <a className="research-modal-backdrop" href="#research" aria-label="Close related papers" />
      <div className="research-modal-window" role="dialog" aria-modal="true">
        <div className="research-modal-heading">
          <div>
            <span className={`research-tag ${tag.className}`}>{tag.label}</span>
            <h3 id={`research-papers-title-${tagId}`}>Related Papers</h3>
          </div>
          <a className="research-modal-close" href="#research" aria-label="Close related papers">×</a>
        </div>
        <ol className="research-modal-list">
          {related.map(({ id, item, href }) => (
            <li key={id}><a href={href}>{highlightSelfAuthor(unwrapPublicationLinks(item))}</a></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function highlightSelfAuthor(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string") {
    return node.split("Sehyun Ryu").map((part, index, parts) => (
      <React.Fragment key={`${part}-${index}`}>
        {part}{index < parts.length - 1 && <b className="self-author">Sehyun Ryu</b>}
      </React.Fragment>
    ));
  }
  if (Array.isArray(node)) return node.map((child) => highlightSelfAuthor(child));
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return React.cloneElement(node, undefined, highlightSelfAuthor(node.props.children));
  }
  return node;
}

function Timeline({ items }: { items: typeof timeline }) {
  return <div className="timeline">{items.map((item) => (
    <article className="timeline-item" key={`${item.role}-${item.period}`}>
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-main">
        <div className={`timeline-logo-frame ${item.logoClass}`}>
          <img className="timeline-logo" src={item.logo} alt={`${item.institution} logo`} />
        </div>
        <div className="timeline-copy">
          <h3>{item.role}</h3>
          <p className="timeline-place">
            <strong>{item.institution}</strong>
            <span className="timeline-location"><img src="/location.svg" alt="" />{item.location}</span>
          </p>
          <p className="timeline-detail">
            {item.detail.split(" · ").map((line) => <span key={line}>{line}</span>)}
          </p>
        </div>
      </div>
    </article>
  ))}</div>;
}

export default function Home() {
  return (
    <>
      <SiteHeader activePage="about" />

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Wireless communications · Machine intelligence · Physical AI</p>
            <h1><strong>Sehyun Ryu</strong></h1>
            <div className="bio">
              <p>Sehyun is a <strong>systems engineer</strong> who <strong>designs communication as infrastructure for scalable machine intelligence.</strong> His work spans AI-native wireless systems, adaptive communication in dynamic channel environments, and communication infrastructure for machine intelligence and physical AI systems.</p>
              <p>He is a <strong>Ph.D. candidate</strong> in Electrical Engineering at <strong className="university-postech">POSTECH</strong>, advised by <a href="https://ece.snu.ac.kr/research-faculty/faculty/full-time?md=view&profid=p903">Prof. Hyun Jong Yang</a> at the <a href="https://sites.google.com/view/aislsnu/home">Advanced Intelligent Systems Lab</a>. He received his B.S. in Electrical Engineering from POSTECH in February 2023. Since January 2025, he has been an external research fellow at <strong className="university-snu">Seoul National University</strong> and an <strong>Industry-Sponsored Ph.D. Fellow</strong> at <strong className="company-samsung">Samsung Electronics</strong>. He is scheduled to join <strong className="university-stanford">Stanford University</strong> as a <strong>visiting student researcher</strong> in October 2026.</p>
            </div>
            <div className="contact-row" aria-label="Contact links">
              <a href="mailto:sh.ryu@postech.ac.kr" aria-label="Email" title="Email"><img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope.svg" alt="" /></a>
              <a href="https://www.linkedin.com/in/sehyun-ryu-57b640172/" aria-label="LinkedIn" title="LinkedIn"><img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/linkedin.svg" alt="" /></a>
              <a className="contact-cv" href="https://www.overleaf.com/read/cgzkyxxqjdnm#5d2d80" aria-label="CV" title="CV">CV</a>
              <a href="https://github.com/RyuSearch" aria-label="GitHub" title="GitHub"><img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/github.svg" alt="" /></a>
            </div>
          </div>
          <figure className="profile-card">
            <img src="/profile.webp" alt="Portrait of Sehyun Ryu" width="720" height="913" />
            <figcaption><span>sh.ryu</span><code>at</code><span>postech.ac.kr</span></figcaption>
          </figure>
        </section>

        <section className="section research" id="research">
          <div className="section-heading"><span>01</span><h2>Research Interests</h2></div>
          <div className="research-intro">
            <p>My research focuses on system-level design of wireless communication under practical constraints such as latency, limited observability, and signaling overhead, with selective use of machine learning where it is effective.</p>
          </div>
          <div className="interest-grid">
            <article><span>01</span><h3>AI-Native RAN</h3><p>Learned channel representations and generative channel modeling for AI-native radio access networks.</p><RelatedPapersLink tagId={1} /></article>
            <article><span>02</span><h3>Adaptive Wireless Systems</h3><p>Adaptive optimization of wireless systems under high mobility and dynamically varying channel conditions.</p><RelatedPapersLink tagId={2} /></article>
            <article><span>03</span><h3>CSI Representation</h3><p>Efficient representation, prediction, feedback, and exploitation of CSI for improved wireless communication.</p><RelatedPapersLink tagId={3} /></article>
            <article><span>04</span><h3>Machine Intelligence and Physical AI</h3><p>Intelligence, communication, and computing for scalable physical AI and cloud-edge robotic systems.</p><RelatedPapersLink tagId={4} /></article>
          </div>
          {[1, 2, 3, 4].map((tagId) => <ResearchPapersModal tagId={tagId} key={tagId} />)}
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><span>02</span><h2>Publications</h2></div>
          <p className="section-note">(=) equal contribution · (*) corresponding author</p>
          {publications.map((group) => <PublicationGroup key={group.title} {...group} />)}
          <section className="publication-group patents"><h3>Patents</h3><ol className="publication-list">{patents.map((patent, index) => {
            const isFiled = /\s*\(filed\)\.?$/.test(patent);
            const patentText = isFiled ? patent.replace(/\s*\(filed\)\.?$/, ".") : patent;
            return <li key={index}>{highlightSelfAuthor(patentText)} <span className="patent-status">{isFiled ? "filed" : "granted"}</span></li>;
          })}</ol></section>
        </section>

        <section className="section" id="experience">
          <div className="section-heading"><span>03</span><h2>Experience</h2></div>
          <Timeline items={timeline} />
          <div className="subsection-heading"><h2>Education</h2></div>
          <Timeline items={education} />
        </section>

        <section className="section" id="activities">
          <div className="section-heading"><span>04</span><h2>Academic Service</h2></div>
          <div className="activity-grid">
            <article><h3>Journal Reviewer</h3><ul><li><em>IEEE Transactions on Wireless Communications.</em></li><li><em>IEEE Transactions on Communications.</em></li><li><em>IEEE Transactions on Vehicular Technology.</em></li><li><em>IEEE Transactions on Information Forensics &amp; Security.</em></li><li><em>IEEE Wireless Communications Letters.</em></li><li><em>The Journal of Supercomputing.</em></li><li><em>The Journal of Korean Institute of Communications and Information Sciences.</em></li><li><em>Frontiers in Psychology.</em></li></ul></article>
            <article className="conference-activity"><h3>Conference</h3>
              <div className="activity-subsection"><h4>Conference Reviewer</h4><ul><li><em>IEEE Consumer Communications &amp; Networking Conference (CCNC)</em><span className="activity-year">2024, 2025</span></li></ul></div>
              <div className="activity-subsection"><h4>Technical Program Committee</h4><ul><li><em>IEEE Consumer Communications &amp; Networking Conference (CCNC)</em><span className="activity-year">2027</span></li><li><em>KICS International Conference on ICT Convergence (ICTC)</em><span className="activity-year">2025</span></li></ul></div>
              <div className="activity-subsection"><h4>Conference Assistant</h4><ul><li><em>IEEE/IEIE International Conference on Consumer Electronics Asia (ICCE-Asia)</em><span className="activity-year">2025</span></li></ul></div>
            </article>
            <article><h3>Teaching Assistant</h3><ul><li><em>EECE490W: Introduction to Reinforcement Learning, POSTECH</em><span className="activity-year">Spring 2023</span></li><li><em>EECE695V: Introduction to AI for Graduate School Students, POSTECH</em><span className="activity-year">Fall 2023</span></li></ul></article>
          </div>

          <div className="subsection-heading"><h2>Honors &amp; Awards</h2></div>
          <ul className="plain-list"><li><strong>Grand Prize</strong>, New Industry Sector Ideas and Patent Rights Competition, Korea Invention Promotion Association, 2024.</li><li><strong>Excellence Award</strong>, Undergraduate Group Research Program (UGRP), POSTECH, 2019.</li><li><strong>Jigok Scholarship</strong>, full tuition, POSTECH, Mar. 2018 – Feb. 2023.</li></ul>

          <div className="subsection-heading"><h2>Research Projects</h2></div>
          <ul className="plain-list"><li><strong>Development of a 5G-A vRAN Research Platform</strong> · IITP · 12.8B KRW · Jun. 2024 – Dec. 2028.</li><li><strong>AI-Based CBF Overhead Reduction</strong> · Samsung Electronics (S.LSI) · 300M KRW · Feb. 2024 – Aug. 2024.</li><li><strong>Data processing methods and simulated signal generation for AI radar data analysis</strong> · ADD · 90M KRW · Oct. 2023 – Dec. 2024.</li></ul>
        </section>
      </main>

      <footer><div><strong>Sehyun Ryu</strong><span>Systems engineer for scalable machine intelligence.</span></div><p>© 2026 Sehyun Ryu · Hosted on GitHub Pages</p></footer>
    </>
  );
}
