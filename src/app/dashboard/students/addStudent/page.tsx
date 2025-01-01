"use client"
import { db } from "@/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function AddStudent() {
    // Initial studentForm state/object
    const [studentForm, setStudentForm] = useState({
        name: '',
        fatherName: '',
        rollNo: '',
        grade: '',
        gender: 'boy',
        contactNo: '',
        dob: '',
        emergencyContact: '',
        address: ''
    });


    // handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setStudentForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const saveDataToFirebase = async () => { // data storing in firebase
        try {
            const obj = {
                name: studentForm.name,
                fatherName: studentForm.fatherName,
                rollNo: studentForm.rollNo,
                grade: studentForm.grade,
                gender: studentForm.gender,
                contactNo: studentForm.contactNo,
                dob: studentForm.dob,
                emergencyContact: studentForm.emergencyContact,
                address: studentForm.address
            }
            const collectionRef = collection(db, "studentsData");
            const docRef = await addDoc(collectionRef, obj);

            console.log("Student Data", docRef);

        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // form submit
        e.preventDefault();
        saveDataToFirebase();
        setStudentForm(studentForm);
        console.log(studentForm);
    };

    return (
        <div className="mt-20">
            <h1 className="text-center text-3xl">Student Form</h1>
            <form className="max-w-md mx-auto mt-20 shadow-lg" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                        placeholder=" "
                        value={studentForm.name}
                        onChange={handleChange}
                        required
                    />
                    <label
                        htmlFor="name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Student Name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="fatherName"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                        placeholder=" "
                        value={studentForm.fatherName}
                        onChange={handleChange}
                        required
                    />
                    <label
                        htmlFor="fatherName"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Father Name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="contactNo"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                        placeholder=" "
                        value={studentForm.contactNo}
                        onChange={handleChange}
                        required
                    />
                    <label
                        htmlFor="contactNo"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Contact Number (123-456-7890)
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="address"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                        placeholder=" "
                        value={studentForm.address}
                        onChange={handleChange}
                        required
                    />
                    <label
                        htmlFor="address"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Address
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="rollNo"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                        placeholder=" "
                        value={studentForm.rollNo}
                        onChange={handleChange}
                        required
                    />
                    <label
                        htmlFor="rollNo"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Roll Number
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="grade"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                        placeholder=" "
                        value={studentForm.grade}
                        onChange={handleChange}
                        required
                    />
                    <label
                        htmlFor="grade"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Grade
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="tel"
                        name="emergencyContact"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                        placeholder=" "
                        value={studentForm.emergencyContact}
                        onChange={handleChange}
                        required
                    />
                    <label
                        htmlFor="emergencyContact"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Emergency Contact
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-rose-600 text-white rounded-md"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
