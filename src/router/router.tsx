import React from 'react';
import {Route, Routes} from "react-router-dom";
import Invoices from "../components/pages/invoices/invoices";
import Auth from "../components/pages/auth/auth";
import Profile from "../components/pages/profile/profile";
import Requests from "../components/pages/requests/requests";
import Layout from "../components/temlates/layout/layout";
import {routes} from "../utils/constants";
import Users from "../components/pages/users/users";

const Router = () => {
    return (
        <Routes>
            <Route path={routes.invoice.path} element={<Layout/>}>
                <Route index element={<Invoices/>}/>
                <Route path={routes.login.path} element={<Auth/>}/>
                <Route path={routes.registration.path} element={<Auth/>}/>
                <Route path={routes.profile.path} element={<Profile/>}/>
                <Route path={routes.request.path} element={<Requests/>}/>
                <Route path={routes.users.path} element={<Users/>}/>
            </Route>
        </Routes>
    );
};

export default Router;