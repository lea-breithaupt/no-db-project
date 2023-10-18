
const AdditionalServiceCell = ({ scheduling, additionalService, setAdditionalService }) => {

  return scheduling ? (
    <td>
        <select onChange={(e) => setAdditionalService(e.target.value)}>
            <option value="full-color">Full Color - 160min</option>
            <option value="partial-color">Partial Color - 90min</option>
            <option value="volumizing-blow-out">Volumizing Blow Out - 45min</option>
            <option value="none">None</option>
        </select>
    </td>
  ) : (
    <td>{additionalService}</td>
  )
}

export default AdditionalServiceCell