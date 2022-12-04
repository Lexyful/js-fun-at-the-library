
function shelfBook(books, shelf) {
  if(shelf.length <3) {
  return shelf.unshift(books)
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) { 
    if(shelf[i].title === book) {
    return shelf.splice(i, 1)
  }
}
}

function listTitles(shelf) {
  var titles = []
  for(var i = 0; i < shelf.length; i++) {

     titles.push(shelf[i].title) 

  }
return titles.join(', ') 

}

function searchShelf(shelfy, booky2) {
    for(var i = 0; i < shelfy.length; i ++) {
      if(shelfy[i].title === booky2) {
        return true
    }
    
  }
 return false 
}



module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};    
