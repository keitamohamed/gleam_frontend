
interface Address {
    street?: string;
    city?: string;
    state?: string;
    zip?: string,
}

export interface TeacherInitialState {
    teacher: {
        id: number,
        name: string,
        gender: string,
        phone: string,
        dob: string
    },
    teachers: any[],
    auth: {
        authID: number,
        email: string
        password: string
    }
    addresses: any[],
    address: Address,
    message: any,
    error: any
}