import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "./components/Contact";
import ElevatorInteriors from "./components/ElevatorInteriors";
import Gallery from "./components/PhotoGallery";
import Kitchens from "./components/Kitchens";
import Vanities from "./components/Vanities";
import WallUnits from "./components/WallUnits";
import Woods from "./components/Woods";
import About from "./components/About";
import Error from "./components/Error";

function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <Nav />
                </header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route
                        exact
                        path="/elevatorinteriors"
                        component={ElevatorInteriors}
                    />
                    <Route exact path="/kitchens" component={Kitchens} />
                    <Route exact path="/wallunits" component={WallUnits} />
                    <Route exact path="/vanities" component={Vanities} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/woods" component={Woods} />
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
