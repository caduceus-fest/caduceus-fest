import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const organizes = ['alias', 'globus', 'medical', 'publius', 'ub-lawyers'];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="md-grid md-grid--no-spacing">
      <div class="md-cell md-cell--6 nospace">
        <img src="img/header.jpg" alt="" />
      </div>
      <div class="md-cell md-cell--6 hero-unit">
        <h1 className="md-text-right">Caduceus International Festival</h1>
        <h2 className="md-text-right">Music</h2>
        <h2 className="md-text-right">Dance</h2>
        <h2 className="md-text-right">Fashion</h2>
      </div>
    </div>
    <div class="md-grid" style={{backgroundColor:'#4dd0e1', color: 'white'}}>
      <div class="md-cell md-cell--12">
        <h1>International Fest Caduceus</h1>
      </div>
      <div class="md-cell md-cell--4">
        <h3>Organizes</h3> 
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        { organizes.map( org => 
          <img src={`orgs/${org}.jpg`} style={{maxWidth: '50%', maxHeight: '4em'}} alt="" />
          ) }
      </div>
      <div class="md-cell md-cell--4">
        <h3>Genres</h3>
        <ul>
          <li>Vocalists</li>
          <li>Bands</li>
          <li>Dances (Modern/Folk)</li>
          <li>Show</li>
          <li>Majorettes</li>
          <li>Fashion</li>
        </ul>
      </div>
      <div class="md-cell md-cell--4">
        <h3>Fest Schedule</h3>
        <ul>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>10<sup>th</sup> August - Arrival</li>
        </ul>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
