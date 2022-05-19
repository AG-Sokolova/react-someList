import React from "react";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";

import moment from "moment";

import { observer } from "mobx-react-lite";
import { addEvent, editEvent } from "../../api";


const Event = observer(({_id, theme, comment, date, favorite, archive}) => {
    const {id} = useParams();

    let fdate = moment(new Date()).format('YYYY-MM-DDTHH:mm');
    const emptyEvent = {theme: theme, comment: comment, date: fdate};

    const [form, setForm] = React.useState(emptyEvent);
   
    const handleFieldChange = (evt) => {
        const { name, value } = evt.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (id) {
            editEvent({
                id: _id,
                theme: evt.target.theme.value,
                comment: evt.target.comment.value,
                date: evt.target.date.value,
                favorite: favorite,
                archive: archive
            });
        } else {
            addEvent(form);
        }
        
    }

    const handleReset = (evt) => {
        evt.preventDefault();

        evt.target.theme.value = null;
        evt.target.comment.value = null;
        evt.target.date.value = fdate;

        setForm(emptyEvent);
    } 


    return (
        <form className="board__form" onSubmit={handleSubmit} onReset={handleReset}>
            <h2 className="board__title">{id ? `Редактирование события` : `Добавление события`}</h2>
            <fieldset className="board__field board__field--theme">
                <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
                <textarea
                    type="text"
                    onChange={handleFieldChange}
                    defaultValue = {theme}
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
                    defaultValue = {comment}
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
                    defaultValue = {id ? date : fdate}
                    className="board__input board__input--date"
                    name="date"
                />
            </fieldset>
            <div className="btns">
                <button href={{ Route }} type="submit" className="btn-submit">{id ? `Сохранить` : `Добавить`}</button>
                <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
    );
});


export default Event;