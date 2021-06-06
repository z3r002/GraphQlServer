import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

import './TodoListItem.css'
import React, {useState} from "react";

function TodoListItem({id, label, check}) {
    const [x, setX] = useState(check);
    const mutation = gql`
        mutation($id : ID!) {
            toggleComplete(id: $id) {
                check
            }
        }


    `
    const k = gql`
        mutation($id: ID!) {
            removeTask(id: $id) {
                label
            }
        }
    `

    return (
        <Mutation mutation={mutation}>
            {(toggleComplete) => (
                <li className='item'>
                    <input type="checkbox" checked={x}
                           onChange={() => {
                               setX(!x);
                               toggleComplete({variables: {id: id}})
                           }}/>
                    <div>
                        {label}
                    </div>
                    <Mutation mutation={k}>
                        {(removeTask) => (
                            <div className='trash' onClick={() => {
                                removeTask({variables: {id: id}})
                            }}>X</div>
                        )}

                    </Mutation>

                </li>
            )}
        </Mutation>
    )
}

export default TodoListItem
