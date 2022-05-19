import React from "react";

import { AppRoute } from "../../const";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { observer } from "mobx-react-lite";
import { events } from "../../store/index.js";

import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import NotFound from "../../pages/not-found/not-found";


const App = observer(() => {
    const { data } = events;

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoute.MAIN}> <Main /> </Route>
                <Route exact path={AppRoute.ARCHIVE}> <Archive /> </Route> 
                <Route exact path={AppRoute.EVENT /*Редактирование*/}> <Form events={data}/> </Route>
                <Route exact path={AppRoute.ADD /*Добавление*/}> <Form/> </Route>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
})

export default App;