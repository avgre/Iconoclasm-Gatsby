import React, { Component } from "react"
import Slider from "react-slick"
import IconsPastel from "../components/iconsPastel"
import Phone1 from "../components/phone1"
import Phone2 from "../components/phone2"
import Phone3 from "../components/phone3"
import Phone4 from "../components/phone4"
import Phone5 from "../components/phone5"
import Phone6 from "../components/phone6"
import Phone7 from "../components/phone7"
import Phone8 from "../components/phone8"
import Phone9 from "../components/phone9"
import styled from "@emotion/styled"
import ArrowLeft from "../images/handleft.svg"
import ArrowRight from "../images/handright.svg"
const IconsDark = React.lazy(() => import("../components/iconsDark"))
const IconsLight = React.lazy(() => import("../components/iconsLight"))
const IconsDarkPop = React.lazy(() => import("../components/iconsDarkPop"))
const IconsLightPop = React.lazy(() => import("../components/iconsLightPop"))
const IconsSilver = React.lazy(() => import("../components/iconsSilver"))
const IconsGold = React.lazy(() => import("../components/iconsGold"))
const IconsRainbow = React.lazy(() => import("../components/iconsRainbow"))
const IconsRed = React.lazy(() => import("../components/iconsRed"))

export default class LazyLoad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      slideIndex: 0,
      updateCount: 0,
    }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings1 = {
      className: "center",
      infinite: true,
      slidesToShow: 1,
      lazyLoad: true,
      swipeToSlide: true,
      arrows: false,
      afterChange: () =>
        this.setState(state => ({ updateCount: this.state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    }
    let slideIndex = this.state.slideIndex
    console.log(slideIndex)
    const renderPhone = () => {
      if (slideIndex === 0) {
        return <Phone9 />
      } else if (slideIndex === 1) {
        return <Phone1 />
      } else if (slideIndex === 2) {
        return <Phone2 />
      } else if (slideIndex === 3) {
        return <Phone7 />
      } else if (slideIndex === 4) {
        return <Phone8 />
      } else if (slideIndex === 5) {
        return <Phone6 />
      } else if (slideIndex === 6) {
        return <Phone5 />
      } else if (slideIndex === 6) {
        return <Phone4 />
      } else {
        return <Phone3 />
      }
    }
    console.log(this.state.slideIndex)
    const settings2 = {
      className: "center",
      lazyLoad: true,
      infinite: true,
      slidesToShow: 1,
      swipeToSlide: true,
      arrows: false,
      fade: true,
    }
    const isSSR = typeof window === "undefined"
    return (
      <FlexContainer>
        <FlexBlock1>
          <ArrowDiv>
            <HandLeft onClick={this.previous} />
            <Text>SWIPE</Text>
            <HandRight onClick={this.next} />
          </ArrowDiv>
          {renderPhone()}
          <Overlay>
            <Container>
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                ref={c => (this.slider = c)}
                {...settings1}
              >
                <Slide>
                  <IconGrid>
                    <IconsPastel />
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsDarkPop />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsLightPop />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsRainbow />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsRed />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsSilver />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsGold />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsDark />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <IconsLight />
                      </React.Suspense>
                    )}
                  </IconGrid>
                </Slide>
              </Slider>
            </Container>
          </Overlay>
        </FlexBlock1>
        <FlexBlock2>
          <Selection>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={1}
              swipeToSlide={true}
              {...settings2}
            >
              <Slide2>
                <Title>Pastel Party</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  Pass those Pastels.
                  <br />A toned down multicolour icon set.
                </Text>
                <FlexModule>
                  <Price>$5</Price>
                  <Buy href="https://gum.co/wBAGB">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>A Touch of Color - Dark</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  Research has shown that color in iconography boosts
                  association and recognizability. Just sayin’.
                </Text>
                <FlexModule>
                  <Price>$10</Price>
                  <Buy href="https://gum.co/WGTnH">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>A Touch of Color - Light</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  Research has shown that color in iconography boosts
                  association and recognizability. Just sayin’.
                </Text>
                <FlexModule>
                  <Price>$10</Price>
                  <Buy href="https://gum.co/WGTnH">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>Hues from the 6ix</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  Like opening a box of fresh crayons.
                  <br />A multicolour icon set with white alt icons.
                </Text>
                <FlexModule>
                  <Price>$5</Price>
                  <Buy href="https://gum.co/aiUqF">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>Hues from the 6ix</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  Like opening a box of fresh crayons.
                  <br />A multicolour icon set with white alt icons.
                </Text>
                <FlexModule>
                  <Price>$5</Price>
                  <Buy href="https://gum.co/aiUqF">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>A Bit Boujee - Silver</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  Worth it's weight in gold/silver/black/white.
                  <br />A simple two-tone icon set.
                </Text>
                <FlexModule>
                  <Price>$10</Price>
                  <Buy href="https://gum.co/Sblhc">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>A Bit Boujee - Gold</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  Worth it's weight in gold/silver/black/white.
                  <br />A simple two-tone icon set.
                </Text>
                <FlexModule>
                  <Price>$10</Price>
                  <Buy href="https://gum.co/Sblhc">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>Matter of Minimalism - Noir</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  “Keep only those things that speak to your heart." - Marie
                  Kondō
                  <br />A simple black and white icon set.
                </Text>
                <FlexModule>
                  <Price>$5</Price>
                  <Buy href="https://gum.co/DjTHa">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>Matter of Minimalism - Blanche</Title>
                <Title2>High-res iOS 14 icon set</Title2>
                <Text>
                  “Keep only those things that speak to your heart." - Marie
                  Kondō
                  <br />A simple black and white icon set.
                </Text>
                <FlexModule>
                  <Price>$5</Price>
                  <Buy href="https://gum.co/DjTHa">Take My Money</Buy>
                </FlexModule>
              </Slide2>
            </Slider>
          </Selection>
        </FlexBlock2>
      </FlexContainer>
    )
  }
}
const Text = styled.p`
  font-weight: 200;
  height: auto;
  @media (max-width: 768px) {
    line-height: 24px;
  }
`
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
`
const Title2 = styled.div`
  font-weight: 300;
  font-style: italic;
  font-size: 17px;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  margin-top: 3%;
  padding: 0 calc((100vw - 1200px) / 2);
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`
const HandLeft = styled(ArrowLeft)``
const HandRight = styled(ArrowRight)``
const ArrowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 140%;
  left: -20%;
  top: 30%;
  @media (max-width: 1100px) {
    justify-content: space-around;
    left: 0;
    width: 100%;
    top: -50px;
  }
`
const FlexBlock1 = styled.div`
  position: relative;
  display: block;
  width: 340px;
  margin-top: 50px;
  @media (max-width: 1100px) {
    margin-top: 80px;
  }
`

const Container = styled.div`
  display: block;
  width: 312px;
`
const IconGrid = styled.div`
  width: 312px;
  padding: 0 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat (4, 1fr);
  grid-gap: 10px;
`
const Slide = styled.div`
  width: 312px;
  height: 300px;
`
const Overlay = styled.div`
  position: absolute;
  top: 90px;
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
`
const FlexBlock2 = styled.div`
  position: relative;
  display: block;
  width: 450px;
  align-items: center;
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 350px;
  }
`
const Selection = styled.div`
  position: relative;
  top: 18%;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    top: 0%;
  }
`
const Slide2 = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: auto;
  }
`
const FlexModule = styled.div`
  display: flex;
  padding: 15px 0px;
`
const Buy = styled.a`
  font-size: 18px;
  color: black;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  background: #ffb703;
  border: none;
  border-radius: 15px;
  white-space: nowrap;
  z-index: 4;
  overflow: hidden;
  margin: 5px 15px;
  padding: 5px 15px;
`
const Price = styled.h3`
  font-size: 18;
  text-align: center;
  padding: 5px 15px;
  padding-left: 0;
`
