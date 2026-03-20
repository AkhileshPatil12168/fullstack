import { useState } from "react";
import Button from "./Button";
import Test from "./Test";
import ApiTest from "./ApiTest";
import PostData from "./PostData";
import Login from "./Login";

function App() {
  let a = 10;
  let [b, setB] = useState(0);
  console.log(a);
  const increseB = () => setB(b + 1);
  const decreseB = () => setB(b - 1);
  return (
    <div className="min-h-screen">
      {/* <Test /> */}

      <Login/>

      <PostData callApi={increseB} />
      <ApiTest b={b} />
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
