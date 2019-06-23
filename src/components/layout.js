/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => (
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
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          <main>{children}</main>
          <footer className='hero-unit compact'>
            © {new Date().getFullYear()}, Built for Caduceus
            <span style={{ float: 'right' }}>
              by <a href="https://github.com/lifecoderua" target='_blank' rel="noopener noreferrer">
                Oleksii Volkov
              </a>
            </span>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
