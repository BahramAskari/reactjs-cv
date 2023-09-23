/*  Import Dependencies  */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './app/store';
import { store as publicStore } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {createTheme, ThemeProvider, Typography,} from "@mui/material";

/*  Import Pages or Modules  */
import Home from './pages/Home'
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
//  import {default as LoginPage} from './pages/Login'
/*  Admin   */
/**
import AdminLeader from "./pages/admin"
import Dashboard from "./pages/admin/Dashboard"
import PrivateRoute from "./PrivateRoute";
 */
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true; // removes the `xs` breakpoint
        sm: true;
        md: true;
        lg: true;
        xl: true;
        ms: true; // adds the `mobile` breakpoint
    }
}

const theme = createTheme({
    breakpoints: {
        // Define custom breakpoint values.
        // These will apply to Material-UI components that use responsive
        // breakpoints, such as `Grid` and `Hidden`. You can also use the
        // theme breakpoint functions `up`, `down`, and `between` to create
        // media queries for these breakpoints
        values: {
            xs: 0,
            ms: 430,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(",")
    },
    direction: "ltr"
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {/* Private Routes Store */}
                <BrowserRouter basename={"/reactjs/cv"}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/services" element={<Services />} />

                        <Route path="/register" element={<Home />} />
                        <Route path="/login" element={<Home />} />

                        {/* Begin Admin Dashboard Routes /}
                        <Route
                            path="/*"
                            element={
                                <PrivateRoute>
                                    <AdminLeader />
                                </PrivateRoute>
                            }
                        />
                        {/* End Admin Dashboard Routes */}

                        <Route path="*" element={<h1>😢😢😢 WRONG ROUTE 😢😢😢 R0UTE N0T F0UND</h1>} />

                    </Routes>

                </BrowserRouter>

            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    //document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
