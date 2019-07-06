import React from "react"
import {StaticQuery} from "gatsby";
import {Card, Media} from "react-md";


const Participants = () => (
  <StaticQuery
    query={graphql`
      query ParticipantsQuery {
        allFile(filter:{
          relativeDirectory: {
            eq: "participants"
          }
        }) {
          edges {
            node {
              id
              name
              publicURL
              relativePath
              prettySize
              extension
              birthTime(fromNow: true)
            }
          }
        }
      }
    `}
    render={data => (
      <div className="md-grid hero-secondary">
        <h3 className='md-cell md-cell--12'>Participants</h3>
        { data.allFile.edges.map( ({ node }) =>
          <div className="md-cell md-cell--4 jury-member">
            <Card>
              <Media>
                <img src={node.publicURL} alt="" />
              </Media>
            </Card>
          </div>
        )}
      </div>
    )}
  />
);


export default Participants
