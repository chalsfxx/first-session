// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const steven = moviesArray.filter((movieItem) => movieItem.director == "Steven Spielberg" && movieItem.genre.includes("Drama") );
  
  // const drama = steven.filter((dramaItem) => dramaItem.genre.includes('Drama'));
  return steven;

}
//console.table(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage2(moviesArray) {
  if (moviesArray.length === 0) {
    return 0
}
    let sum = moviesArray.reduce((acc, value) => {
        if (value.score) {
            return acc + value.score;
        } else return acc
    }, 0);

    let averageScore = sum / moviesArray.length;

    return Number(averageScore.toFixed(2))
}

const scoresAverage = (moviesArray) => {
  let total = 0;

  const scores = moviesArray.map((movie) => movie.score);
  for (let i = 0; i < scores.length; i++){
    total = scores[i] + total;
    //total+=scores[i]
  }
  const totalScore = total / moviesArray.length;
  return totalScore.toFixed(2)
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
