import React from "react";
import "./App.css";

const MyContext = React.createContext();

const Coder3 = () => {
  return (
    <MyContext.Consumer>
      {(data) => {
        return (
          <>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
          </>
        );
      }}
    </MyContext.Consumer>
  );
};

const Coder2 = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => {
          return (
            <>
              <h1>{data.age}</h1>
            </>
          );
        }}
      </MyContext.Consumer>
      <Coder3 />
    </div>
  );
};

const Coder = () => {
  return <Coder2 />;
};

function App() {
  return (
    <MyContext.Provider value={{ name: "vishal", age: 23 }}>
      <div className="App">
        <h2>Context Api</h2>
        <Coder />
      </div>
    </MyContext.Provider>
  );
}

export default App;
