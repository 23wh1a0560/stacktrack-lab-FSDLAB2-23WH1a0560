import React from 'react';
import QuestionComponent from '../components/question/QuestionComponent';

function QuestionPage() {
  return (
    <div>
      <div style = {{padding: "20px", fontFamily: "Arial"}}>
        <h1 style={{marginBottom: "20px"}}>Question Page</h1>
        <div style={{border: "1px solid #ccc", borderRadius: "5px", padding: "20px"}}>
          <QuestionComponent />
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
