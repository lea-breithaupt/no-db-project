import TimePicker from "react-time-picker"

const UpcomingTimeCell = ({ editing, time, setTime}) => {
  return editing ? (
    <td>
    <TimePicker 
        value={time}
        onChange={setTime}
    />
</td>
) : (
<td>{time}</td>
)
}

export default UpcomingTimeCell