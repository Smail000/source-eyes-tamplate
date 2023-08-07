import React from "react"

import * as style from "./App.module.less"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import SomePage from "./pages/SomePage/SomePage"

export default function App() {
    return (
        <Router>
            <div className={style.wrapper}>
                <Routes>
                    <Route path="/" element={<SomePage />} />
                </Routes>
            </div>
        </Router>
    )
}