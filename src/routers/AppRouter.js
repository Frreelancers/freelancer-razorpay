
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import AddProject from '../components/AddProject';
import AdminDashboard from '../components/AdminDashboard';
import CreateFreelancer from '../components/CreateFreelancer';
import FreelancerDashboard from '../components/FreelancerDashboard';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main id="home" className="container">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/addProject" component={AddProject} />
                    <Route path="/adminDashboard" component={AdminDashboard} />
                    <Route path="/addFreelancer" component={CreateFreelancer} />
                    <Route path="/freelancerDashboard" component={FreelancerDashboard} />
                    <Route path="/" component={Landing} />
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default AppRouter;