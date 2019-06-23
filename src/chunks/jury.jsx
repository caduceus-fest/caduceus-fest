import React from "react"
import JuryMember from "./jury-member";
import {StaticQuery} from "gatsby";

const style = {
  fontFamily: 'Roboto',
};

const Jury = () => (
  <StaticQuery
    query={graphql`
      query JuryMarkdownQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              html
              excerpt(format: HTML)
              frontmatter {
                name
                type
                dir
                lang
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="md-grid hero-secondary" style={ style }>
        <h3 className='md-cell md-cell--12'>Jury</h3>
        { data.allMarkdownRemark.edges.map( ({ node }) =>
          <JuryMember key={node.id} member={node} />
        )}
      </div>
    )}
  />
);



// const Jury = () => (
//     <div className="md-grid hero-secondary" style={ style }>
//       <h3 className='md-cell md-cell--12'>Jury</h3>
//       { juryMembers.map( member =>
//         <JuryMember key={member.name} member={member}></JuryMember>
//       )}
//     </div>
// );
//
// const Jury = () => (
//     <div className="md-grid hero-secondary" style={ style }>
//       <h3 className='md-cell md-cell--12'>Jury</h3>
//       { juryMembers.map( member =>
//         <JuryMember key={member.name} member={member}></JuryMember>
//       )}
//     </div>
// );

export default Jury
