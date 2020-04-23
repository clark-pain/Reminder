import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from '@material-ui/icons/Close';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  closeIcon: {
    position: "absolute",
		right: 5,
		top: 5,

  },
});

// Find the function to set isExpanded to false when clicked out

function CreateArea(props) {
	const [isExpanded, setExpanded] = useState(false);
	const [note, setNote] = useState({
		title: "",
		content: ""
	});
	const classes = useStyles(props);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote(prevNote => {
			return {
				...prevNote,
				[name]: value
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: ""
		});
		event.preventDefault();
	}

	function expand() {
		setExpanded(true);
	}

	function collapse() {
		setExpanded(false);
	}

	return (
		<div>
			<form className="create-note">
				{isExpanded ? (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				) : null}
				<textarea
					name="content"
					onClick={expand}
					onChange={handleChange}
					value={note.content}
					placeholder="Write Your Note Here..."
					rows={isExpanded ? 3 : 1}
				/>
				<Zoom in={isExpanded ? true : false}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
				<Zoom  in={isExpanded ? true : false}>
					<CloseIcon className={classes.closeIcon} onClick={collapse}/>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
