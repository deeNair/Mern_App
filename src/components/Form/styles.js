import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		borderRadius: 4,
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "97%",
		marginTop: "10px",
		marginBottom: "1Opx",
		paddingBottom: "10px",
	},
	buttonSubmit: {
		marginBottom: 10,
	},
}));
