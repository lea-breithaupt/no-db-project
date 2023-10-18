
const EditBtns = ({ editing, saveClick, editClick, cancelClick }) => {
    return editing ? (
      <td>
          <button onClick={saveClick}>Save!</button>
      </td>
    ) : (
      <td>
          <button onClick={cancelClick}>Cancel Appointment!</button>
          <button onClick={editClick}>Edit/Reschedule Appointment!</button>
      </td>
    )
  }
  
  export default EditBtns