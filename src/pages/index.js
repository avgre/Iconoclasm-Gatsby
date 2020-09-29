import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import PhoneSlide from "../components/phoneslide"

import About from "../components/about"
import Instructions from "../components/instructions"
import Contact from "../components/contact"
import OurStory from "../components/ourstory"

export default function Home() {
  return (
    <Layout>
      <About />
      <PhoneSlide />
      <Instructions />
      <OurStory />
      <Contact />
    </Layout>
  )
}
