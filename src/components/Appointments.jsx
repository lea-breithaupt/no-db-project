import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import UserProileName from './UserProfileName'
import UpcomingAppts from './UpcomingAppts'
import {useState} from 'react'

const Appointments = () => {
  const [selectDate, setSelectDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [mainService, setMainService] = useState('trim')
  const [additionalService, setAdditionalService] = useState('partial-color')

  return (
    <div>
      <UserProileName />
      <UpcomingAppts />
    </div>
  )
}

export default Appointments