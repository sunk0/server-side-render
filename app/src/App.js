import "./App.css";
import Navbar from "./components/navbar/navbar";
import StartPage from "./components/startup/startup";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./components/card/card";

function App(props) {
  const { getChosenModel } = props;
  const renderBody = () => {
    if (!props) {
      return <StartPage />;
    }

    const renderContent = getChosenModel ? (
      <Card chosenModel={getChosenModel} />
    ) : (
      <StartPage />
    );
    return renderContent;
  };
  useEffect(() => {
    renderBody();
  }, [getChosenModel]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <body>{renderBody()}</body>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const { chosenModel } = state.model;
  return { getChosenModel: chosenModel };
};

export default connect(mapStateToProps)(App);
