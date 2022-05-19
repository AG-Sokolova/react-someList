import React from "react";
import { useLocation } from "react-router-dom";

import { observer } from 'mobx-react-lite';
import { events } from "../../store/index";

import Board from "../../components/board/board";
import Header from "../../components/header/header";


const Archive = observer(() => {
    const { pathname } = useLocation();
    const { archiveData } = events;

    return (
        <React.Fragment> 
        <Header mode={pathname} />
        <section className="main__wrapper">
            <Board mode={pathname} events={archiveData}/> 
        </section>
        </React.Fragment>
    );
});

export default Archive;