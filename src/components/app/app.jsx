import React from "react";
import { AppRoute } from "../../const.js";

import Main from "../../pages/main/main"
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form"


const App = () => {
    return(
        //<Main mode={AppRoute.MAIN} />
        //<Archive mode={AppRoute.ARCHIVE} />
        <Form mode={AppRoute.EVENT}/>
    );
};

export default App;