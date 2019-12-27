import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Courses from "./../course/Courses";
import Students from "./../student/Students";
import Lecturers from "./../lecturer/Lecturers";

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Redirect exact from="/" to="/courses" />
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/students" component={Students} />
                <Route exact path="/lecturers" component={Lecturers} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes;