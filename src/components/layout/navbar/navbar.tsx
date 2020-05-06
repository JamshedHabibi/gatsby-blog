import React from "react"
import { NavTabLayout } from "./nav-tabs-layout"
import DesktopNav from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

const Navbar = ({}: any) => {
  return (
    <>
      <DesktopNav>
        <NavTabLayout />
      </DesktopNav>

      <MobileNav>
        <NavTabLayout />
      </MobileNav>
    </>
  )
}

export default Navbar
