import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <div>Hello world</div>
  </Fragment>,
  document.getElementById('root')
)

unregister()
