
const DescriptionCell = ({ scheduling }) => {
  return scheduling ? (
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

export default DescriptionCell