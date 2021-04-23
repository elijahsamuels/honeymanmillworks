import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ElevatorInteriors from "./components/ElevatorInteriors";
import Gallery from "./components/Gallery";
import Kitchens from "./components/Kitchens";
import Nav from "./components/Nav";
import Vanities from "./components/Vanities";
import WallUnits from "./components/WallUnits";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <header>
            <Nav />
            </header>
            
            <Home />
            {/* <Kitchens />
            <WallUnits />
            <Vanities />
            <ElevatorInteriors />
            <Gallery />
            <Contact /> */}
            <Footer />

        </div>
    );
}

export default App;
