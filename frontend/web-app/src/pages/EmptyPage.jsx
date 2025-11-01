import { Link } from "react-router-dom";
const EmptyPage = () =>{

    return(
        <>
            <h1> 404! This is an empty page</h1>
            <Link to={'/'}>Go Home</Link>
        </>
    );
};
export default EmptyPage;