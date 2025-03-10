
function createLibrary(libraryName) {
    return {
      name : libraryName, 
      shelves: {fantasy: [], fiction:[], nonFiction: []}
    }

  }
function addBook(libraryName, bookName){
if(bookName.genre === 'fantasy') {
  return libraryName.shelves.fantasy.push(bookName)

   } else if(bookName.genre === 'nonFiction')
   return libraryName.shelves.nonFiction.push(bookName)

  }

function checkoutBook(library, bookName, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) { 
    if(bookName === library.shelves[genre][i].title) {
     library.shelves[genre].splice(i, 1) 
   return `You have now checked out ${bookName} from the ${library.name}`
  }
     
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`


}


module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};