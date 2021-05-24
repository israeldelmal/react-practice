import { useEffect, useState } from 'react'

export const useTodos = () => {
    const [todos, setTodos] = useState(null)
    const [error, setError] = useState(null)

    const fetchTodos = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json = await response.json()
            setTodos(json)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return { todos, error }
}