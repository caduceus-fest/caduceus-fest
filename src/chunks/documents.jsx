import React from "react"
import {FontIcon} from "react-md";

const documents = [
  'doc-123-456.docx',
  'doc-123-456.docx',
  'doc-123-456.docx',
];

const Documents = () => (
  <div className="md-grid">
    <h3 className='md-cell md-cell--12'>Documents</h3>
    { documents.map( document =>
      <a className='document md-text-center md-cell md-cell--2' href="">
        <FontIcon>archive</FontIcon>
        <br/>
        <span>{document}</span>
      </a>
    )}
  </div>
);

export default Documents
