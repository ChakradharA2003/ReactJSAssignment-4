// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    teamDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({teamDetails: updatedData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    console.log(teamDetails)
    const displayteams = isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    ) : (
      <ul className="team-cards-list">
        {teamDetails.map(team => (
          <TeamCard
            key={team.id}
            id={team.id}
            name={team.name}
            teamLogo={team.teamImageUrl}
          />
        ))}
      </ul>
    )
    return (
      <div className="bg-container">
        <div className="ipl-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {displayteams}
      </div>
    )
  }
}
export default Home
