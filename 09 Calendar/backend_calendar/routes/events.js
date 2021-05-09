const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validarJWT } = require('../controllers/validar-token-');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();


/* ------------------------------ */
/*  Events */
/*  /api/events */
/* ------------------------------ */

// For validate all  bellow routes 
router.use(validarJWT);

router.get('/', getEvents);

// create a new event
router.post(
    '/',
    [
        check('title', 'The title is required').not().isEmpty(),
        // check('start', 'The initial date is required').custom(isDate),
        // check('end', 'The finish date is required').custom(isDate),
        validarCampos
    ],
    createEvent);

// update the event
router.put('/:id', updateEvent);

// Delete a event
router.delete('/:id', deleteEvent);


module.exports = router;
