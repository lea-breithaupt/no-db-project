
const UpcomingDescription = ({ editing }) => {
    return editing ? (
        <td>
            <input 
                type="text"
                value="description"
            />
        </td>
      ) : (
        <td>{value}</td>
      )
    }

export default UpcomingDescription