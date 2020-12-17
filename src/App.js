import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AssistirLista from './components/AssistirLista';
import Assistidos from './components/Assistidos';
import Adiciona from './components/Adiciona';
import './App.css';
import './lib/font-awesome/css/all.min.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>

      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <AssistirLista />
          </Route>

          <Route path="/assistidos">
            <Assistidos />
          </Route>

          <Route path="/adicionar">
            <Adiciona />
          </Route>

        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
