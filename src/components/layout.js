import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header></Header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by Me, Nate G.
      </footer>
    </div>
  )
}

export default Layout
