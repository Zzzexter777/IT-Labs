import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                const todosWithCompletion = data.map(todo => ({
                    ...todo,
                    isCompleted: todo.completed 
                }));
                setTodos(todosWithCompletion);
            } catch (error) {
                console.error('Error fetching todos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const handleToggleComplete = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Список задач</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleToggleComplete(todo.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <span style={{ 
                            textDecoration: todo.isCompleted ? 'line-through' : 'none',
                            color: todo.isCompleted ? '#888' : '#000'
                        }}>
                            {todo.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;