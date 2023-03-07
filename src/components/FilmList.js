import React from 'react';
import Film from './Film';
import UpcomingFilms from './UpcomingFilms';

const FilmList = ({films}) => {

    const filmNodes = films.map(film => (
        <li>
            <Film key={film.id} name={film.name} url={film.url}/>
        </li>
    ));

    return (
        <>
            {filmNodes}
            <hr/>
            <div className="upcoming-films">{UpcomingFilms()}</div>
        </>
    )
};

export default FilmList;
