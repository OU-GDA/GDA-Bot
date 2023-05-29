import { BrowserRouter, Routes, Route } from "react-router-dom";

const Core = () =>
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<p>Hello World</p>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Core;