import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { unregister } from './core'
import { Content, Title, Card } from './components'
import { GlobalStyles, theme } from './styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">Test</Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
