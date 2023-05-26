import './App.scss';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import React from "react";
import Global from "./components/Global";
import Search from "./components/Search";
import Description from "./components/Description";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route  path={"/"} element={ <Global/> }/>
          <Route path={"/menu"} element={ <Menu/> }/>
           <Route path={"/search"} element={ <Search/>}/>
           <Route path={"/description"} element={ <Description/>}/>
        </Routes>
      </div>
  );
}

export default App;