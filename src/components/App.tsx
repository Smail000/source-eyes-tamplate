import React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import SomePage from "./pages/SomePage/SomePage"

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<SomePage />} />
                </Routes>
            </div>
        </Router>
    )
}

// export default function App() {


// }