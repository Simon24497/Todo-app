import React from "react"

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()

		if (inputText.trim() === "") {
			return
		}

		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		])

		setInputText("")
	}

	const statusHandler = (e) => {
		setStatus(e.target.value)
	}

	return (
		<form>
			<input
				onChange={inputTextHandler}
				value={inputText}
				type="text"
				className="todo-input"
			/>
			<button
				onClick={submitHandler}
				type="submit"
				className="todo-button">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select
					onChange={statusHandler}
					name="todos"
					className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	)
}

export default Form
