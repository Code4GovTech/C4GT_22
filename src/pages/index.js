import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import ParticipantImages from "../components/ParticipantImages";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">
          Navigate the projects from the drop-downs in the top.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/2022">
            About 2022 projects
          </Link>              
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Updates about C4GT projects."
    >
      <HomepageHeader />
      {
        <main>
          <ParticipantImages />
        </main>
      }
    </Layout>
  );
}
