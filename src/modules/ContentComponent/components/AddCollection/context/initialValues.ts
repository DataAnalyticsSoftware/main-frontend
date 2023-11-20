import { IAddCollection } from "./types";

export const initialValue: IAddCollection = {
    error: undefined,
    handleFormSubmit: () => fetch(''),
    setName: () => {},
    setDescription: () => {},
    success: undefined
}