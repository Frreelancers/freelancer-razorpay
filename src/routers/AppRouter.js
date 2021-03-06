
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
import UpdateProject from '../components/UpdateProject';
import SubmitProject from '../components/SubmitProject';
import ReviewFreelancer from '../components/ReviewFreelancer';

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
                    <Route path="/updateProject" component={UpdateProject} />
                    <Route path="/adminDashboard" component={AdminDashboard} />
                    <Route path="/addFreelancer" component={CreateFreelancer} />
                    <Route path="/freelancerDashboard" component={FreelancerDashboard} />
                    <Route path="/submitProject" component={SubmitProject} />
                    <Route path="/reviewFreelancer" component={ReviewFreelancer} />
                    <Route path="/" component={Landing} />
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default AppRouter;