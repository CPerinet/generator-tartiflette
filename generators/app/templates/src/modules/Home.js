<% if (includeReact) { %>
import React from 'react'

class Home extends React.Component {
	constructor(props) {
		super(props);
		
		console.log('Hello World !')

		this.state = {}

		<% if ( includeServer ) { %>
		fetch('/api/test', {method : 'GET'})
		.then((res) => { return res.json() })
		.then((data) => {
			this.setState({message: data.message})
			return data
		})
		.catch((err) => {
			throw console.error(err)
		})
		<% } %>
	}

	render() {
		return (
			<div>
				<br /><br />
				<h1><%= name %></h1>
				<p>Hello World !</p>

				<% if ( includeServer ) { %>
				<p>Message from API : <span>{this.state.message}</span></p>
				<% } %>

			</div>
		)
	}
}

export default Home;

<% } else { %>

	console.log('Hello World !')

<% } %>