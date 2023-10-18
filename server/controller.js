let APPTS = [
    { id: 0, date: "10/20/2023", time: "10:30 AM", mainService: "trim", additionalService:"none", description: "Basic trim with layers" },
    { id: 1, date: "10/21/2023", time: "12:30 PM", mainService: "none", additionalService: "partial-color", description: "blonde highlights", description: "want to brighten up my hair around my face"},
    { id: 2, date: "10/22/2023", time: "2:30 PM", mainService: "major-cut", additionalService: "none", description: "want to take several inches off"},
    { id: 3, date: "11/04/2023", time: "1:30 PM", mainService: "none", additionalService: "volumizing-blow-out", description: "needing to get my hair done for an event"},
]

let globalId = 4

const handlerFunctions = {
    getAppointments: (req, res) => {
        res.send(APPTS)
    },

    addAppointment: (req, res) => {
        const { date, time, mainService, additionalService, description } = req.body

        const newBodyObj = {
            id: globalId,
            date: date,
            time: time,
            mainService: mainService,
            additionalService: additionalService,
            description: description
        }

        APPTS.push(newBodyObj)

        globalId++

        res.send(newBodyObj)
    }, 
        deleteAppointment: (req, res) => {
            const id = req.params.id

            APPTS = APPTS.filter((appointment) => appointment.id !== +id)

            res.send("Appointment Cancelled")
        },

        editAppointment: (req, res) => {
            const {id} = req.params
            const { date, time, mainService, additionalService, description } = req.body

            const index = APPTS.findIndex(appointment => appointment.id == id)

            appointmentItem.date = date
            appointmentItem.time = time
            appointmentItem.mainService = mainService
            appointmentItem.additionalService = additionalService
            appointmentItem.description = description

            res.send(appointmentItem)
        }
    
}

export default handlerFunctions