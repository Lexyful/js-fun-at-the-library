function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

function buildMainCharacter(name, age, pronouns) {
    var mainCharacter = {
      name,
      age,
      pronouns
    }

    return mainCharacter
   }
 function saveReview(newReviews, currentReviews) {
  if(currentReviews.includes(newReviews)){


  } else 
  return currentReviews.push(newReviews)
  }

  function calculatePageCount(title){
    return title.length * 20 
  }

  function writeBook(title, mainCharacter, genre) {
    var book = {
      title: title,
      mainCharacter: mainCharacter,
      pageCount: calculatePageCount(title),
      genre: genre
   }

   return book
  }


module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
  }

