import React from "react";
import { AppRoute } from "../../const";

import Sorted from "../sorted/sorted"
import Card from "../card/card"
import LoadMore from "../load-more/load-more"
import NoEvents from "../no-events/no-events"


const Board = ({mode}) => {
    return (
        <section className="board"> 
            {mode === AppRoute.MAIN && <Sorted />}
            <div className="board__events">
                {/* True ? <Card /> : <NoEvents /> */} 
                <Card />
            </div>
            {(mode === AppRoute.MAIN || mode === AppRoute.ARCHIVE) && <LoadMore />}
        </section>
    );
};

export default Board;
