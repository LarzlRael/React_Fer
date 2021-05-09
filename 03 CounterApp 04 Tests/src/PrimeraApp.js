import PropTypes from 'prop-types';
// Functional components
const PrimeraApp = ({ saludo, subtitulo }) => {



    const array = [1, 2, 3];

    const persona = {
        nombre: 'Larz',
        apellido: 'xd'
    }
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(persona,null,3)}</pre> */}
            <p>{subtitulo}</p>
            <span>hola mundo 2</span>
        </>
    )
}

// default properties
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'I am a default subtitle '
}
export default PrimeraApp;