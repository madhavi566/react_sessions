import Assignment8 from "./classBased/Assignment8";
import AssignmentClass from "./classBased/AssignmentClass";
import AssignmentClass2 from "./classBased/AssignmentClass2";

const Contact = () => {

    return (
        <>
        this is Contact     
        <Assignment8 name={"functional component from parent"}/>
        <AssignmentClass name={"class 1 from parent"}/>
        <AssignmentClass2 name={"class 2 from parent"}/>
        </>
    )
}

export default Contact;