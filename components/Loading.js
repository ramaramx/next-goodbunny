const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 600);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

const App = () => (
	<> 
		<h3 style={{textAlign:"center"}}>HOP, INTO A WORLD</h3> 
		<Progress done="100"/>
		<h3 style={{textAlign:"center"}}>OF GOODNES..</h3>
	</>
);
	
ReactDOM.render(<App />, document.getElementById('app'));