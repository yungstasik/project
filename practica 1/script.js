"use strict";

const number0Films = +prompt('Сколько фильмов вы посмотрели?', '');

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
      d = prompt ('На сколько оцените его?', '');awdawdawd

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);


