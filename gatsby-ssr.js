/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

 const React = require("react")

const HeadComponents = [
  <link rel ="preload" href="/fonts/caveat-v17-latin-regular.ttf" as="font" type="font/ttf" crossOrigin="annonymous" key="caveatFont" />,
  <link rel ="preload" href="/fonts/caveat-v17-latin-regular.woff" as="font" type="font/woff" crossOrigin="annonymous" key="caveatFont" />,
  <link rel ="preload" href="/fonts/caveat-v17-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="annonymous" key="caveatFont" />,
  <link rel ="preload" href="/fonts/jost-v14-latin-regular.ttf" as="font" type="font/ttf" crossOrigin="annonymous" key="jostFont" />,
  <link rel ="preload" href="/fonts/jost-v14-latin-regular.woff" as="font" type="font/woff" crossOrigin="annonymous" key="jostFont" />,
  <link rel ="preload" href="/fonts/jost-v14-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="annonymous" key="jostFont" />,
  <link rel ="preload" href="/fonts/montserrat-v25-latin-900.ttf" as="font" type="font/ttf" crossOrigin="annonymous" key="montserratFont" />,
  <link rel ="preload" href="/fonts/montserrat-v25-latin-900.woff" as="font" type="font/woff" crossOrigin="annonymous" key="montserratFont" />,
  <link rel ="preload" href="/fonts/montserrat-v25-latin-900.woff2" as="font" type="font/woff2" crossOrigin="annonymous" key="montserratFont" />,
  <link rel ="preload" href="/fonts/palanquin-v13-latin-regular.ttf" as="font" type="font/ttf" crossOrigin="annonymous" key="palanquinFont" />,
  <link rel ="preload" href="/fonts/palanquin-v13-latin-regular.woff" as="font" type="font/woff" crossOrigin="annonymous" key="palanquinFont" />,
  <link rel ="preload" href="/fonts/palanquin-v13-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="annonymous" key="palanquinFont" />,
  <link rel ="preload" href="/fonts/icomoon.eot" as="font" type="font/eot" crossOrigin="annonymous" key="icomoonFont" />,
  <link rel ="preload" href="/fonts/icomoon.woff" as="font" type="font/woff" crossOrigin="annonymous" key="icomoonFont" />,
  <link rel ="preload" href="/fonts/icomoon.svg" as="font" type="font/svg" crossOrigin="annonymous" key="icomoonFont" />,
  <link rel ="preload" href="/fonts/icomoon.ttf" as="font" type="font/ttf" crossOrigin="annonymous" key="icomoonFont" />,
  

]


exports.onRenderBody = ({ 
  setHeadComponents,
  setHtmlAttributes
}) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents(HeadComponents)
}
