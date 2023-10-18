
export const UpcomingMainService = ({ editing, mainService, setMainService }) => {
  return editing ? (
    <td>
        <select onChange={(e) => setMainService(e.target.value)}>
            <option value="trim">Trim - 30min</option>
            <option value="major-cut">Major Cut - 60min</option>
            <option value="none">None</option>
        </select>
    </td>
  ) : (
    <td>{mainService}</td>
  )
}
