import DatePicker from 'react-date-picker'

const DateCell = ({ scheduling, selectDate, setSelectDate }) => {

  return scheduling ?(
    <td>
        <DatePicker 
            selected={selectDate} onChange={(date) => setSelectDate(date)}
        />
    </td>
  ) : (
    <td>{selectDate}</td>
  )
}

export default DateCell