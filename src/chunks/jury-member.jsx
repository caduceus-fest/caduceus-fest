import React from "react";
import {Card, CardText, CardTitle, Media, MediaOverlay} from "react-md";

const JuryMember = (data) => (
  <div className="md-cell md-cell--4 jury-member">
    <Card>
      <Media>
        <img src={`/jury/${data.member.frontmatter.dir}/overlay.jpg`} alt="Nature from lorempixel" />
        <MediaOverlay>
          <CardTitle title={ data.member.frontmatter.name } subtitle="Jury Member" />
        </MediaOverlay>
      </Media>

      <CardText dangerouslySetInnerHTML={{ __html: data.member.html }}>
      </CardText>
    </Card>
  </div>
);

export default JuryMember
