import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

import favicon from '../images/favicon.png'

const Container = styled.div`
  margin: 2em auto;
  max-width: 35em;
`

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Christian Valera Personal Website. Full-Stack Developer, iOS Developer.',
            },
            {
              name: 'keywords',
              content:
                'Full Stack Developer, Software Developer, iOS Developer, Salmon',
            },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@salmonlover11' },
            { name: 'twitter:description', content: 'Software Developer' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>{children}</Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
