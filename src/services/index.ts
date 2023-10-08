// En tu servicio que realiza la solicitud GET
import { useContext } from "react";
import { GenericContext } from "../context/GenericContext";


export const getCollectionData = async () => {
    const { token, setData }: any = useContext(GenericContext)

    fetch(`http://79.143.94.15:8001/api/data`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setData(data); // Actualiza el estado del contexto con la data
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
};