import { SiteHeader } from "./SiteHeader";

const publications = [
  {
    title: "Preprints",
    items: [
      <><strong>[P1]</strong> Sehyun Ryu, Yumin Kim, Minjae Lee, Hyun Jong Yang*, and John M. Cioffi*, <a href="https://arxiv.org/abs/2607.24872">“Beam-Response Contrastive Learning for Transmitter-Side MIMO CSI Representation,”</a> <em>arXiv</em>, 2026.</>,
      <><strong>[P2]</strong> Sehyun Ryu, Seungmin Choi, Hyun Jong Yang*, and John M. Cioffi*, <a href="https://arxiv.org/abs/2608.01713">“End-to-End Mobility-Aware Multi-RIS Optimization via Blockage Detection and Closed-Form Riemannian Updates,”</a> submitted to <em>IEEE Transactions on Wireless Communications</em>, 2026.</>,
      <><strong>[P3]</strong> Jeonghyun An(=), Sehyun Ryu(=), and Hyun Jong Yang*, “Contamination-Aware Task Allocation for Cell-Free Cloud-Robotic AMR Warehouses,” submitted to <em>IEEE Internet of Things Journal</em>, 2026.</>,
      <><strong>[P4]</strong> Minwoo Kim, Hyeonsu Lyu, Sehyun Ryu, Sojeong Park, and Hyun Jong Yang*, “Temporal Channel Estimation for Generalized CSI Feedback,” <em>arXiv</em>, 2026.</>,
      <><strong>[P5]</strong> Hyeonsu Lyu, Minwoo Kim, Sehyun Ryu, and Hyun Jong Yang*, double-blinded, submitted to <em>IEEE INFOCOM</em>, 2026.</>,
      <><strong>[P6]</strong> Hyeonsu Lyu, Jonggyu Jang, Sehyun Ryu, and Hyun Jong Yang*, <a href="https://arxiv.org/abs/2312.05586">“Deeper Understanding of Black-box Predictions via Generalized Influence Functions,”</a> <em>arXiv</em>, 2024.</>,
    ],
  },
  {
    title: "International journals",
    items: [
      <><strong>[J7]</strong> Minjae Lee, Sehyun Ryu, Hosung Joo, Seungmin Choi, and Hyun Jong Yang, “Importance-Aware CSI Feedback with Adaptive Latent Truncation,” <em>IEEE Transactions on Vehicular Technology</em>, accepted, 2026.</>,
      <><strong>[J6]</strong> Hosung Joo(=), Seungmin Choi(=), Sehyun Ryu, and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11417943">“Compressed-CSI Feedback with Near Real-time Domain Adaptation,”</a> <em>IEEE Transactions on Communications</em>, vol. 74, pp. 11048–11061, 2026.</>,
      <><strong>[J5]</strong> Hyun Jong Yang, Howon Lee*, Kyuhong Shim, Jeongho Kwak, Hyunsoo Kim, Donghoon Kim, Sehyun Ryu, Jaehyun Choi, Youbin Kim, Chanjun Moon, Michael Ryoo, and Byonghyo Shim*, <a href="https://ieeexplore.ieee.org/document/11543360">“Advancing Multi-Robot Networks via MLLM-Driven Sensing, Communication, and Computation: A Comprehensive Survey,”</a> <em>IEEE Communications Surveys and Tutorials</em>, vol. 28, pp. 5833–5871, 2026.</>,
      <><strong>[J4]</strong> Sehyun Ryu and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11480097">“Standards-Compliant DM-RS Allocation via Temporal Channel Prediction for Massive MIMO Systems,”</a> <em>IEEE Transactions on Vehicular Technology</em>, vol. 75, no. 7, pp. 15171–15175, 2026.</>,
      <><strong>[J3]</strong> Sehyun Ryu*, <a href="https://rdcu.be/e6u0K">“From Isolated to Interconnected: An Evolutionary Psychological Account of Artificial Othering and a Design Paradigm to Preserve Human Social Cohesion,”</a> <em>AI and Ethics</em>, vol. 6, no. 182, 2026.</>,
      <><strong>[J2]</strong> Seungmin Choi(=), Hosung Joo(=), Sehyun Ryu, Tommaso Melodia, and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11215681">“Performance-Guaranteed CSI Feedback via Model-Free Incremental Residual Compression Framework,”</a> <em>IEEE Wireless Communications Letters</em>, vol. 15, pp. 880–884, 2025.</>,
      <><strong>[J1]</strong> Sehyun Ryu(=), Jonggyu Jang(=), and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/10609362?source=authoralert">“Noise Variance Optimization in Differential Privacy: A Game-Theoretic Approach Through Per-Instance Differential Privacy,”</a> <em>IEEE Access</em>, vol. 12, pp. 103104–103118, 2024.</>,
    ],
  },
  {
    title: "International conference proceedings",
    items: [
      <><strong>[C3]</strong> Sehyun Ryu and Hyun Jong Yang*, “Blockage-Aware Multi-RIS Sensing and Optimization for mmWave Smart Radio Environments,” <em>IEEE GLOBECOM</em>, Macau, China, accepted, 2026.</>,
      <><strong>[C2]</strong> Jaehyun Choi, Sehyun Ryu, Seungmin Choi, and Hyun Jong Yang*, <a href="https://ieeexplore.ieee.org/document/11263604">“RT-AUGGAN: Robust Fingerprint Positioning under Environmental Variations via Ray Tracing-Assisted GAN Augmentation,”</a> <em>IEEE ICCE-Asia</em>, Busan, Republic of Korea, 2025.</>,
      <><strong>[C1]</strong> Sehyun Ryu, Hosung Joo, Jonggyu Jang, and Hyun Jong Yang*, <a href="https://ojs.aaai.org/index.php/AAAI/article/view/30506">“Instance-Wise Laplace Mechanism via Deep Reinforcement Learning,”</a> <em>AAAI Conference on Artificial Intelligence</em>, Vancouver, Canada, 2024, 38(21), pp. 23640–23641. <span className="award">Oral presentation</span></>,
    ],
  },
  {
    title: "Korean domestic papers",
    items: [
      <><strong>[D6]</strong> Sehyun Ryu, Jaehyun Choi, and Hyun Jong Yang*, “Communication-Aware Multi-Agent Path Finding for Wi-Fi 6 Warehouse Robot Coordination,” <em>Summer Conference of KICS</em>, Jeju Island, Republic of Korea, 2026.</>,
      <><strong>[D5]</strong> Hyeonsu Lyu, Minwoo Kim, Sehyun Ryu, and Hyun Jong Yang*, “Towards Building a Ray-Tracing-Compatible Digital Twin Scene for Wireless-Aware Physical AI Systems,” <em>JCCI</em>, Yeosu, Republic of Korea, 2026.</>,
      <><strong>[D4]</strong> Sehyun Ryu and Hyun Jong Yang*, <a href="https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12738510&width=1280">“A Survey of the Application of Ray-Tracing-Based Channel Modeling for Digital Twin Environments,”</a> <em>Winter Conference of KICS</em>, Pyeongchang, Republic of Korea, 2026.</>,
      <><strong>[D3]</strong> Sehyun Ryu and Hyun Jong Yang*, “Trends in Utilizing Generative Models for Wireless Communications,” <em>KICS Information and Communications Magazine</em>, 2024.</>,
      <><strong>[D2]</strong> Sehyun Ryu and Hyun Jong Yang*, “Research Trends of Deep Learning-Based Algorithms for Reduced CSI Feedback Overhead,” <em>JCCI</em>, Busan, Republic of Korea, 2024.</>,
      <><strong>[D1]</strong> Sehyun Ryu and Hyun Jong Yang*, “Additive Machine Unlearning Algorithm Using Orthogonality,” <em>Summer Conference of KICS</em>, Jeju Island, Republic of Korea, 2023.</>,
    ],
  },
];

