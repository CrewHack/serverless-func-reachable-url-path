import App, { Container } from 'next/app'
import React from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  id: 'GTM-GTM-WNXSTVT'
}

class MyApp extends App {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        Hi
      </Container>
    )
  }
}

export default MyApp