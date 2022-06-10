import axios from "axios";


const instance=axios.create({
    withCredentials:true,
    headers: {"API-KEY": "9d9825bb-ccb6-4efe-8fcf-e888d69867c3"},
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers (pageSize = 1,
                currentPage = 10)
    {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`
        ).then(response => {
            return response.data;
        })
    },
    UnFollowUsers (id:number)
    {
        return instance.delete(`follow/${id}`).then(response=> {
            return response.data
        })

    },
    followUsers (id:number)
    {
        return instance.post(`follow/${id}`).then(response=> {
            return response.data
        })

    }
}