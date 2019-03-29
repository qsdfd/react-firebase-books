import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize } from 'react-localize-redux';
import BookDetails from './components/books/BookDetails';
import CreateBook from './components/books/CreateBook';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import EditBook from './components/books/EditBook';
import en from './translations/en.json';
import nl from './translations/nl.json';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  constructor(props) {
    super(props);
    props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'Dutch', code: 'nl' }
      ],
      options: { renderToStaticMarkup }
    });
    props.addTranslationForLanguage(en, 'en');
    props.addTranslationForLanguage(nl, 'nl');
  }

  componentDidMount(){
    M.AutoInit();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/book/edit/:id" component={EditBook} />
            <Route path="/book/:id" component={BookDetails} />
            <Route path="/create" component={CreateBook} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withLocalize(App);
