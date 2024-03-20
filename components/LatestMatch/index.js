// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    result,
    umpire,
    venue,
  } = matchDetails
  console.log(umpire)
  return (
    <div className="latest-match-bg-container">
      <div className="team-and-logo-container">
        <div className="team-container">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue-result">{venue}</p>
          <p className="venue-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest team ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr />
      <div className="match-details-container">
        <h1 className="headings">First Innings</h1>
        <p className="paras">{firstInnings}</p>
        <h1 className="headings">Second Innings</h1>
        <p className="paras">{secondInnings}</p>
        <h1 className="headings">Man Of The Match</h1>
        <p className="paras">{manOfTheMatch}</p>
        <h1 className="headings">Umpires</h1>
        <p className="paras">{umpire}</p>
      </div>
    </div>
  )
}
export default LatestMatch
