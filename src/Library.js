
function createLibrary(libraryName) {
    return {
      name : libraryName, 
      shelves: {fantasy: [], fiction:[], nonFiction: []}
    }

  }
function addBook(libraryName, bookName){
if(bookName.genre === 'fantasy') {
  return libraryName.shelves.fantasy.push(bookName)

   } else if(bookName.genre== 'nonFiction')
   return libraryName.shelves.nonFiction.push(bookName)

  }

function checkoutBook(libraryName, bookName, shelves) {
  for (var i = 0; i < shelf.length; i++) { 
    if(shelves[0].bookName) {
    return libraryName.shelves[i].splice(i, 1)
  }
}
}


module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};