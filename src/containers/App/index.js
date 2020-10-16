/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PublicRoute from 'routeHoc/publicRoute';
// import PrivateRoute from 'routeHoc/privateRoute';
import Loader from 'shared/Loader';
import '../../scss/style.scss';

const loading = (
    <Loader />
)

// Containers
const TheLayout = React.lazy(() => import('../DefaultLayout/TheLayout'));

// Pages
// const Login = React.lazy(() => import('../../views/pages/login/Login'));Register'));
class App extends Component {
    render() {
        return (
            <React.Suspense fallback={ loading }>
                <Switch>
                    <Route path="/" name="Home" render={ props => <TheLayout { ...props }/> } />
                    {/* <PublicRoute exact path="/login" name="Login Page" component={ Login }/>
                    <PublicRoute exact path="/forgot-password" name="Recovery Page" component={ ForgotPassword } />
                    <PublicRoute exact path="/reset-password" name="Reset Page" component={ ResetPassword } />
                    <PrivateRoute path="/" name="Home" component={ TheLayout } />
                    <Redirect from="/" to="/login" /> */}
                </Switch>
            </React.Suspense>
        );
    }
}

export default App;
