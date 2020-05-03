// App
import React from 'react';
import firebase from './dev/firebaseapp';

import Router from './router';
import GlobalStyle from './common/global_style';
import Client from './client';

Client.initialize(firebase);

const App = () => (
	<div className="testapp">
		<Router />
		<GlobalStyle />
	</div>
);

export default App;