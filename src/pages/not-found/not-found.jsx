import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

import "./not-found.css"

import Header from "../../components/header/header"

const NotFound = () => {
    const { pathname } = useLocation();
    
    return (
        <>
        <Header mode = {pathname}/>
        <section className="main__wrapper">
            <div className="notfound">
                <b>404 Not Found</b>
                <p className="notfound-text">Упс, что-то пошло не так</p>
                <Link to={AppRoute.MAIN} className="btn-home">вернуться на главную</Link>
            </div>
        </section>
        </>
    );
};

export default NotFound;