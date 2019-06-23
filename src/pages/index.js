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
        <h3 className="color-1">Organizes</h3>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        { organizes.map( org =>
          <img key={org} src={`orgs/${org}.jpg`} style={{maxWidth: '50%', maxHeight: '4em', marginRight: '7px'}} alt="" />
          ) }
      </div>
      <div className="md-cell md-cell--4">
        <h3 className="color-1">Genres</h3>
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
        <h3 className="color-1">Fest Schedule</h3>
        <ul>
          <li>10<sup>th</sup> August - Arrival</li>
          <li>11<sup>th</sup> August - Excursions to the main city's tourist attractions with a guide</li>
          <li>12<sup>th</sup> August - Majorette and dance performance</li>
          <li>13<sup>th</sup> August - Band and dance (folk) performances</li>
          <li>14<sup>th</sup> August - Show, fashion and vocal performances</li>
          <li>15<sup>th</sup> August - The ceremony of prizes and diplomas awarding. Gala concert</li>
          <li>16<sup>th</sup> August - Departure</li>
        </ul>
      </div>
    </div>
    <Jury/>
    <Documents/>
    <Contacts/>
  </Layout>
);

export default IndexPage
