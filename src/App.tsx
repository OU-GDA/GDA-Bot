import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from "./pages/Application";
import NavBar from "./components/NavBar";

const App = () =>
{
    return (
        <>
            <NavBar onHamburgerMenu={() => console.log("HAMBURGER!")} />
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Application/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;