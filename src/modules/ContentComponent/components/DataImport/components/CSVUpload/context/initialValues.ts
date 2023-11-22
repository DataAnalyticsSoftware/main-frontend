import { ICSVContextProps } from "./types";

export const initialValue: ICSVContextProps = {
    csvData: [],
    error: undefined,
    handleCancelImport: () => {},
    handleDragOver: () => {},
    handleDrop: () => {},
    handleFormSubmit: () => fetch(''),
    setName: () => {},
    setDescription: () => {},
    success: undefined,
    fileDropped:false, 
    setFileDropped:() => {},
    handleClickDrop: () => {}
}