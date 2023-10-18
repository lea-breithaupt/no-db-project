import {useState} from 'react'
import ScheduleAppts from './ScheduleAppts'
import UpcomingApptsTitle from './UpcomingApptsTitle'
import UpcomingApptsHeader from './UpcomingApptsHeader'
import UpcomingDateCell from './UpcomingDateCell'
import EditBookingBtns from './EditBookingBtns'
import UpcomingTimeCell from './UpcomingTimeCell'
import UpcomingMainService from './UpcomingMainService'
import UpcomingAdditionalServices from './UpcomingAdditionalServices'
import UpcomingDescription from './UpcomingDescription'

const UpcomingAppts = () => {
  
  const [schedulingIsVisible, setSchedulingIsVisible] = useState(false)

  return (
    <table>
        <thead>
          <UpcomingApptsTitle />
        </thead>

        <tbody>
            <UpcomingApptsHeader editing={true} />
            <UpcomingDateCell editing={true} />
            <UpcomingTimeCell editing={true} />
            <UpcomingMainService editing={true} /> 
            <UpcomingAdditionalServices editing={true} />
            <UpcomingDescription editing={true} />
            <EditBookingBtns editing={true} />
        </tbody>

        <tfoot>
            <td>
                <button onClick={() => setSchedulingIsVisible(!schedulingIsVisible)}>Book New Appointment!</button>
                {schedulingIsVisible && <ScheduleAppts />}
            </td>
        </tfoot>
    </table>
  )
}

export default UpcomingAppts