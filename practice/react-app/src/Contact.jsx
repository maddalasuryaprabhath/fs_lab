
import Student from './props';

function Contact() {
    const studentName = "Ravi";
    const studentAge = 20;

    const student2 = "Suresh";
    const studentAge2 = 22;

    return (
        <>
        <h1> Props inside Contacts Page</h1>
        <Student
            name={studentName}
            age={studentAge}
            />
        <Student
            name={student2}
            age={studentAge2}
            />
            </>
    );

}

export default Contact;