import 'babel-polyfill';
import '../common/unhandledRejection';

import './normalize.css';
import './skeleton.css';

import Relay from 'react-relay';
import {Router, useRouterHistory, applyRouterMiddleware} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import useRelay from 'react-router-relay';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routeConfig from '../common/routeConfig';

const history = useStandardScroll(useRouterHistory(createBrowserHistory))();

ReactDOM.render(
  <Router
    history={history}
    routes={routeConfig}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
  />,
  document.getElementById('relay-root')
);
