import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import TodoListItem from './TodoListItem'
import './TodoList.css'

function TodoList({ todoList }) {
    const [newTodo, setNewTodo] = useState('')


    const addTodoMutation = gql`
        mutation($label : String!) {
            createTask(label: $label) {
                id
                label
                check
            }
        }

    `

    return (
        <div className="TodoList">

            <Mutation mutation={addTodoMutation}>
                {(addTodo) => (
                    <div >
                        <input
                            className='addInput'
                            type="text"
                            placeholder="New todo item"
                            value={newTodo}
                            onChange={(event) => setNewTodo(event.target.value)}
                        />
                        <button onClick={() => {
                            addTodo({variables: {label: newTodo}})
                            setNewTodo('')

                        }}>
                            Add
                        </button>
                    </div>
                )}
            </Mutation>
            <ol>
                {todoList.map((item) => (
                    <TodoListItem key={item.id} {...item}></TodoListItem>
                ))}
            </ol>

        </div>
    )
}

export default TodoList
