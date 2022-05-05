import React from "react";
import { useLocation } from "react-router-dom"

import Board from "../../components/board/board";
import Header from "../../components/header/header";


const Archive = ({events}) => {
    const {pathname} = useLocation();
    const archiveEvents = events.filter(x => x.archive);

    return (
        <React.Fragment> 
        <Header mode={pathname} />
        <section className="main__wrapper">
            <Board mode={pathname} events={archiveEvents}/>
        </section>
        </React.Fragment>
    );
};

export default Archive;