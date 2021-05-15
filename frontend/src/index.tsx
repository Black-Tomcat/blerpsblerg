import React from "react";
import ReactDOM from "react-dom";

import "@fontsource/julius-sans-one";
import "@fontsource/athiti";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    createMuiTheme, CssBaseline,
    responsiveFontSizes,
    ThemeProvider
} from "@material-ui/core";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider
            theme={responsiveFontSizes(
                createMuiTheme({
                    palette: {
                        type: "dark",
                        primary: { main: "#2e7d32" },
                        secondary: { main: "#b71c1c" },
                    },
                    typography: {
                        h1: { fontFamily: "Julius Sans One" },
                        h2: { fontFamily: "Julius Sans One" },
                        h3: { fontFamily: "Julius Sans One" },
                        h4: { fontFamily: "Julius Sans One" },
                        h5: { fontFamily: "Julius Sans One" },
                        h6: { fontFamily: "Julius Sans One" },
                        subtitle1: { fontFamily: "Julius Sans One" },
                        subtitle2: { fontFamily: "Julius Sans One" },
                        body1: { fontFamily: "Athiti" },
                        body2: { fontFamily: "Athiti" },
                        button: { fontFamily: "Athiti" },
                        caption: { fontFamily: "Athiti" },
                        overline: { fontFamily: "Athiti" },
                    },
                })
            )}
        >
            <CssBaseline/>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
