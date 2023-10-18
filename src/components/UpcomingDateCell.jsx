import DatePicker from "react-date-picker"

const UpcomingDateCell = ({ editing, selectDate, setSelectedDate }) => {
  return editing ? (
    <td>
        <DatePicker 
            selected={selectDate} onChange={(date) => setSelectedDate(date)}
        />
    </td>
  ) : (
    <td>{selectDate}</td>
  )
}

export default UpcomingDateCell