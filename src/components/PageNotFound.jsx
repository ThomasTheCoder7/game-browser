
import Hero from "./Hero";
import { Link } from "react-router-dom";
const PageNotFound = ({ }) => {
     



     return (
          <>
               <Hero text={`if you trying to hack my page you suck !`} />
               <h2 className="text-light m-3">Say sorry to the Hedgehog and click on his photo to go back</h2>
               <Link to={"/"} className="d-flex justify-content-center">
               <img src="https://images.unsplash.com/photo-1568433154467-f5f907bf7741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="img-fluid w-50" />
               </Link>
               
          </>
     )
}

export default PageNotFound;