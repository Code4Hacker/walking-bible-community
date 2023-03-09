import React from "react";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
const App = () => {
    return(
        <div className="app">
            <Navigator/>
            <Home/>
        </div>
    );
}

export default App;