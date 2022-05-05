import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoute } from "../../const";

import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import NotFound from "../../pages/not-found/not-found";


const App = ({events}) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoute.MAIN}> <Main events={events} /> </Route>
                <Route exact path={AppRoute.ARCHIVE}> <Archive events={events} /> </Route> 
                <Route exact path={AppRoute.EVENT /*Редактирование*/}> <Form events={events}/> </Route>
                <Route exact path={AppRoute.ADD /*Добавление*/}> <Form/> </Route>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;