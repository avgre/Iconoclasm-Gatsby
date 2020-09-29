import React from "react"
import Layout from "../components/layout"
import PhoneSlide from "../components/phoneslide"
import About from "../components/about"
import Instructions from "../components/instructions"
import Contact from "../components/contact"
import OurStory from "../components/ourstory"
import SEO from "../components/seo"

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <About />
        <PhoneSlide />
        <Instructions />
        <OurStory />
        <Contact />
      </Layout>
    </>
  )
}
