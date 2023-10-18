import DateCell from './DateCell'
import TimeCell from './TimeCell'
import MainServiceCell from './MainServiceCell'
import AdditionalServiceCell from './AdditionalServiceCell'
import DescriptionCell from './DescriptionCell'
import BookApptBtn from './BookApptBtn'
import ScheduleTableHeader from './ScheduleTableHeader'
import ScheduleTitle from './ScheduleTitle'
import ComplimentaryMessage from './ComplimentaryMessage'

const ScheduleAppts = () => {
  return (
      <table>
        <thead>
          <ScheduleTitle />
          <ScheduleTableHeader/>
        </thead>

        <tbody>
          <DateCell scheduling={true}/>
          <TimeCell scheduling={true}/>
          <MainServiceCell scheduling={true}/>
          <AdditionalServiceCell scheduling={true} />
          <DescriptionCell scheduling={true} />
        </tbody>

        <tfoot>
          <BookApptBtn />
          <ComplimentaryMessage />
        </tfoot>
      </table>
  )
}

export default ScheduleAppts