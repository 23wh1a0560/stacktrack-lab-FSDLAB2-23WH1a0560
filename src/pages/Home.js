import React from 'react';

// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = 'STUDENT_ID_PLACEHOLDER';
const LAB_ID = 'LAB_ID_PLACEHOLDER';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: 23WH1A0560</p>
      <p>Lab ID: FSDLAB2</p>

      {/* TODO: Replace this placeholder with your question set UI */}
      <button onClick={() => Navigate('/question')}>Go to Question Page</button>

    </div>
  );
}

export default Home;
