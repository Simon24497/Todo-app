import React from "react"

const Todo = ({ todo, todos, setTodos }) => {
	const deleteHandler = () => {
		const newTodos = todos.filter((el) => el.id !== todo.id)

		setTodos(newTodos)

		if (newTodos.length === 0) {
			localStorage.removeItem("todos")
		} else {
			localStorage.setItem("todos", JSON.stringify(newTodos))
		}
	}

	const completedHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed }
				}
				return item
			})
		)
	}

	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{todo.text}
			</li>
			<button
				onClick={completedHandler}
				className="complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<button
				onClick={deleteHandler}
				className="trash-btn">
				<i className="fas fa-trash"> </i>
			</button>
		</div>
	)
}

export default Todo
