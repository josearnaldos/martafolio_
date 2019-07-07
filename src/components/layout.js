/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import favicon16 from "../images/favicon/favicon16.png";
import favicon32 from "../images/favicon/favicon32.png";
import favicon64 from "../images/favicon/favicon64.png";

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: ' Marta Muniz - Illustrator and graphic designer' },
        { name: 'keywords', content: 'illustrator, graphic designer' },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
    ]}
    />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
