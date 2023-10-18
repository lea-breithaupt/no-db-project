import TimePicker from "react-time-picker"

const TimeCell = ({ scheduling, time, setTime }) => {

  return scheduling ? (
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

export default TimeCell