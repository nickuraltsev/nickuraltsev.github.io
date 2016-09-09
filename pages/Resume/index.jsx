import React from 'react';
import content from '../../resume/main.md';

const ResumePage = () =>
  <div>
    <div className="header">
      <div className="container">
        <h1>Résumé</h1>
      </div>
    </div>

    <div className="container">
      <div className="download-resume">
        <a
          href="Nick_Uraltsev.pdf">
          Download as PDF
        </a>
      </div>
      <div dangerouslySetInnerHTML={{__html: content.body}} />
    </div>
  </div>;

export default ResumePage;
