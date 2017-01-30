import 'babel-polyfill';
import '../common/unhandledRejection';

import './normalize.css';
import './skeleton.css';

import Relay from 'react-relay';
import {Router, useRouterHistory, applyRouterMiddleware} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import useRelay from 'react-router-relay';
import ReactGA from 'react-ga';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routeConfig from '../common/routeConfig';
import config from './config';

const history = useStandardScroll(useRouterHistory(createBrowserHistory))();

ReactGA.initialize(config.googleAnalyticsKey);

function trackPageView () {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <Router
    history={history}
    routes={routeConfig}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
    onUpdate={trackPageView}
  />,
  document.getElementById('relay-root')
);
