import React from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const Event = ({events}) => {
    const {id} = useParams();

    let event = events.filter(val => val._id === id)[0];

    const [form, setForm] = React.useState({
        theme: id ? event.theme : '',
        comment: id ? event.comment : '',
        date: id ? event.date : new Date()
    });

    const handleFieldChange = (evt) => {
        const { name, value } = evt.target;
        setForm({...form, [name]: value})
    };

    const handleSubmit = (evt) => {
        form.date = moment(form.date).format()
        evt.preventDefault();
        console.log("submit form:", form);
    };

    return (
        <form className="board__form" onSubmit={handleSubmit}>
            <h2 className="board__title">{id ? `Редактирование события` : `Добавление события`}</h2>
            <fieldset className="board__field board__field--theme">
                <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
                <textarea
                    type="text"
                    onChange={handleFieldChange}
                    value = {form.theme}
                    className="board__input board__input--theme"
                    name="theme"
                    required
                ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
                <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
                <textarea
                    type="text"
                    onChange={handleFieldChange}
                    value = {form.comment}
                    className="board__input board__input--comment"
                    name="comment"
                    required
                ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
                <label htmlFor="date" className="board__label board__label--date">Дата:</label>
                <input
                    type="datetime-local"
                    onChange={handleFieldChange}
                    value = {moment(form.date).format('YYYY-MM-DDTHH:mm')}
                    className="board__input board__input--date"
                    name="date"
                />
            </fieldset>
            <div className="btns">
                <button type="submit" className="btn-submit">{id ? `Сохранить` : `Добавить`}</button>
                <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
    );
};


export default Event;
