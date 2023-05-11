import { useRouteError } from "react-router-dom";

const Error = () => {
    const {status ,statusText} = useRouteError();
return(
    <>
        <h1> OOps !! Something went wrong</h1>
        <h2>{status} - {statusText}</h2>
        <h3> Please contact system administrator</h3>
    </>
)

}

export default Error;