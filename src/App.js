import React, { Component } from "react";
import "./App.css";
import Chats from "./components/chats";
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
const likesReducer = function (state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
let store = createStore(likesReducer);

const mapStateToProps = state => {
  return {
    likes: state
  };
};
const PollingComponent = ({ likes }) => <Chats likes={likes} />

const Container = connect(mapStateToProps)(PollingComponent);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main className="container">
          <Container />
        </main>
      </Provider>
    );
  }
}

export default App;
