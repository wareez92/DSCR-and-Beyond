import { Link } from "react-router";
import useHtmlLang from "./Lang";
import { useState } from "react";

function About({ lang, translations }) {
  useHtmlLang(lang);

  return (
    <>
      <div className="about">
        <h1>{translations.about[lang].h1}</h1>
        <div>
          <img src="/assets/unnamed.png" />
          <h3>
            {translations.about[lang].h3.meet}{" "}
            <span className="sese">Sese Ntem </span>–{" "}
            {translations.about[lang].h3.specialist}
          </h3>
          <p>
            {translations.about[lang].p.intro}{" "}
            <a href="/">{translations.about[lang].p.dscr}</a>,{" "}
            {translations.about[lang].p.qualify}{" "}
            <span>{translations.about[lang].p.rental}</span>{" "}
            {translations.about[lang].p.not} {translations.about[lang].p.known}{" "}
            <span>{translations.about[lang].p.closings}</span> Sese{" "}
            {translations.about[lang].p.delivers}{" "}
            <span>{translations.about[lang].p.investors}</span>{" "}
            <span>{translations.about[lang].p.responsive}</span>{" "}
            {translations.about[lang].p.ability}{" "}
            <span>{translations.about[lang].p.simplify}</span>.{" "}
            {translations.about[lang].p.polyglot}{" "}
            <span>speaks multiple languages, </span>
            including <span>{translations.about[lang].p.languages}</span>{" "}
            {translations.about[lang].p.closing}{" "}
            <a href="https://calendly.com/sese-ntem/30min?preview_source=et_card&month=2025-08">
              {translations.about[lang].p.cta}
            </a>
          </p>
        </div>

        <Link className="back-button" to="/">
          {translations.about[lang].back}
        </Link>
      </div>
    </>
  );
}

export default About;
