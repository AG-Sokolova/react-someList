import React from "react";
import { useRouteMatch } from "react-router-dom";

import Header from "../../components/header/header"
import Filter from "../../components/filter/filter"
import Event from "../../components/event/event"


const Form = ({events}) => {
    const { path } = useRouteMatch();
    return(
        <React.Fragment>
        <Header mode={path}/>
        <section class="main__wrapper">
            <Filter mode={path} />
            <section className="board">
                <Event mode={path} events={events}/>
            </section> 
        </section>  
        </React.Fragment>
    );
};

export default Form;