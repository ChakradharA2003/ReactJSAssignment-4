// Write your code here
import './index.css'

const MatchCard = props => {
  const {competingTeamLogo, competingTeam, result, matchStatus} = props
  return (
    <li className="match-card-list">
      <img
        src={competingTeamLogo}
        alt={`competing match ${competingTeam}`}
        className="competing-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`${matchStatus}-status`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
