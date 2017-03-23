import React from 'react';

const BarPage = (props) => (
	<div>
	<div>
      	<h3>Bar Page</h3>
    </div>
    <div>
       <h4>{props.bar.name}</h4>
        <p>{props.bar.vicinity}</p>
    </div>
    </div>
)

export default BarPage;
