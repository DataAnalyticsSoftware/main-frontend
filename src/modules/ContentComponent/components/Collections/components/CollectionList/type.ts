export interface IDataCollection {
    created: string
    data_information: IDataInformation[]
    id: string
    modified: string
    name: string
    description: string
    user_id: string
}

export interface IDataInformation {
    id: string
    name: string
}