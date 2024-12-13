// import { getAllBooks } from "@/Data"
import AllBookList from "@/components/AllBookList/AllBookList";
import { useEffect, useState } from "react";

export default function Books() {
    const [books, bookstate] = useState([]);
    // const book = getAllBooks();
    useEffect(() => {
        fetch("/api/books",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => res.json()).then(data => bookstate(data.books)).then(console.log(books));
    }, []);

    return (

        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em", fontFamily: "sans-serif", background: "lightblue" }}> Book Mart</h1>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em", fontFamily: "fantasy" }}>All Book List</h1>
            {books.length > 0 ? <AllBookList books={books} /> : null}
        </div>
    )
}