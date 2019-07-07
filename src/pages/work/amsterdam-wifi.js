import React from 'react'
import Description from '../../components/Description';
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
  <SEO title="Amsterdam Wifi" />
  <div className="CaseStudy">
    <Description
      project="Amsterdam Wifi"
      description="Onboarding process"
      image={require('../../images/ams/ams_project_hero.png')}
      myrole="ILLUSTRATOR AND VISUAL DESIGNER"
    />
    <div className="CaseStudySection">
      <div className="CaseStudyGoalsGroup">
        <h2>Project goals</h2>
        <div className="CaseStudyGoals">
          <div className="Goal">
            <h3 className="PalePinkText">1</h3>
            <p>Design and illustrate the onboarding process to guide the user during the search process</p>
          </div>
          <div className="Goal">
            <h3 className="PalePinkText">2</h3>
            <p>Adapt this process to a more modern design with a better cultural fit</p>
          </div>
        </div>
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyColoursGroup">
        <div className="CaseStudyColoursTitle">
          <h2>Colours</h2>
          <p>In order to create a better harmony, I based my colour choice on the Netherlands flag colours.</p>
        </div>
        <img src={require('../../images/ams/ams_colours.png')} />
      </div>
    </div>
    <div className="CaseStudySection PaleBlueBg">
      <div className="CaseStudyOutcomesGroup">
        <div className="CaseStudyOutcomesTitle">
          <h2>Outcomes</h2>
          <p>
          Three interfaces that guide the user through the onboarding process prior to the open wifi networks search process.
          </p>
        </div>
        <img src={require('../../images/ams/ams_outcomes.png')} />
      </div>
    </div>
    <div className="CaseStudySection PaleGreyBg PhonesBlockAdjust">
      <div className="CaseStudyImageGroup PhonesAms50">
        <img src={require('../../images/ams/Phone-1.png')} />
      </div>
    </div>
    <div className="CaseStudySection PinkBg PhonesBlockAdjust">
      <div className="CaseStudyImageGroup PhonesAms50">
        <img src={require('../../images/ams/Phone-2.png')} />
      </div>
    </div>
    <div className="CaseStudySection PaleGreyBg PhonesBlockAdjust">
      <div className="CaseStudyImageGroup PhonesAms50">
        <img src={require('../../images/ams/Phone-3.png')} />
      </div>
    </div>
    <div className="CaseStudySection PaleBlueBg PhonesBlockAdjust">
      <div className="CaseStudyImageGroup PhonesAms100">
        <img src={require('../../images/ams/Phone-all.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudySketchGroup">
        <div className="CaseStudySketchTitle">
          <h2>Sketching</h2>
          <p>To make the illustrations more iconic and recognisable I was heavily inspired by the architecture and of course the bikes
          Also to better involve the user, the human presence was really important as well.
          </p>
        </div>
        <img src={require('../../images/ams/ams-sketch.png')} />
      </div>
    </div>
  </div>
  </Layout>
)

export default SecondPage
