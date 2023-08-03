import React from 'react';
import './example.sass';
import dayjs from 'dayjs';

// Relative to this file
// import Hello from '../../../lib/myReactComponents/Hello';

// Absolute, but resolved relative to src/main/resources
import Hello from '/lib/myReactComponents/Hello';


function Example() {
	return <div>
		<Hello/>
		{dayjs().format()}
		<div>Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0</div>
	</div>;
}

export default Example;
