import { IAddCollection } from "./types";

export const initialValue: IAddCollection = {
    error: undefined,
    handleFormSubmit: () => fetch(''),
    setName: () => {},
    setDescription: () => {},
    success: undefined,
    dataSelected: [],
    setDataSelected: () => {},
    id: '',
    setId: () => {},
    description: '',
    name: ''
}