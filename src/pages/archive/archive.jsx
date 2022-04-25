import React from "react";
import { AppRoute } from "../../const";

import Board from "../../components/board/board";
import Header from "../../components/header/header";


const Archive = () => {
    return (
        <React.Fragment> 
        <Header mode={AppRoute.ARCHIVE} />
        <section className="main__wrapper">
            <Board mode={AppRoute.ARCHIVE}/>
        </section>
        </React.Fragment>
    );
};

export default Archive;