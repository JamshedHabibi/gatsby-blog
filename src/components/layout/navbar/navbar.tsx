import React from "react"
import { NavTabLayout } from "./nav-tabs-layout"
import DesktopNav from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

type NavbarProps = {
  siteTitle?: string
}

const Navbar = ({}: NavbarProps) => {
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
