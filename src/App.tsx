import React from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import RenderRouter from './routes';
import { HistoryRouter, history } from './routes/history';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const messagesInFrench = {
    myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  }
  return (
    <IntlProvider locale="fr" defaultLocale="en" messages={messagesInFrench}>
    <HistoryRouter history={history}>
      <RenderRouter />
    </HistoryRouter>
  </IntlProvider>
  );
}

export default App;
