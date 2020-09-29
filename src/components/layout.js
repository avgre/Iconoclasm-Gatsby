import React from "react"
import { Global, css } from "@emotion/core"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Nav from "../components/nav"

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
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            font-family: "Roboto Mono", monospace;
          }
          html,
          span {
            line-height: 1.8;
            @media (max-width: 768px) {
              line-height: 2;
            }
          }
          body {
            padding: 0px;

            @media (max-width: 768px) {
              font-size: 16px;
            }
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Roboto Mono", monospace;
          }
          + * {
            margin-top: 0.5rem;
          }
        `}
      />
      <Helmet title={data.site.siteMetadata.title}>
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>

      <main
        css={css`
          margin: 0;
          width: 100vw;
          min-width: 100vw;
        `}
      >
        <Nav />
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
