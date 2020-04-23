import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
	function handleClick() {
		props.onDelete(props.id);
	}

	var date = new Date().toLocaleDateString("en-US", {
	    "year": "numeric",
	    "month": "numeric",
			"day": "numeric"
	});

	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={handleClick}>
				<DeleteIcon />
			</button>
					<div>{date}</div>
		</div>
	);
}

export default Note;
