import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Logo from "../assets/logo.svg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/book/introduction"
          >
            Get going!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Cover" description={siteConfig.tagline}>
      <div className="container">
        <div className="row margin-vert--lg">
          <div
            className={clsx(
              "col",
              "index-logo-container",
              styles.logoContainer
            )}
          >
            <Logo />
          </div>
          <div className={clsx("col", styles.center, styles.textCenter)}>
            <h2>
              Version 4.0
              <br />
              The consistently inconsistent update
            </h2>
            <p></p>
            <p>
              Written by <b>SKERPLES</b>
              <br />
              <a href="https://coinsandscrolls.blogspot.com">
                (coinsandscrolls.blogspot.com)
              </a>
            </p>
            <p>
              Art by <b>SCRAPPRINCESS</b>
              <br />
              <a href="https://monstermanualsewnfrompants.blogspot.com">
                (monstermanualsewnfrompants.blogspot.com)
              </a>
            </p>
            <p>
              Map by <b>JANON</b>
            </p>
            <p>
              Playtesting by an <em>astonishing</em> number of people. You know
              who you are. If you’ve run this dungeon and posted notes, I’ve
              read them. Thank you.
            </p>
            <p>
              Encouragement from many people, but particularly
              <br />
              <b>ARNOLD K.</b>
              <br />
              <a href="https://goblinpunch.blogspot.com">
                (goblinpunch.blogspot.com)
              </a>
            </p>
            <p>Keep on being weird.</p>
            <h3>LICENSE</h3>
            <p>
              This work is licensed under <em>Creative Commons CC BY-NC-SA</em>.
            </p>
            <p>
              You can share it for free, adapt it to your own system, edit it,
              print it and
              <br />
              leave it in local game stores. You just can’t sell it for money,
              and you
              <br />
              have to credit me somewhere. Same goes for the art.
            </p>
            <div className={styles.center}>
              <Link
                className="button button--lg button--primary"
                to="/book/introduction"
              >
                Enter the Tomb
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
