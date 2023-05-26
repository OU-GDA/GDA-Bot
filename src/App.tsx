import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from "./pages/Application";

const App = () =>
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Application/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;