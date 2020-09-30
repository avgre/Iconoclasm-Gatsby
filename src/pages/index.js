import React, { Suspense } from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Instructions from "../components/instructions"
import Contact from "../components/contact"
import OurStory from "../components/ourstory"
import SEO from "../components/seo"
const PhoneSlide = React.lazy(() => import("../components/phoneslide"))

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <About />
        <Suspense fallback={<div />}>
          <PhoneSlide />
        </Suspense>
        <Instructions />
        <OurStory />
        <Contact />
      </Layout>
    </>
  )
}
