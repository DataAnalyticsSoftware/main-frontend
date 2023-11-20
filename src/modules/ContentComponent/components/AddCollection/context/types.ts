
export interface IAddCollection {
    handleFormSubmit: (event: React.FormEvent) => Promise<any>
    error: string | undefined
    setName: React.Dispatch<React.SetStateAction<string>>
    setDescription: React.Dispatch<React.SetStateAction<string>>
    success: string | undefined
}