import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'
import axios from 'axios'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from './controller.js'

const APPTS = [
    { id: 0, date: "10/20/2023", time: "10:30 AM", mainService: "trim", additionalService:"none", description: "Basic trim with layers" },
    { id: 1, date: "10/21/2023", time: "12:30 PM", mainService: "none", additionalService: "partial-color", description: "blonde highlights", description: "want to brighten up my hair around my face"},
    { id: 2, date: "10/22/2023", time: "2:30 PM", mainService: "major-cut", additionalService: "none", description: "want to take several inches off"},
    { id: 3, date: "11/04/2023", time: "1:30 PM", mainService: "none", additionalService: "volumizing-blow-out", description: "needing to get my hair done for an event"},
]

app.get('/appointments', handlerFunctions.getAppointments)
app.post('/addAppointment', handlerFunctions.addAppointment)
app.delete('/deleteAppointment/:id', handlerFunctions.deleteAppointment)
app.put('/editAppointment/:id', handlerFunctions.editAppointment)

ViteExpress.listen(app, 5173, () => console.log(`http://localhost:5173`))