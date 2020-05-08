import React from "react"
import { SidePanelTitle } from "./side-panel-title"
import { flex } from "../../../styling/constants"

export const AboutSummary: React.FC<any> = ({}) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "80%",
    }}
  >
    <div css={[flex.rowCentered, { paddingBottom: "1rem" }]}>
      <SidePanelTitle title="About Me" />
    </div>

    <div css={[flex.rowCentered]}>
      <img
        src="https://static.wixstatic.com/media/952696_672901d8ab7a4a9d963a002a372b8a52~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_989,h_658,al_c,q_85,usm_0.66_1.00_0.01/IMG_2152.webp"
        alt=""
        css={{ height: "10rem", width: "100%", objectFit: "cover" }}
      />
    </div>
    <div css={[flex.rowCentered]}>
      <p css={{ textAlign: "center", fontSize: "0.8rem" }}>
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed avelementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris".slice(
          0,
          150
        ) + "..."}
      </p>
    </div>
  </div>
)
