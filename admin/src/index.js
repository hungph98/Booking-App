import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProviderAmin } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProviderAmin>
            <DarkModeContextProvider>
                <App />
            </DarkModeContextProvider>
        </AuthContextProviderAmin>
    </React.StrictMode>,
    document.getElementById("root")
);