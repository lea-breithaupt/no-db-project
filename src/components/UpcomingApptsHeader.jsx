
const UpcomingApptsHeader = ({ editing }) => {
  return editing ? (
        <tr>
          <th>Select a Date:</th>
          <th>Select a Time:</th>
          <th>Main Services:</th>
          <th>Additional Services:</th>
          <th>Add a description to let us know your vision!:</th>
        </tr>
      ) : (
        <tr>
          <th>Date:</th>
          <th>Time:</th>
          <th>Main Services:</th>
          <th>Additional Services:</th>
          <th>Your Vision:</th>
        </tr>
      )
}

export default UpcomingApptsHeader