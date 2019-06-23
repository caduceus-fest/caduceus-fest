import React from "react"
import {Avatar, Chip, FontIcon} from "react-md";


const Contacts = () => (
  <div className="md-grid hero-secondary">
    <h3 className='md-cell md-cell--12'>Contact Us</h3>
    <h4 className='md-cell md-cell--12'>Olga Nadoieva</h4>

    <div className='md-cell md-cell--2 md-cell--middle buttons__group'>
      <a href="tel:+80967904265" className='no-decoration'>
        <Chip
          className='spaced-vertical'
          label="+80967904265"
          avatar={<Avatar><FontIcon>phone</FontIcon></Avatar>}
        />
      </a>
      <a href="tel:+80669575802" className='no-decoration'>
        <Chip
          className='spaced-vertical'
          label="+80669575802"
          avatar={<Avatar><FontIcon>phone</FontIcon></Avatar>}
        />
      </a>
    </div>
    <div className='md-cell md-cell--2 buttons__group'>
      <a href="mailto:Olgadruon2017@ukr.net" className='no-decoration'>
        <Chip
          className='spaced-vertical'
          label="Olgadruon2017@ukr.net"
          avatar={<Avatar><FontIcon>mail_outline</FontIcon></Avatar>}
        />
      </a>
      <a href="mailto:Internationalfestcaduceus@ukr.net" className='no-decoration'>
        <Chip
          className='spaced-vertical'
          label="Internationalfestcaduceus@ukr.net"
          avatar={<Avatar><FontIcon>mail_outline</FontIcon></Avatar>}
        />
      </a>
    </div>
  </div>
);

export default Contacts
