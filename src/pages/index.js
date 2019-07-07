import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className="Hero">
      <div className="HeroGroup">
        <h2>
          Hello! <br /> My name is Marta and I'm an illustrator and graphic designer based in London.</h2>
          <a href="mailto:hola@martamuniz.com">Get in touch</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
