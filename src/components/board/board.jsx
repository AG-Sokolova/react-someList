import React from "react";

import { AppRoute } from "../../const";

import Sorted from "../sorted/sorted";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
//import NoEvents from "../no-events/no-events";


const Board = ({mode, events}) => {
    return (
        <section className="board"> 
            {mode === AppRoute.MAIN && <Sorted />}
            <div className="board__events">
                {/*Object.key(events).length !== 0 ? events.map(event => <Card {...event} key={event._id} />) : <NoEvents /> */
                events.map(event => <Card {...event} key={event._id} />)
                }
            </div>
            {(mode === AppRoute.MAIN || mode === AppRoute.ARCHIVE) && <LoadMore />}
        </section>
    );
};

export default Board;
