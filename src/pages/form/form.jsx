import React from "react";

import Header from "../../components/header/header"
import Filter from "../../components/filter/filter"
import Event from "../../components/event/event"


const Form = (props) => {
    return(
        <React.Fragment>
        <Header />
        <section class="main__wrapper">
            <Filter mode={props.match.path}/>
            <section className="board">
                <Event mode={props.match.path}/>
            </section> 
        </section>  
        </React.Fragment>
    );
};

export default Form;