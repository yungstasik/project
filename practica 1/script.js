"use strict";

let number0Films;

function start () {
    number0Films = +prompt('Сколько фильмов вы посмотрели?', '');

    while (number0Films == '' || number0Films == null || isNaN(number0Films)) {
    number0Films = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDb = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      c = prompt ('Один из последних фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних фильмов?', ''),
              b = prompt ('На сколько оцените его?', '');}
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log('done');
    } else {
        console.log('error');
        i--;
           
    } 
}

rememberMyFilms();


function detectPersonalLvl() {
    if (personalMovieDb.count < 10) {
        console.log("MALO");
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log("NORMALNO");
    } else if (personalMovieDb.count >= 30) {
        console.log("EBAT");
    } else {
        console.log("error");
    }
}

detectPersonalLvl();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDb(personalMovieDb.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDb.genres[i - 1] = genre;
    }
}

writeYourGenres();


console.log(personalMovieDb);


