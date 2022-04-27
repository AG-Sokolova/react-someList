import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

const NotFound = () => {
    return (
        <>
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
            </section>
        </section>
        <section className="main__wrapper">
            <div className="notfound">
                <b>404 Not Found</b>
                <p>Упс, что-то пошло не так</p>
                <Link to={AppRoute.MAIN} className="btn-home">вернуться на главную</Link>
            </div>
        </section>
        </>
    );
};

export default NotFound;