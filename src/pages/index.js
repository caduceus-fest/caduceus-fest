import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="md-grid">
      <div class="md-cell--12">
        <h1>International Fest Caduceus</h1>
      </div>
      <div class="md-cell--4">
        <h3>Organizes</h3> 
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
      <div class="md-cell--4">
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
      <div class="md-cell--4">
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
