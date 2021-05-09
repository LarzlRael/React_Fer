import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    // using the useRef when the component is mounted
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {


                if (isMounted.current) {
                    // simulate 4 secods delay request
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            }).catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info prro',
                });
            } )
            
    }, [url])

    return state;
}
