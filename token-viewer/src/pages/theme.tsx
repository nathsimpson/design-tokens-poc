import { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import { ColorCard } from "../ColorCard";

import wbc from "../tokens/wbc";
import stg from "../tokens/stg";

const themes = { wbc, stg };

type ThemeName = keyof typeof themes;

const ThemeSelect = ({
  currentThemeName,
  setCurrentThemeName,
}: {
  currentThemeName: ThemeName;
  setCurrentThemeName: (themeName: ThemeName) => void;
}) => {
  return (
    <select
      value={currentThemeName}
      onChange={(e) => setCurrentThemeName(e.target.value as ThemeName)}
    >
      {Object.keys(themes).map((t) => (
        <option key={t}>{t}</option>
      ))}
    </select>
  );
};

function Application() {
  const [currentThemeName, setCurrentThemeName] =
    useState<keyof typeof themes>("wbc");
  const currentTheme = themes[currentThemeName];

  const packNames = (
    Object.keys(wbc.color) as (keyof typeof wbc.color)[]
  ).sort();

  return (
    <div className={styles.main}>
      <h1>Tokens</h1>
      <ThemeSelect
        currentThemeName={currentThemeName}
        setCurrentThemeName={setCurrentThemeName}
      />

      <h2>{currentThemeName}</h2>

      <div>
        {packNames.map((pack) => (
          <div key={pack}>
            <h2>{pack}</h2>
            <ul className={styles.tokenlist}>
              {Object.entries(currentTheme.color[pack]).map(
                ([token, value]) => {
                  // TODO: get css var too
                  const hex = value.value;
                  const varName = value.name;

                  return (
                    <li key={token}>
                      <ColorCard label={token} value={hex} varName={varName} />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Application />
    </>
  );
}
