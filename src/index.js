import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {App} from "./App";

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
	, document.getElementById('root'));


serviceWorker.unregister();
