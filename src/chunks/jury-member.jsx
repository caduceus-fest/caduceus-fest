import React from "react";
import {Card, CardText, CardTitle, Media, MediaOverlay} from "react-md";

const JuryMember = (data) => (
  <div className="md-cell md-cell--4 jury-member">
    <Card>
      {/*<CardTitle*/}
        {/*title={ data.member.name }*/}
        {/*subtitle=""*/}
      {/*/>*/}
      <Media>
        <img src={`/jury/${data.member.dir}/overlay.jpg`} alt="Nature from lorempixel" />
        <MediaOverlay>
          <CardTitle title={ data.member.name } subtitle="Jury Member" />
        </MediaOverlay>
      </Media>

      <CardText>
        { data.member.about }
      </CardText>
        {/*<h4>{ data.member.name }</h4>*/}
        {/*<span>{ data.member.about }</span>*/}
        {/*<img src={`jury/${data.member.photos[0]}.jpg`} alt="" />*/}
    </Card>
  </div>
);

export default JuryMember
