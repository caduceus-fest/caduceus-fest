import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jury from '../chunks/jury'
import Documents from "../chunks/documents";
import Contacts from "../chunks/contacts";

const organizes = ['alias', 'globus', 'medical', 'publius', 'ub-lawyers'];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="md-grid md-grid--no-spacing">
      <div className="md-cell md-cell--6 nospace">
        <img src="img/header.jpg" alt="" />
      </div>
      <div className="md-cell md-cell--6 hero-unit">
        <h1 className="md-text-right">Caduceus International Festival</h1>
        <h2 className="md-text-right">Music</h2>
        <h2 className="md-text-right">Dance</h2>
        <h2 className="md-text-right">Fashion</h2>
      </div>
    </div>
    <div className="md-grid hero-unit">
      <div className="md-cell md-cell--4">
        <h3>Organizes</h3>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        { organizes.map( org =>
          <img key={org} src={`orgs/${org}.jpg`} style={{maxWidth: '50%', maxHeight: '4em'}} alt="" />
          ) }
      </div>
      <div className="md-cell md-cell--4">
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
      <div className="md-cell md-cell--4">
        <h3>Fest Schedule</h3>
        <ul>
          <li>10<sup>th</sup> August - Arrival</li>
          <li className="color-1">10<sup>th</sup> August - Arrival</li>
          <li className="color-2">10<sup>th</sup> August - Arrival</li>
          <li className="color-3">10<sup>th</sup> August - Arrival</li>
          <li className="color-4">10<sup>th</sup> August - Arrival</li>
          <li className="color-5">10<sup>th</sup> August - Arrival</li>
          <li className="bg-color-1">10<sup>th</sup> August - Arrival</li>
          <li className="bg-color-2">10<sup>th</sup> August - Arrival</li>
          <li className="bg-color-3">10<sup>th</sup> August - Arrival</li>
          <li className="bg-color-4">10<sup>th</sup> August - Arrival</li>
          <li className="bg-color-5">10<sup>th</sup> August - Arrival</li>
        </ul>
      </div>
    </div>
    <Jury/>
    <Documents/>
    <Contacts/>
  </Layout>
);

export default IndexPage
