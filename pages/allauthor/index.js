//Implemetation through CSR

import { useEffect, useState } from "react";
// import { getallAuthors } from "@/Data";
import Authorlist from "@/components/AllAuthorList/AllAuthorList";

export default function AllAuthor() {
    const [authors, setAuthors] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("/api/authors",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            setAuthors(data.authors);
            setLoading(false);
        })
    }, []); 

    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em", background: "lightBlue" }}>Book Mart</h1>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em", fontFamily: "fantasy" }}>All Authors List</h1>
            
            {loading ? ( 
                <h2 style={{ textAlign: "center" }}>Loading authors...</h2>
            ) : (
                <Authorlist authors={authors} /> 
            )}
        </div>
    );
}






//Simple Implementation
// import { getallAuthors } from "@/Data";
// import Authorlist from "@/components/AllAuthorList/AllAuthorList";

// export default function AllAuthor() {
//     const authors = getallAuthors();
//     return (
//         <div>
//             <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , background: "lightBlue"}}>Book Mart</h1>
//             <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , fontFamily: "fantasy"}}>All Authors List</h1>
//             <Authorlist authors={authors} />
//         </div>
//     );
// }