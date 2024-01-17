import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="todo-container">
			<ol className="todo-list">
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
			</ol>
		</div>
	)
}

export default TodoList
