import React, {Fragment, useContext, useEffect} from 'react';
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import {observer} from "mobx-react-lite";
import {Route, RouteComponentProps, withRouter} from 'react-router-dom';
import HomePageComponent from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import {Container} from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";

const App: React.FC<RouteComponentProps> = ({location}) => {

    return (
        <Fragment>
            <Route exact path="/" component={HomePageComponent}/>
            <Route path={'/(.+)'} render={() => (
                <Fragment>
                    <NavBar/>
                    <Container style={{marginTop: '7em'}}>
                        <Route exact path="/activities" component={ActivityDashboard}/>
                        <Route exact path="/activities/:id" component={ActivityDetails}/>
                        <Route exact key={location.key} path={["/createActivity", "/manage/:id"]}
                               component={ActivityForm}/>
                    </Container>
                </Fragment>
            )}/>
        </Fragment>
    );
}

export default withRouter(observer(App));
