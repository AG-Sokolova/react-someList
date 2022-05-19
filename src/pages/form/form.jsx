import React from "react";

import { useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";

import { observer } from "mobx-react-lite";
import { events } from "../../store";


const Form = observer(() => {
    const { path } = useRouteMatch();
    const { id }  = useParams();
    
    const { data } = events;
    const event = data.find(x => x._id === id);

    return(
        <React.Fragment>
        <Header mode={path}/>
        <section class="main__wrapper">
            <Filter mode={path} />
            <section className="board">
                <Event {...event}/>
            </section> 
        </section>  
        </React.Fragment>
    );
});

export default Form;