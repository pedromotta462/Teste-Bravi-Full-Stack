export interface interfaceContacts{

    email: string,
    fone: string,
    id?: number,
    name: string,
    Contacts?: interfaceContacts[];

}

export interface ApiResponse {
    Contacts: interfaceContacts[];
    count: number;
}