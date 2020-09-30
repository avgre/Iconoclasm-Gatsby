import React, { Suspense } from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Instructions from "../components/instructions"
import Contact from "../components/contact"
import OurStory from "../components/ourstory"
import SEO from "../components/seo"

const PhoneSlide = React.lazy(() => import("../components/phoneslide"))
export default function Home() {
  const isSSR = typeof window === "undefined"
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <About />
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <PhoneSlide />
          </React.Suspense>
        )}
        <Instructions />
        <OurStory />
        <Contact />
      </Layout>
    </>
  )
}
