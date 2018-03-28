var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')

var Campaigns = require('./components/Campaigns.js')

ReactDOM.render(<Campaigns perPage={8} />, document.getElementById('app'))
