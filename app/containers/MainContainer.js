var React = require('react');
require('../stylesheets/main.less');

var MainContainer = React.createClass({
    render: function() {
        return (
        	<div className='main'>
	            <h2> This is your MainContainer. It is set as your parent route. It will always be active. </h2>
	            {this.props.children}
            </div>
        )
    }
});

module.exports = MainContainer;