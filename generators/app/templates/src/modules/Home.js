<% if (includeReact) { %>
	import React from 'react'

	class Home extends React.Component {
		constructor(props) {
			super(props);
			
			console.log('Hello World !')
		}

		render() {
			return (
				<div>
					<br /><br />
					<h1><%= name %></h1>
					<p>Hello World !</p>
				</div>
			)
		}
	}

	export default Home;

<% } else { %>

	console.log('Hello World !')

<% } %>