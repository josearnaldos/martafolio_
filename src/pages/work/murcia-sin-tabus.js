import React from 'react'
import Description from '../../components/Description';
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
  <SEO title="Murcia sin tabus" />
  <div className="CaseStudy">
    <Description
      project="Murcia sin tab&uacute;s"
      description="sexual education festival"
      image={require('../../images/mst/mst_project_hero.png')}
      myrole="ART DIRECTOR AND VISUAL DESIGNER"
    />
    <div className="CaseStudySection PalePinkBg">
      <div className="CaseStudyGoalsGroup">
        <h2>Project goals</h2>
        <div className="CaseStudyGoals">
          <div className="Goal">
            <h3 className="WhiteText">1</h3>
            <p>Design the main poster for the event</p>
          </div>
          <div className="Goal">
            <h3 className="WhiteText">2</h3>
            <p>Design social media banners and assets to promote the different activities that take place at the festival</p>
          </div>
          <div className="Goal">
            <h3 className="WhiteText">3</h3>
            <p>Communicate the values of the festival</p>
          </div>
          <div className="Goal">
            <h3 className="WhiteText">4</h3>
            <p>Give visibility to sexual diversity</p>
          </div>
        </div>
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyColoursGroup">
        <div className="CaseStudyColoursTitle">
          <h2>Colours</h2>
          <p>As sex has always been represented with colours like black or red and I wanted to demystify it and show the sexual diversity, 
          I chose a vibrant hue so every aspect could be included and represented.</p>
        </div>
        <img src={require('../../images/mst/mst_colours.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyOutcomesGroup">
        <div className="CaseStudyOutcomesTitle">
          <h2>Outcomes</h2>
          <p>Final posters adapted to be printed and hanged all over the city and also in a digital way for social media share.
          Banners of different activities for social media.
          Festival schedule (digital and printed)
          Official tee shirt.</p>
        </div>
        <img src={require('../../images/mst/mst_poster.png')} />
      </div>
    </div>
    <div className="CaseStudySection YellowBg">
      <div className="CaseStudyImageGroup">
        <img src={require('../../images/mst/mst_mbp.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyGrid4Group">
        <img src={require('../../images/mst/rectangle.png')} />
        <img src={require('../../images/mst/rectangle-1.png')} />
        <img src={require('../../images/mst/rectangle-2.png')} />
        <img src={require('../../images/mst/rectangle-3.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup">
        <img src={require('../../images/mst/mockup-1.png')} />
      </div>
    </div>
    <div className="CaseStudySection PinkBg">
      <div className="CaseStudyGrid4Group">
        <img src={require('../../images/mst/miniposter-1.png')} />
        <img src={require('../../images/mst/miniposter-2.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup">
        <img src={require('../../images/mst/photo-1.png')} />
      </div>
    </div>
    <div className="CaseStudySection YellowBg">
      <div className="CaseStudyGrid4Group">
        <img src={require('../../images/mst/photo-2.png')} />
        <img src={require('../../images/mst/photo-3.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudyImageGroup">
        <img src={require('../../images/mst/photo-4.png')} />
      </div>
    </div>
    <div className="CaseStudySection">
      <div className="CaseStudySketchGroup">
        <div className="CaseStudySketchTitle">
          <h2>Sketching</h2>
          <p>
            Once the content was scoped for the posters, 
            I started to define the best composition in order to generate impact.
            There were some concepts to represent like sexual diversity, sexual myths and taboos, etc. 
            I chose to represent them in a chaotic way as sex is not ruled by any order or norm.
          </p>
        </div>
        <img src={require('../../images/mst/sketch-1.png')} />
      </div>
    </div>
  </div>
  </Layout>
)

export default SecondPage
