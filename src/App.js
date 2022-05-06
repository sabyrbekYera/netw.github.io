import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/AllContent/SideBar";
// import store from "./Redux/store"; 
import Footer from "./Footer";
import BothFunckClass from "./components/BothFunckClass";
function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="hi">
        {/* ПРочитай обязательно про bind(),еще про setState */}
        <SideBar Fullbaza={props.Fullbaza} dispatch = {props.dispatch} />
      </div>
      <div>
        <BothFunckClass/>
      </div>
    </div>
  );
}
export default App;

