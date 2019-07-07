import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Description from '../../components/Description';

const SecondPage = () => (
  <Layout>
  <SEO title="Torca" />
  <div className="CaseStudy">
    <Description
      project="Torca"
      description="Onboard, Hold, Pay"
      image={require('../../images/trc/trc_project_hero.png')}
      myrole="illustrator"
    />
    <div className="CaseStudySection PaleYellowBg">
      <div className="CaseStudyIntroText">
        <p>Torca is an FCA-regulated platform that helps companies buy and sell securities and make payments.
        I worked on a series of illustrations for their website. Working closely with the product designer of Torca.
        </p>
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyGoalsGroup">
        <h2>Project goals</h2>
        <div className="CaseStudyGoals">
          <div className="Goal">
            <h3 className="NavyText">1</h3>
            <p>I was tasked to create some illustrations for the commercial website to help the users better understand the message, vision and mission of the company.</p>
          </div>
          <div className="Goal">
            <h3 className="NavyText">2</h3>
            <p>Illustrations for the landing page, explaining the process that the company follows to help their customers</p>
          </div>
          <div className="Goal">
            <h3 className="NavyText">3</h3>
            <p>Illustrations for the secondary pages like 404, FAQ, Contact, etc...</p>
          </div>

        </div>
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyColoursGroup">
        <div className="CaseStudyColoursTitle">
          <h2>Colours</h2>
          <p>I based my colour choice on the branding colours of the company, expanding the colour palette in different tones.</p>
        </div>
        <img src={require('../../images/trc/Illustration-02.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyOutcomesGroup">
        <div className="CaseStudyOutcomesTitle">
          <h2>Illustrations</h2>
          <p>Landing page</p>
        </div>
        <img src={require('../../images/trc/Illustration-03.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-04.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-05.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyGrid4Group ShadowsImg">
        <img src={require('../../images/trc/Illustration-06.png')} />
        <img src={require('../../images/trc/Illustration-07.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-08.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-09.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyOutcomesGroup">
        <div className="CaseStudyOutcomesTitle">
          <h2>Illustrations</h2>
          <p>Secondary pages</p>
        </div>
        <img src={require('../../images/trc/Illustration-10.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-11.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-12.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyGrid4Group ShadowsImg">
        <img src={require('../../images/trc/Illustration-13.png')} />
        <img src={require('../../images/trc/Illustration-14.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-15.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-16.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup CSIGTorca">
        <img src={require('../../images/trc/Illustration-17.png')} />
      </div>
    </div>
  </div>
  </Layout>
)

export default SecondPage
