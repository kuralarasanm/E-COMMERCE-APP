import error from "../images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif"

function Error () {
    return ( 
        <div className="error">
        {/* <h1>404 page Not Found </h1> */}
        <img src={error} alt="" />
        </div>
     );
}
 
export default Error;