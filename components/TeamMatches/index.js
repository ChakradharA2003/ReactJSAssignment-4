// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    recentMatches: [],
    teamBannerUrl: '',
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedRecentMatches = data.recent_matches.map(detail => ({
      id: detail.id,
      competingTeamLogo: detail.competing_team_logo,
      competingTeam: detail.competing_team,
      result: detail.result,
      matchStatus: detail.match_status,
    }))
    const latestMatchDetails = data.latest_match_details
    console.log(latestMatchDetails)
    const updatedLatestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpire: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const teamBanner = data.team_banner_url
    this.setState({
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      teamBannerUrl: teamBanner,
      teamId: id,
      isLoading: false,
    })
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      teamId,
      isLoading,
    } = this.state
    let displayContent
    if (isLoading) {
      displayContent = (
        <div className="loading-view">
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        </div>
      )
    } else {
      displayContent = (
        <div className={`${teamId}-container`}>
          <img src={teamBannerUrl} alt="team banner" className="banner-image" />
          <h1 className="latest-matches-heading">Latest Matches</h1>
          <LatestMatch
            key={latestMatchDetails.id}
            matchDetails={latestMatchDetails}
          />
          <ul className="match-cards-list">
            {recentMatches.map(match => (
              <MatchCard
                key={match.id}
                competingTeamLogo={match.competingTeamLogo}
                competingTeam={match.competingTeam}
                result={match.result}
                matchStatus={match.matchStatus}
              />
            ))}
          </ul>
        </div>
      )
    }
    return displayContent
  }
}
export default TeamMatches
