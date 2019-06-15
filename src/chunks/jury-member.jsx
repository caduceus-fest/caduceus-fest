import React from "react";
import {Card} from "react-md";

const JuryMember = (data) => (
  <div className="md-cell md-cell--4 jury-member">
    <Card>
        <h4>{ data.member.name }</h4>
        <span>{ data.member.about }</span>
        <img src={`jury/${data.member.photos[0]}.jpg`} alt="" />
    </Card>
  </div>
);

export default JuryMember
