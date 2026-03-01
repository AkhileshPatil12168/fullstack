import { useState } from "react";
import Button from "./Button";
import Test from "./Test";

function App() {
  let a = 10;
  let [b, setB] = useState(20);
  console.log(a);
  return (
    <div>
      <h1 className="text-4xl font-bold bg-gray-500">hello react...</h1>
      <Test />
      <p>{a}</p>
      <button
        onClick={() => {
          a = a + 1;
          console.log(a);
        }}
        className="mb-10"
      >
        click me for a
      </button>

      <p>{b}</p>
      <button onClick={() => setB(b + 1)}>click me for b+</button>
      <br/>
      <button onClick={() => setB(b - 1)}>click me for b-</button>

      {/* <Test a={10}>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
          facere dignissimos aliquam mollitia aspernatur ea incidunt!
          Consequuntur, fugiat officia. Magnam soluta praesentium aperiam vero
          fuga molestiae veritatis similique voluptate ipsa?
        </p>
      </Test> */}
    </div>
  );
}

export default App;
