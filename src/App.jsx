import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

const App = () => {
    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem('contacts')
        return storedContacts
            ? JSON.parse(storedContacts)
            : [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ]
    })

    const [filter, setFilter] = useState('')

    const handleFilterChange = value => {
        setFilter(value)
    }

    const handleAddContact = ({ name, number }) => {
        const newContact = {
            id: nanoid(),
            name,
            number,
        }

        setContacts(prev => [...prev, newContact])
    }

    const handleDeleteContact = id => {
        setContacts(prev => prev.filter(contact => contact.id !== id))
    }

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    )

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    return (
        <div className="container">
            <h1 className="phonebook-title">Phonebook</h1>
            <ContactForm onAdd={handleAddContact} />
            <SearchBox value={filter} onChange={handleFilterChange} />
            <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
        </div>
    )
}

export default App
