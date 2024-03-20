// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {name, id, teamLogo} = props
  console.log(name)
  return (
    <Link className="link-style" to={`/team-matches/${id}`}>
      <li className="team-list">
        <img src={teamLogo} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
