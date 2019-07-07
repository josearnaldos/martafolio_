import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project';
import Layout from "../components/layout"
import SEO from "../components/seo"


const Work = () => (
  <Layout>
  <SEO title="Works" />
    <div className="Works">
        {/* <h2>Works</h2> */}
      <div className="WorksGroup">
        <Link to='/work/torca'>
            <Project 
                title="Torca"
                image={require('../images/trc_project_preview.png')}
            />
        </Link>
        <Link to='/work/amsterdam-wifi'>
            <Project 
                title="Amsterdam wifi"
                image={require('../images/ams_project_preview.png')}
            />
        </Link>
        <Link to='/work/murcia-sin-tabus'>
            <Project 
                title="Murcia sin tabus"
                image={require('../images/mst_project_preview.png')}
            />
        </Link>
      </div>
    </div>
  </Layout>
)

export default Work
