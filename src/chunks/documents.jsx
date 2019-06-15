import React from "react"
import {FontIcon} from "react-md";
import {StaticQuery} from "gatsby";

const Documents = () => (
  <StaticQuery
    query={graphql`
      query DocumentsFilesQuery {
        allFile(filter:{
          relativeDirectory: {
            eq: "documents"
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
      <div className="md-grid">
        <h3 className='md-cell md-cell--12'>Documents</h3>
        { data.allFile.edges.map( ({node}) =>
          <a key={node.id} className='document md-text-center md-cell md-cell--2' href={node.publicURL}>
            <FontIcon>archive</FontIcon>
            <br/>
            <span>{node.name}</span>
          </a>
        )}
      </div>
    )}
  />
);

export default Documents

