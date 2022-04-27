import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoute } from "../../const";

import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import NotFound from "../../pages/not-found/not-found";


const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoute.MAIN} component={Main} />
                <Route exact path={AppRoute.ARCHIVE} component={Archive} />
                <Route exact path={AppRoute.EVENT /*Редактирование*/} component={Form} />
                <Route exact path={AppRoute.ADD /*Добавление*/} component={Form} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;