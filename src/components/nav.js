import React, { useState } from "react"
import styled from "@emotion/styled"

const Navigation = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;
  margin: 3vh 0;
  padding: 0 calc((100vw - 1200px) / 2);
  @media (max-width: 1200px) {
    padding: 0 calc((100vw - 768px) / 2);
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

const Nav = () => {
  return (
    <Navigation>
      <h3>iconoclasm</h3>
      <h4>/īˈkänəˌklazəm/</h4>
    </Navigation>
  )
}

export default Nav
