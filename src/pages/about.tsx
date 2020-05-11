import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { fonts } from "../styling/fonts"

const AboutPage: React.FC<any> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AboutPageContent />
    </Layout>
  )
}

const AboutPageContent: React.FC<any> = () => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}
  >
    <img
      src="https://static.wixstatic.com/media/952696_672901d8ab7a4a9d963a002a372b8a52~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_989,h_658,al_c,q_85,usm_0.66_1.00_0.01/IMG_2152.webp"
      alt=""
      css={{ width: "80%", paddingBottom: "3rem" }}
    />

    <div css={[fonts.mainPageText, { width: "80%", textAlign: "justify" }]}>
      22 year old Londoner with a huge passion for travel, filming, (vegetarian)
      food, and style. I love learning and creating so a blog just seemed right,
      and having just graduated from university with a law degree, I have way
      too much spare time. I've been writing (mostly novels) since I was about
      15 years old and I've always felt that writing comes more naturally to me
      than talking. If you take a look at my YouTube channel, Bambina Katarina,
      you will probably see what I mean. Bambina Katarina started off as a space
      to share my travels in a memorable way. Filming my favourite destinations
      and putting the clips to music made it easy to revisit the memories I made
      with my friends and family, and my boyfriend, Jamshed. I seriously have no
      clue what's going to happen next. The year ahead, which I thought was all
      mapped out, U-turned in a matter of days. But I am a big believer in
      everything happening for a reason. So feel free to follow me and find out.
    </div>
  </div>
)
export default AboutPage
