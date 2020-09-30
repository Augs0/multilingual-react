import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { getMessages } from "./Translation/Languages";
import "./App.css";

const App = () => {
  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider locale={locale} messages={getMessages(locale)}>
      <div className="app">
        <header>
          <h1>
            <FormattedMessage
              id="app.header"
              defaultMessage="My default webpage"
            />
          </h1>
          <button aria-label="Change content to English" className="btn" onClick={() => setLocale("en")}>English</button>
          <button aria-label="Change content to Spanish" className="btn" onClick={() => setLocale("es")}>Español</button>
          <button aria-label="Change content to Japanese" className="btn" onClick={() => setLocale("ja")}>日本語</button>
        </header>
        <main>
          <section className="about">
            <h2>
              <FormattedMessage
                id="about.header"
                defaultMessage="About Voyager"
              ></FormattedMessage>
            </h2>
            <p>Voyager is the leading name in translation and interpreting services. With over 30 years of experience, Voyager knows what you need in a translation and interpreting service. We make it easy and accessible to get the trnslations you need, fast.</p>
          </section>
          <hr />
          <section className="services">
            <h2>
              <FormattedMessage
                id="services.header"
                defaultMessage="Services we offer"
              ></FormattedMessage>
            </h2>
            <ul>
              <li>Consecutive interpreting</li>
              <li>Simultaneous interpreting</li>
              <li>Multilingual social media content</li>
              <li>Document translation</li>
              <li>Public health interpreting</li>
              <li>Legal interpreting</li>
            </ul>
          </section>
          <hr />
          <section className="prices">
            <h2>
              <FormattedMessage
                id="prices.header"
                defaultMessage="Pricing"
              ></FormattedMessage>
            </h2>
            <p>The services of our translators and interpreters is priced by the hour.</p>
            <article>
              <p className="translation">
                Translation
                £9 per hour of work
            </p>
              <p className="interpreting">
                Interpreting
                £10 / £15 per hour (consecutive / simultaneous)
            </p>
            </article>
          </section>
        </main>
      </div>
    </IntlProvider>
  );
};

export default App;
