import { useState, useEffect } from "react";
import { getStudents, addStudent, updateStudent, deleteStudent} from "../services/studentService";


export function useStudents(){
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [status, setStatus] = useState({type:'', message:''});


    const notify = (type, message) => {
        setStatus({type, message});
        setTimeout(() => setStatus({type:'', message:''}), 3000);
    };


    const fetchStudents = async () => {
        try{
            const data = await getStudents();
            setStudents(data);
        }catch(err){
            notify('error', 'failed to fetch student details');
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);


    const handleAdd = async (studentData) => {
        if (!studentData.name || !studentData.phone) {
            notify("error", "Name and phone are required.");
            return;
        }
        try{
            await addStudent(studentData);
            await fetchStudents();
            notify('success', 'students added successfully');
        }catch(err){
            notify('error', err.message || 'failed to add students');
        }
    };


    const handleUpdate = async(id, studentData) => {
        try{
            await updateStudent(id, studentData);
            await fetchStudents();
            setEditingStudent(null);
            notify('success', 'students updated successfully');
        }catch(err){
            notify('error', err.message || 'failed to update student details')
        }
    };


    const handleDelete = async (id) => {
        try{
            await deleteStudent(id);
            await fetchStudents();
            notify('success', 'students deleted successfully');
        }catch(err){
            notify('error', 'failed to delete student')
        }
    };


    return {
        students, editingStudent, status, setEditingStudent,
        handleAdd, handleUpdate, handleDelete
    };

}