import React from "react"
import {FontIcon} from "react-md";

const documents = [
  'doc-123-2456.docx',
  'doc-123-3456.docx',
  'doc-123-4456.docx',
];

const Documents = ( data ) => (
  <div className="md-grid">
    { console.log('data', data)}
    <h3 className='md-cell md-cell--12'>Documents</h3>
    { documents.map( document =>
      <a key={document} className='document md-text-center md-cell md-cell--2' href="">
        <FontIcon>archive</FontIcon>
        <br/>
        <span>{document}</span>
      </a>
    )}
  </div>
);

export default Documents

// Don't work with components, use StaticQuery
// export const query = graphql`
//   query {
//     allFile {
//       edges {
//         node {
//           id
//           relativePath
//           prettySize
//           extension
//           birthTime(fromNow: true)
//         }
//       }
//     }
//   }
// `;
