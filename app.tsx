import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FirstComponent from './src/FirstComponent';
import UserComponent from './src/UserComponent';

const uuidv4 = require('uuid/v4');

ReactDOM.render(
	<div>
		<h1>Hello, Welcome to the first page</h1>
        <FirstComponent/>
        <UserComponent firstName='Chris' lastName='Sparrow' dob={new Date()} email='chris.sparrow@sparrow-family.info' phone='(317) 506-6063' id={uuidv4()}/>
	</div>,
	document.getElementById("root")
);
