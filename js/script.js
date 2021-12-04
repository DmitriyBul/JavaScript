'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let question, answer;

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    let favourite_genre;
    for(let i = 1; i <= 3; i++){
        favourite_genre = prompt(`Ваш любимый жанр под номером ${i}?`);
        if(favourite_genre != null || favourite_genre != ''){  
            personalMovieDB.genres[i - 1] = favourite_genre;
        }
    }
}

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();
personalMovieDB.count = numberOfFilms;
function rememberMyFilms(){
    for(let i=0; i < 2; i++){
        question = prompt("Один из последних просмотренных фильмов?", "");
        answer = prompt("На сколько оцените его?", "");
        if(question != null || answer != null || question != '' || answer != ''|| question.length > 50 || answer.length > 50){
            personalMovieDB.movies[question] = answer;   
        }
        else{
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    } 
    else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Вы классический зритель');
    }
    else if(personalMovieDB.count >= 30){
        alert('Вы киноман');
    }
    else{
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();
showMyDB(personalMovieDB.private);
writeYourGenres();
console.log(numberOfFilms);