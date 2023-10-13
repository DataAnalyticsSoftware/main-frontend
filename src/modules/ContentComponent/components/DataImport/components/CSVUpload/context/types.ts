
export interface CSVData {
    [key: string]: string;
}
export interface ICSVContextProps {
    handleCancelImport: () => void
    handleFormSubmit: (event: React.FormEvent) => Promise<any>
    handleDrop: (e: React.DragEvent) => void
    error: string | undefined
    csvData: CSVData[]
    setName: React.Dispatch<React.SetStateAction<string>>
    setDescription: React.Dispatch<React.SetStateAction<string>>
    success: string | undefined
    handleDragOver: any
}