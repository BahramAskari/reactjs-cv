/*  Import Dependencies  */
import React from 'react';
import ReactDOM from 'react-dom';
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
import {createTheme, ThemeProvider, Typography} from "@mui/material";

/*  Import Pages or Modules  */
import Home from './pages/Home'
//  import {default as LoginPage} from './pages/Login'
/*  Admin   */
/**
import AdminLeader from "./pages/admin"
import Dashboard from "./pages/admin/Dashboard"
import PrivateRoute from "./PrivateRoute";
 */

const theme = createTheme({
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

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {/* Private Routes Store */}
                <BrowserRouter /*basename={"/reactjs/cms"}*/>
                    <Routes>
                        <Route path="/" element={<Home />} />

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
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
