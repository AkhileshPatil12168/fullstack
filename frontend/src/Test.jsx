import Component2 from "./Component2";

function Test({ children , a}) {
  return (
    <div>
      <p>test component</p>
      {a}
      {children}
      <Component2 />
    </div>
  );
}

export default Test;
