import React from "react";
import { useLocation } from "react-router-dom";
import { observer } from 'mobx-react-lite';

import { events } from "../../store/index";

import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";


const Main = observer(() => {
    const { pathname } = useLocation();
    const { notArchiveData } = events;
    
    return (
        <React.Fragment>
        <Header mode={pathname} />
        <section className="main__wrapper">
            <Filter mode={pathname} />
            <Board mode={pathname} events={notArchiveData} />
        </section>
        </React.Fragment>
    );
});

export default Main;