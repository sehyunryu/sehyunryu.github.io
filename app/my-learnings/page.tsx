import type { Metadata } from "next";
import { SiteHeader } from "../SiteHeader";
import data from "./data.json";

export const metadata: Metadata = {
  title: "My Learnings — Sehyun Ryu",
  description: "Courses, teaching, books, and places that have shaped Sehyun Ryu’s learning journey.",
};

function LearningList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return <ul className={`learning-list${columns ? " learning-columns" : ""}`}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function CountryCard({ entry }: { entry: string }) {
  const match = entry.match(/^(.+?) \((.+)\)$/);
  const country = match?.[1] ?? entry;
  const cities = match?.[2].split(", ") ?? [];

  return (
    <article className="country-card">
      <strong>{country}</strong>
      <div className="country-cities">
        {cities.map((city) => <span key={city}>{city}</span>)}
      </div>
    </article>
  );
}

export default function MyLearnings() {
  return (
    <>
      <SiteHeader activePage="my-learnings" />
      <main className="page-main learnings-page">
        <header className="page-hero">
          <p className="eyebrow">My Learnings</p>
          <h1>A living record of what I study, read, teach, and explore.</h1>
          <p className="page-lead">Formal coursework and learning beyond the classroom—kept together as an evolving map of ideas.</p>
        </header>

        <section className="learning-section">
          <div className="learning-heading"><span>01</span><div><h2>STEM Courses</h2><p>{data.courses.Undergraduate.length + data.courses.Graduate.length} courses · {data.courses.TA.length} teaching assistantships</p></div></div>
          <div className="course-grid">
            <article><h3>Undergraduate</h3><LearningList items={data.courses.Undergraduate} /></article>
            <article><h3>Graduate</h3><LearningList items={data.courses.Graduate} /></article>
            <article><h3>Teaching Assistant</h3><LearningList items={data.courses.TA} /></article>
          </div>
        </section>

        <section className="learning-section">
          <div className="learning-heading"><span>02</span><div><h2>Books: Liberal Arts</h2><p>{data.liberalArts.length} books across philosophy, society, psychology, economics, and literature</p></div></div>
          <LearningList items={data.liberalArts} columns />
        </section>

        <section className="learning-section">
          <div className="learning-heading"><span>03</span><div><h2>Books: Science &amp; Technology</h2><p>{data.scienceTechnology.length} books on physics, computing, biology, networks, and engineering</p></div></div>
          <LearningList items={data.scienceTechnology} columns />
        </section>

        <section className="learning-section countries-section">
          <div className="learning-heading"><span>04</span><div><h2>Visited Countries</h2><p>Places that expanded my view of the world</p></div></div>
          <div className="country-grid">{data.visitedCountries.map((country) => <CountryCard entry={country} key={country} />)}</div>
        </section>
      </main>
      <footer><div><strong>Sehyun Ryu</strong><span>Systems engineer for scalable machine intelligence.</span></div><p>© 2026 Sehyun Ryu · Hosted on GitHub Pages</p></footer>
    </>
  );
}
