import React from 'react';
import BarMessage from './BarMessage.jsx'

const BarPage = (props) => (
	<div>
	<div>
      	<h3>Bar Page</h3>
    </div>
    <div>
       <h4>{props.bar.name}</h4>
        <p>{props.bar.vicinity}</p>
    </div>
    <div>
    	<p>Message of the Day:</p>
    	<BarMessage />
    </div>
    </div>
)

export default BarPage;
