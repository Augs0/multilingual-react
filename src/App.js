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
        </header>
        <main>
          <button className="btn" onClick={() => setLocale("en")}>English</button>
          <button className="btn" onClick={() => setLocale("es")}>Español</button>
          <button className="btn" onClick={() => setLocale("jp")}>日本語</button>
        </main>
      </div>
    </IntlProvider>
  );
};

export default App;
