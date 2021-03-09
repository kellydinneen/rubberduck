import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Form from '../Form/Form';
import Prescription from '../Prescription/Prescription';
import About from '../About/About';
import ErrorPage from '../ErrorPage/ErrorPage'
import './App.css';

const App = () => {

  return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Header home={true}/>
                <Home />
                <Footer />
              </>
            )}
          />
          <Route
            path="/form"
            render={() => (
              <>
                <Header home={false} />
                <Form />
                <Footer />
              </>
            )}
            exact
          />
          <Route
            path="/advice/:type"
            render={({match}) => (
              <>
                <Header home={false} />
                <Prescription type={match.params.type} />
                <Footer />
              </>
            )}
            exact
          />
          <Route
            path="/about"
            render={() => (
              <>
                <Header home={false} />
                <About />
                <Footer />
              </>
            )}
            exact
          />
          <Route render={() => (
            <>
              <Header home={false} />
              <div className="error-wrapper">
                <ErrorPage message={"We don't have a page here."}/>
              </div>
            </>
          )}
          />
          </Switch>
        </>
  )
}
export default App
