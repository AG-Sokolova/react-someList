import React from "react";

import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";


const Main = (props) => {
    return (
        <React.Fragment>
        <Header mode={props.location.pathname} />
        <section className="main__wrapper">
            <Filter mode={props.location.pathname} />
            <Board mode={props.location.pathname} />
        </section>
        </React.Fragment>
    );
};

export default Main;