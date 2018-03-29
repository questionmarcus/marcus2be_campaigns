import React from  'react'
import ReactDOM from 'react-dom'
import './index.css'

var Campaigns = require('./containers/Campaigns.js')

ReactDOM.render(<Campaigns perPage={8} />, document.getElementById('app'))
