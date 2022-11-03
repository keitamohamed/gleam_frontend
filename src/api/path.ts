
export const ApiPath = {
    LOGIN: ("/login"),
    GET_TEACHER: (id: number) => `teacher/find_all`,
    NEW_ADDRESS: (id: number, path: string) => `${path}/add-address/${id}`,
    DELETE_ADDRESS: (id: number, aID: number, path: string) => `${path}/delete-address/${id}/${aID}`,

    // TEACHER API PATH
    UPDATE_TEACHER_ADDRESS: ("teacher/update-address"),

    //MAJOR
    GET_MAJOR: ('major/lists')

}