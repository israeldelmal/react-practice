import React from 'react'
import { TodoStyled } from './Todo.styled'

const Todo = ({ title }) => {
    return (
        <TodoStyled>
            <span>{ title }</span>
        </TodoStyled>
    )
}

export default Todo