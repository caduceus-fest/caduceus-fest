import React from "react"
import {Button, Chip, FontIcon} from "react-md";


const Contacts = () => (
  <div className="md-grid">
    <h3 className='md-cell md-cell--12'>Contact Us</h3>
    <h4 className='md-cell md-cell--12'>Olga Nadoieva</h4>

    <div className='md-cell md-cell--2 md-cell--middle buttons__group'>
      <div className='md-cell--middle'>
        <Button icon>phone</Button>
        <FontIcon>phone</FontIcon>
        <strong>+80967904265</strong>
      </div>
      <p>
        <Button floating>phone</Button>
        <span>+80669575802</span>
      </p>

    </div>
    <div className='md-cell md-cell--2 buttons__group'>
      <p>
        <Button floating>mail</Button>
        <span>Olgadruon2017@ukr.net</span>
      </p>
      <p>
        <Button floating>mail_outline</Button>
        <span>Internationalfestcaduceus@ukr.net</span>
      </p>
    </div>
  </div>
);

export default Contacts
