import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Stack } from "react-bootstrap";

const Core = () =>
{
    return (
        <>
            <Navbar />

            <Stack direction="horizontal">
                <Sidebar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<p className="bg-danger" style={{height:'2000px'}}>Hello World</p>} />
                    </Routes>
                </BrowserRouter>
            </Stack>
        </>
    );
}

export default Core;