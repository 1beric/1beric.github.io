import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
	palette: {
		// primary: { 500: "#467fcf" },
		bodyBackground: {
			light: '#fffbe3',
			main: '#fff4b5',
			dark: '#ded187',
			contrast: '#1a1600',
		},
		header: {
			light: '#eaffe3',
			main: '#c6ffb3',
			dark: '#9dde87',
			contrast: '#061a00',
		},
	},
});
export default theme;
