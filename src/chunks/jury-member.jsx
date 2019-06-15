import React from "react";

const JuryMember = (data) => (
  <div className="md-cell md-cell--4 jury-member">
        <h4>{ data.member.name }</h4>
        <span>{ data.member.about }</span>
        <img src={`jury/${data.member.photos[0]}.jpg`} alt="" />
  </div>
);

export default JuryMember
