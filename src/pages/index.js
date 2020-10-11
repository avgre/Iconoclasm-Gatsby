import React, { Suspense } from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Instructions from "../components/instructions"
import Contact from "../components/contact"
import OurStory from "../components/ourstory"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const Loader = styled.div`
  min-height: 100vh;
`
const PhoneSlide = React.lazy(() => import("../components/phoneslide"))
export default function Home() {
  const isSSR = typeof window === "undefined"
  return (
    <>
      <SEO title="iOS 14 Homescreen Icons" />
      <Layout>
        <About />
        {!isSSR && (
          <React.Suspense fallback={<Loader />}>
            <PhoneSlide />
            <Instructions />
          </React.Suspense>
        )}
        <OurStory />
        <Contact />
      </Layout>
    </>
  )
}
