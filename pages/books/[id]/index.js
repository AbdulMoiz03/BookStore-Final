// import { getauthorbyid, getbookbyid, getgenres, getAllBooks } from "@/Data";
import Detailbooklist from "@/components/BookDetailList/BookDetailList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import withAuth from "@/hoc/withAuth";

// export async function getStaticPaths() {
//     const allBooks = await getAllBooks(); 
//     const paths = allBooks.map((book) => ({
//         params: { id: book.id.toString() },
//     }));

//     return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//     const { id } = params;
//     const book = getbookbyid(id);
//     const author = getauthorbyid(id);
    
//     // Return 404 if book not found
//     if (!book) {
//         return { notFound: true };
//     }

//     const genre = getgenres(book.genreId);

//     return {
//         props: {
//             book,
//             author,
//             genre,
//         },
//     };
// }


// Component rendering the book details
function BookDetail() {
    const r = useRouter();
    const id = r.query.id;
    const [book, bookstate] = useState([]);

    useEffect(() => {
        fetch(`/api/books/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => res.json()).then(data => bookstate(data.book)).then(console.log(book));
    }, [id]);

    if(!book){
        return <h1>...Loading Book Detail</h1>
    }
    
    return (
        <div>
            <Detailbooklist books = {[book]}></Detailbooklist>

            {/* <h1><strong>BOOK DETAIL PAGE</strong></h1>
            <h2><strong>{book.title}</strong></h2>
            <h3><strong>{author.name}</strong></h3>
            <p>{book.description}</p>
            <p>Genre: {genre.name}</p>
            <p>Price: ${book.price}</p>
            <p>Rating: {book.rating}</p> */}
        </div>
    );
}

export default withAuth(BookDetail);






//Client Side Rendering
// import { useRouter } from "next/router"
// import { getauthorbyid, getbookbyid, getgenres } from "@/Data"

// export default function bookdetail() {
//     const r = useRouter()
//     const id = r.query.id
//     const book = getbookbyid(id)
//     const author = getauthorbyid(id)
//     //const genreid = book.genreId
    
//     if(!book){
//         return <h1>...Loading Book Detail</h1>
//     }

//     const genreid = book.genreId
//     const genre = getgenres(genreid)
//     return (
//         <div>
//             <h1><strong>BOOK DETAIL PAGE</strong></h1>
//             <h2><strong>{book.title}</strong></h2>
//             <h3><strong>{author.name}</strong></h3>
//             <p>{book.description}</p>
//             <p>Genre: {genre.name}</p>
//             <p>Price: ${book.price}</p>
//             <p>Rating: {book.rating}</p>
//         </div>
//     )
// }