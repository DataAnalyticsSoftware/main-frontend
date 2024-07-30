
export interface IAddCollection {
    handleFormSubmit: (event: React.FormEvent) => Promise<any>
    error: string | undefined
    setName: React.Dispatch<React.SetStateAction<string>>
    setDescription: React.Dispatch<React.SetStateAction<string>>
    success: string | undefined
    dataSelected: any 
    setDataSelected: any
    id: string | null
    setId: React.Dispatch<React.SetStateAction<string | null>>
    name: string
    description: string
}