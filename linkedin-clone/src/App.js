import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import { useEffect } from "react"
import { getUserAuth } from './actions/index';
import { connect } from 'react-redux'


function App(props) {
  // useEffect(() => {
  //   props.getUserAuth();
  // }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Header/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProp = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default App;
