import './scss/app.scss'<% if(props.includeReact) { %>
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './modules/Home'<% if(props.includeRouter) { %>
import { browserHistory } from 'react-router'

import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('app')
);<% } else { %>
ReactDOM.render(
  <Home />,
  document.getElementById('app')
);
<% } %><% } %>
