import React from "react";

import Board from "../../components/board/board";
import Header from "../../components/header/header";


const Archive = (props) => {
    console.log(props.match.path)
    return (
        <React.Fragment> 
        <Header mode={props.match.path} />
        <section className="main__wrapper">
            <Board mode={props.match.path} />
        </section>
        </React.Fragment>
    );
};

export default Archive;