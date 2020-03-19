/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Home from './components/Example';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => (
    <>
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
            </Switch>
        </Router>
    </>
);

ReactDOM.render(<App />, document.getElementById('app'));

