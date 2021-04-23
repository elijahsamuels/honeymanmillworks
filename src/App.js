import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "./components/Contact";
import ElevatorInteriors from "./components/ElevatorInteriors";
import Gallery from "./components/Gallery";
import Kitchens from "./components/Kitchens";
import Vanities from "./components/Vanities";
import WallUnits from "./components/WallUnits";
import About from "./components/About";
import Error from "./components/Error";

function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <Nav />
                </header>

                <Home />
                <Switch>
                        <Route exact path="/" component={Kitchens} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/wallunits" component={WallUnits} />
                        <Route exact path="/elevatorinteriors" component={ElevatorInteriors} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>

                {/* < />
            < />
            < />
            < />
            < />
            < /> */}
                <Footer />
            </Router>
        </div>
    );
}

export default App;
