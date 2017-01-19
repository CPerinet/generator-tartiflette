import React from 'react'

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
		<% if (props.includeDB) { %>
		fetch('/api/ping', {method : 'GET'})
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
			<div className="home-page">
				<div className="row">
					<div className="content">
						<img src="assets/img/tarti.svg" alt="" className="logo"/>
						<h1 className="title">Your <strong>Tartiflette</strong> application is ready !</h1>
						
						<hr />

						<div className="launch">
							<p>Run application in production mode</p>
							<code>npm run start</code>
							<p>Run application in development mode</p>
							<code>npm run dev</code>
						</div>

						<hr />

						<ul className="list">
							<li><p>React</p><% if (props.includeReact) { %><i className="fa fa-check" aria-hidden="true"><% } else { %><i className="fa fa-times" aria-hidden="true"><% } %></i></li>
							<li><p>React/Router</p><% if (props.includeReactRouter) { %><i className="fa fa-check" aria-hidden="true"><% } else { %><i className="fa fa-times" aria-hidden="true"><% } %></i></li>
							<li><p>Express Server</p><% if (props.includeServer) { %><i className="fa fa-check" aria-hidden="true"><% } else { %><i className="fa fa-times" aria-hidden="true"><% } %></i></li>
							<li><p>API {this.state.message}</p><% if (props.includeAPI) { %><i className="fa fa-check" aria-hidden="true"><% } else { %><i className="fa fa-times" aria-hidden="true"><% } %></i></li>
							<li><p>MongoDB</p><% if (props.includeDB) { %><i className="fa fa-check" aria-hidden="true"><% } else { %><i className="fa fa-times" aria-hidden="true"><% } %></i></li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="credits">
						<p><a href="https://twitter.com/CPerinet" target="_blank">@CPerinet</a></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