const patents = [
  '“Data Augmentation Method for Indoor Positioning based on Wireless Channel State Information and Computer Device Thereof,” Hyun Jong Yang, Jaehyun Choi, Seungmin Choi, and Sehyun Ryu, KR 10-2026-0012777 (filed).',
  '“Method and Apparatus for Channel Prediction-Based Reference Signal Allocation in Massive MIMO Wireless Communication System,” Hyun Jong Yang and Sehyun Ryu, KR 10-2025-0214422 (filed).',
  '“Method for Channel State Information (CSI) Feedback Using Multi-Stage Residual Compression and User Equipment Performing the Same,” Hyun Jong Yang, Seungmin Choi, Sehyun Ryu, and Hosung Joo, KR 10-2025-0202288 (filed).',
  '“Apparatus and Method for Providing Statistical Data,” Hyun Jong Yang, Sehyun Ryu, and Jonggyu Jang, KR 10-2998547.',
  '“Electronic Device for Deriving Influence Function,” Hyun Jong Yang, Hyunsu Lyu, Jonggyu Jang, and Sehyun Ryu, KR 10-2024-0045157 (filed).',
];

const timeline = [
  { period: "Starting Oct. 2026", role: "Visiting Student Researcher", place: "Stanford University · Stanford, CA, USA", detail: "Department of Electrical Engineering · Machine Learning and Communications Laboratory · Host: Prof. John M. Cioffi" },
  { period: "Nov. 2025 — Present", role: "Industry-sponsored Ph.D. Researcher", place: "Samsung Electronics · Hwaseong, Republic of Korea", detail: "DS Division, System LSI Business, Modem Development Team · Post-graduation Employment Program" },
  { period: "Jan. 2025 — Present", role: "External Research Fellow", place: "Seoul National University · Seoul, Republic of Korea", detail: "Institute of New Media and Communications · Advanced Intelligent Systems Laboratory" },
];

