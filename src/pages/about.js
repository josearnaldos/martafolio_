import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
  <Layout>
  <SEO title="Works" />
    <div className="About">
      <div className="AboutGroups">
          <img src={require('../images/avatar.png')} width="219" />
          <p>
            Hello!<br />
            My name is Marta, I’m an illustrator and visual designer, based in London.
            <br /><br />
            My work is mostly focused on digital illustration for webs, apps, and advertising.
            <br /><br />
            In my free time, I work in my project <a target="_blank" href="http://www.folkvibes.com">Folk Vibes</a> and also I like to enjoy nature, walking in the woods and looking for some dogs to pet.
            <br /><br />
            Let’s talk <a href="mailto:hola@martamuniz.com">hola@martamuniz.com</a>
          </p>
      </div>
    </div>
  </Layout>
)

export default About
