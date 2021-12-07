'use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(){
        if(this.private == true){
            this.private = false;
        } else{
            this.private = true;
        }
    },

    writeYourGenres: function(){
        let favourite_genre;
        for(let i = 1; i <= 3; i++){
            favourite_genre = prompt(`Ваш любимый жанр под номером ${i}?`);
            if(favourite_genre == null || favourite_genre === ''){  
                i--;
            }
            else{
                this.genres[i - 1] = favourite_genre;
            }
        }
        this.genres.forEach(function(item, i, genres){
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },

    start: function(){
        let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
        this.count = numberOfFilms;
    },

    rememberMyFilms: function(){
        let question, answer;
        for(let i=0; i < 2; i++){
            question = prompt("Один из последних просмотренных фильмов?", "");
            answer = prompt("На сколько оцените его?", "");
            if(question != null || answer != null || question != '' || answer != ''|| question.length > 50 || answer.length > 50){
                this.movies[question] = answer;   
            }
            else{
                i--;
            }
        }
    },

    detectPersonalLevel: function(){
        if (this.count < 10){
            alert('Просмотрено довольно мало фильмов');
        } 
        else if(this.count >= 10 && this.count < 30){
            alert('Вы классический зритель');
        }
        else if(this.count >= 30){
            alert('Вы киноман');
        }
        else{
            alert('Произошла ошибка');
        }
    }

};

personalMovieDB.writeYourGenres();
console.log(personalMovieDB);