const education = [
  { period: "Feb. 2023 — Present", role: "Ph.D. Candidate in Electrical Engineering", place: "POSTECH · Pohang, Republic of Korea", detail: "Advanced Intelligent Systems Laboratory · Advisor: Prof. Hyun Jong Yang" },
  { period: "Feb. 2018 — Feb. 2023", role: "B.S. in Electrical Engineering", place: "POSTECH · Pohang, Republic of Korea", detail: "Magna Cum Laude" },
];

function PublicationGroup({ title, items }: { title: string; items: React.ReactNode[] }) {
  return (
    <section className="publication-group">
      <h3>{title}</h3>
      <ol className="publication-list">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </section>
  );
}

function Timeline({ items }: { items: typeof timeline }) {
  return <div className="timeline">{items.map((item) => (
    <article className="timeline-item" key={`${item.role}-${item.period}`}>
      <div className="timeline-period">{item.period}</div>
      <div><h3>{item.role}</h3><p className="timeline-place">{item.place}</p><p>{item.detail}</p></div>
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
              <p>He is a <strong>Ph.D. candidate</strong> in Electrical Engineering at <strong className="university-postech">POSTECH</strong>, advised by <a href="https://ece.snu.ac.kr/research-faculty/faculty/full-time?md=view&profid=p903">Prof. Hyun Jong Yang</a> at the <a href="https://sites.google.com/view/aislsnu/home">Advanced Intelligent Systems Lab</a>. He received his B.S. in Electrical Engineering from POSTECH in February 2023. Since January 2025, he has been an external research fellow at <strong className="university-snu">Seoul National University</strong> and an <strong>Industry-Sponsored Ph.D. Fellow</strong> at Samsung Electronics. He is scheduled to join <strong className="university-stanford">Stanford University</strong> as a <strong>visiting student researcher</strong> in October 2026.</p>
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
            <article><span>01</span><h3>AI-Native RAN</h3><p>Learned channel representations and generative channel modeling for AI-native radio access networks.</p></article>
            <article><span>02</span><h3>Adaptive Wireless Systems</h3><p>Adaptive optimization of wireless systems under high mobility and dynamically varying channel conditions.</p></article>
            <article><span>03</span><h3>CSI Representation</h3><p>Learned CSI representation, prediction, compression, and feedback for efficient channel acquisition.</p></article>
            <article><span>04</span><h3>Physical AI</h3><p>Wireless communication infrastructure for scalable physical AI and cloud-edge robotics.</p></article>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><span>02</span><h2>Publications</h2></div>
          <p className="section-note">(=) equal contribution · (*) corresponding author</p>
          {publications.map((group) => <PublicationGroup key={group.title} {...group} />)}
          <section className="publication-group patents"><h3>Patents</h3><ol className="publication-list">{patents.map((patent, index) => <li key={index}>{patent}</li>)}</ol></section>
        </section>

        <section className="section" id="experience">
          <div className="section-heading"><span>03</span><h2>Experience</h2></div>
          <Timeline items={timeline} />
          <div className="subsection-heading"><h2>Education</h2></div>
          <Timeline items={education} />
        </section>

        <section className="section" id="activities">
          <div className="section-heading"><span>04</span><h2>Academic Activities</h2></div>
          <div className="activity-grid">
            <article><h3>Journal Reviewer</h3><ul><li>IEEE Transactions on Wireless Communications</li><li>IEEE Transactions on Communications</li><li>IEEE Transactions on Vehicular Technology</li><li>IEEE Transactions on Information Forensics &amp; Security</li><li>IEEE Wireless Communications Letters</li><li>The Journal of Supercomputing</li><li>J-KICS</li><li>Frontiers in Psychology</li></ul></article>
            <article><h3>Conference Service</h3><ul><li>Reviewer, IEEE CCNC <span className="activity-year">2024, 2025</span></li><li>TPC, IEEE CCNC <span className="activity-year">2027</span></li><li>TPC, KICS ICTC <span className="activity-year">2025</span></li><li>Conference Assistant, IEEE/IEIE ICCE-Asia <span className="activity-year">2025</span></li></ul></article>
            <article><h3>Teaching Assistant</h3><ul><li>EECE490W: Introduction to Reinforcement Learning, POSTECH (Spring 2023)</li><li>EECE695V: Introduction to AI for Graduate School Students, POSTECH (Fall 2023)</li></ul></article>
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
