import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import store from "./setup/academy/init"
import App from './App'
import {DashboardContextProvider} from "./setup/context/DashContextProvider";
import {AdminDashboardProvider} from "./setup/context/AdminDashboardProvider";
import {FormContextProvider} from "./setup/context/FormProprty";

import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
    <Provider store={store}>
        <AdminDashboardProvider>
        <DashboardContextProvider>
            <FormContextProvider>
                <App/>
            </FormContextProvider>
        </DashboardContextProvider>
        </AdminDashboardProvider>
    </Provider>
)
