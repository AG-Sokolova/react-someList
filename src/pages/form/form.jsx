import React from "react";
import { AppRoute } from "../../const"

import Header from "../../components/header/header"
import Filter from "../../components/filter/filter"
import Event from "../../components/event/event"


const Form = () => {
    return(
        <React.Fragment>
        <Header mode={AppRoute.EVENT}/>
        <section class="main__wrapper">
            <Filter mode={AppRoute.EVENT}/>
            <section className="board">
                <Event mode={AppRoute.EVENT} />
            </section> 
        </section>  
        </React.Fragment> 
    );
};

export default Form;