
export interface CSVData {
    [key: string]: string;
}
export interface ICSVContextProps {
    handleCancelImport: () => void
    handleFormSubmit: (event: React.FormEvent) => Promise<any>
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    error: string | undefined
    csvData: CSVData[]
    setName: React.Dispatch<React.SetStateAction<string>>
    success: string | undefined
}