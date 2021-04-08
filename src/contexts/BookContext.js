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

    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;