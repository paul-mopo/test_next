"use client";

import Script from "next/script";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [scriptSrc, setScriptSrc] = useState("");

  const [injectScript, setInjectScript] = useState(false);

  return (
    <div className={styles.page}>
      <textarea
        value={scriptSrc}
        onChange={(e) => setScriptSrc(e.target.value)}
        disabled={injectScript}
      ></textarea>
      <button
        onClick={() => {
          setInjectScript(true);
        }}
      >
        do it
      </button>
      {injectScript && <Script id="foo">{scriptSrc}</Script>}
    </div>
  );
}
