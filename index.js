function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => {
    console.log(json[0]);
    renderBooks(json);
  
  });
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    const h3 = document.createElement('p')

    h2.innerHTML = book.name
    h3.innerHTML = book.authors[0]
    
    main.appendChild(h2)
    h2.parentNode.insertBefore(h3, h2.nextSibling)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
