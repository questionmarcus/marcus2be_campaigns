import React from  'react'
import ReactDOM from 'react-dom'
import './index.css'
import Campaigns from './containers/Campaigns.js'

ReactDOM.render(<Campaigns perPage={8} />, document.getElementById('app'))
