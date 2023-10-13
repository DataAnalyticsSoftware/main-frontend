import { ICSVContextProps } from "./types";

export const initialValue: ICSVContextProps = {
    csvData: [],
    error: undefined,
    handleCancelImport: () => {},
    handleFileChange: () => {},
    handleFormSubmit: () => fetch(''),
    setName: () => {},
    success: undefined
}