import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppContainer from "./components/app-container/app-container.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import AppProvider from "./context/app.provider";

import "./App.css";

const App = () => {
    return (
        <div className='App'>
            <AppProvider>
                <BrowserRouter>
                    <ScrollToTop>
                        <AppContainer />
                    </ScrollToTop>
                </BrowserRouter>
            </AppProvider>
        </div>
    );
};

export default App;
