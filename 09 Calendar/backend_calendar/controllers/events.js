const { response } = require("express");
const { validarCampos } = require("../middlewares/validar-campos");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {

    const events = await Event.find().populate('user', 'name');

    res.json({
        ok: true,
        events
    })

}
const createEvent = async (req, res = response) => {

    // verify if there is the event
    const evento = new Event(req.body);

    try {
        evento.user = req.uid;
        const eventSave = await evento.save();

        res.json({
            ok: true,
            evento: eventSave,
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            mgs: 'Error talk with the admin',

        })
    }



}
const updateEvent = async (req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById(eventoId);

        if (!event) {
            res.status(404).json({
                ok: false,
                msg: 'The event with that id doest exist'
            });
        }
        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'You dont have privileges to edit this event'
            });
        } else {
            console.log('error event ' + event);
        }
        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventUptaded = await Event.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

        return res.json({
            ok: true,
            evento: eventUptaded
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            mgs: 'Error talk with the admin',
        })
    }

}
const deleteEvent = async (req, res = response) => {


    const eventoId = req.params.id;
    const uid = req.uid;


    try {
        const event = await Event.findById(eventoId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'The event with that id doest exist'
            });
        }
        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'You dont have privileges to edit this event'
            });
        }

        const eventUptaded = await Event.findByIdAndDelete(eventoId);

        res.json({
            ok: true,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            mgs: 'Error talk with the admin',
        })
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}


