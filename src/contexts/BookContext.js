import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        { title: 'Clean Code', id: uuidv4() },
        { title: 'The Pragmatic Programmer', id: uuidv4() },
        { title: 'The Mythical Man-Month', id: uuidv4() },
        { title: 'Peopleware', id: uuidv4() },
    ])
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuidv4() }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;