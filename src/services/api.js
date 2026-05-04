const API_URL = "https://rest-api-url-vbackend.vercel.app/api/userRouter";

export const getStudents = () => fetch(API_URL).then(res => res.json());
export const addStudent = (data) => fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});