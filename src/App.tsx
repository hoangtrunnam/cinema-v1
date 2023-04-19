import React from "react";
import { IntlProvider } from "react-intl";
import "./App.css";
import RenderRouter from "./routes";
import { HistoryRouter, history } from "./routes/history";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  const messagesInFrench = {
    myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  };

  return (
    <RecoilRoot>
      <IntlProvider locale="fr" defaultLocale="en" messages={messagesInFrench}>
        <HistoryRouter history={history}>
          <RenderRouter />
        </HistoryRouter>
      </IntlProvider>
    </RecoilRoot>
  );
}

export default App;
