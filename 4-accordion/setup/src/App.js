import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  console.log(questions)
  return <main>
    <div className="container">
      <h3>qustions and answers about logic</h3>
      <section className="info">
        {
          questions.map(question => {
            return <SingleQuestion key={question.id} {...question}></SingleQuestion>
          })
        }

      </section>
    </div>

  </main>;
}

export default App;
