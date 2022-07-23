import React, { FormEvent, useState } from 'react';
import axios from 'axios';

function App() {

  const [first, setFirst] = useState<number>();
  const [second, setSecond] = useState<number>();

  const [result, setResult] = useState<number>();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    axios.post('http://localhost:4000/add', {
      first: first, second: second
    }).then((res: any) => {
        setResult(res.data);
    }).catch(e => console.log(e))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Input two values and click the button to get sum
        </p>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setFirst(parseInt(e.target.value))}/>
          <br />
          <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setSecond(parseInt(e.target.value))}/>
          <br />
          {
            result &&
            <h3>
              Result : {result}
            </h3>
          }
          <button type="submit">
            Sum
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
