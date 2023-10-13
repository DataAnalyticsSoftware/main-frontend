// En tu servicio que realiza la solicitud GET
import { useContext } from "react";
import { GenericContext } from "../context/GenericContext";


export const getCollectionData = async () => {
    const { token, webDataNetsRequest } = useContext(GenericContext)

    webDataNetsRequest('api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
          //  setData(data); // Actualiza el estado del contexto con la data
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
};

{/*export const getDataFromAnyCollection = async (props: any) => {
    const { setDataCollection, token, getIdCollection }: any = useContext(GenericContext)

    fetch(`https://www.main-backend.webdatanets.com/api/data/${props}`, {
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
            setDataCollection(data); // Actualiza el estado del contexto con la data
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
};*/}