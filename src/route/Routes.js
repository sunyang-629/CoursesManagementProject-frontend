import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Courses from "./../course/Courses";
import Students from "./../student/Students";
import Lecturers from "./../lecturer/Lecturers";

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Courses} />
                <Route exact path="/students" component={Students} />
                <Route exact path="/lecturers" component={Lecturers} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes;