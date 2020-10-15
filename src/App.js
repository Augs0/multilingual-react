import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { getMessages } from "./Translation/Languages";
import Chatbot from './Components/Chatbot'
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
            <p>
              <FormattedMessage
                id="about.para"
                defaultMessage="Voyager is the leading name in translation and interpreting services. With over 30 years of experience, Voyager knows what you need in a translation and interpreting service. We make it easy and accessible to get the translations you need, fast."
              ></FormattedMessage>
            </p>
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
              <li>
                <FormattedMessage id="service.one" defaultMessage="Consecutive interpreting"></FormattedMessage>
              </li>
              <li>
                <FormattedMessage id="service.two" defaultMessage="Simultaneous interpreting"></FormattedMessage>
              </li>
              <li>
                <FormattedMessage id="service.three" defaultMessage="Multilingual social media content"></FormattedMessage>
              </li>
              <li>
                <FormattedMessage id="service.four" defaultMessage="Document translation"></FormattedMessage>
              </li>
              <li>
                <FormattedMessage id="service.five" defaultMessage="Public health interpreting"></FormattedMessage>
              </li>
              <li>
                <FormattedMessage id="service.six" defaultMessage="Legal interpreting"></FormattedMessage>
              </li>
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
            <p>
              <FormattedMessage id="prices.para" defaultMessage="The services of our translators and interpreters is priced by the hour."></FormattedMessage>
            </p>
            <article>
              <p className="translation">
                <FormattedMessage id="translator.para" defaultMessage="Translation
                £9 per hour of work"></FormattedMessage>
              </p>
              <p className="interpreting">
                <FormattedMessage
                  id="interpreter.para" defaultMessage="Interpreting
                £10 / £15 per hour (consecutive / simultaneous)"
                ></FormattedMessage>
              </p>
            </article>
          </section>
        </main>
        <Chatbot />
      </div>
    </IntlProvider>
  );
};

export default App;
