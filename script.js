// Library Management System - JavaScript

// Data Storage
let books = [
    // Computer Science & IT
    { id: 1, title: " Python Programming", author: "Anurag Gupta and G P Biswas", genre: "Programming", isbn: "978-8183331630", status: "available" },
    { id: 2, title: "Learning Python", author: "Mark Lutz Publisher(s): O'Reilly Media ", genre: "Programming", isbn: "978-0198099307", status: "available" },
    { id: 3, title: "System Programming", author: " John. J. Donovan", genre: "System prog", isbn: "978-0132126953", status: "issued" },
    { id: 4, title: "Modern Database Management", author: "Fred R. McFadden, Jeffrey A. Hoffer, Mary B. Prescott", genre: "DBMS", isbn: "978-1118063330", status: "available" },
    { id: 5, title: "Database Management Systems", author: "Raghu Ramakrishnan", genre: "DBMS", isbn: "978-0072465631", status: "available" },
    
];

let members = [
    { id: 1, name: "Somya Jain", email: "somya.jain@email.com", phone: "987-654-3210" },
    { id: 2, name: "Plaksha", email: "plaksha.porwal@email.com", phone: "876-543-2109" },
     { id: 2, name: "Prashansha", email: "prish123.porwal@email.com", phone: "976-523-2101" }
];

// Initialize the application
function init() {
    updateStatistics();
    displayBooks();
    displayMembers();
}

// Tab Navigation
function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab based on name
    let tabId = '';
    switch(tabName) {
        case 'HOME':
            tabId = 'dashboard';
            break;
        case 'SEARCH':
            tabId = 'books';
            break;
        case 'NEW RELEASES':
            tabId = 'addBook';
            break;
        case 'LANGUAGES':
            tabId = 'books';
            break;
        case 'MEMEBERS':
            tabId = 'members';
            break;
        case 'ISSUE/RETURN':
            tabId = 'books';
            break;
        default:
            tabId = 'dashboard';
    }

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Update Statistics
function updateStatistics() {
    const totalBooks = books.length;
    const availableBooks = books.filter(book => book.status === 'available').length;
    const issuedBooks = books.filter(book => book.status === 'issued').length;
    const totalMembers = members.length;

    document.getElementById('totalBooks').textContent = totalBooks;
    document.getElementById('availableBooks').textContent = availableBooks;
    document.getElementById('issuedBooks').textContent = issuedBooks;
    document.getElementById('totalMembers').textContent = totalMembers;
}

// Display Books
function displayBooks() {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <span class="status ${book.status}">${book.status.toUpperCase()}</span>
        `;
        booksGrid.appendChild(bookCard);
    });
}

// Search Books
function searchBooks() {
    const searchTerm = document.getElementById('searchBook').value.toLowerCase();
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );

    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = '<p style="text-align: center; color: var(--medium-roast); padding: 20px;">No books found matching your search.</p>';
        return;
    }

    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <span class="status ${book.status}">${book.status.toUpperCase()}</span>
        `;
        booksGrid.appendChild(bookCard);
    });
}

// Add New Book
function addBook(event) {
    event.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const genre = document.getElementById('bookGenre').value;
    const isbn = document.getElementById('bookISBN').value;

    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        genre: genre,
        isbn: isbn,
        status: 'available'
    };

    books.push(newBook);

    // Clear form
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookGenre').value = '';
    document.getElementById('bookISBN').value = '';

    // Update displays
    updateStatistics();
    displayBooks();

    alert('Book added successfully!');
}

// Display Members
function displayMembers() {
    const membersList = document.getElementById('membersList');
    membersList.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>Email:</strong> ${member.email}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Member ID:</strong> #${member.id}</p>
        `;
        membersList.appendChild(memberCard);
    });
}

// Add New Member
function addMember(event) {
    event.preventDefault();

    const name = document.getElementById('memberName').value;
    const email = document.getElementById('memberEmail').value;
    const phone = document.getElementById('memberPhone').value;

    const newMember = {
        id: members.length + 1,
        name: name,
        email: email,
        phone: phone
    };

    members.push(newMember);

    // Clear form
    document.getElementById('memberName').value = '';
    document.getElementById('memberEmail').value = '';
    document.getElementById('memberPhone').value = '';

    // Update displays
    updateStatistics();
    displayMembers();

    alert('Member added successfully!');
}

// Initialize when page loads
window.onload = init;