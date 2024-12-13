// import { getgenres, getbookbyid } from "@/Data"
import { useRouter } from "next/router"
import classes from './genre.module.css';
import { useEffect, useState } from "react";
// import Genrelist from "@/components/Authorlist/Genrelist/Genrelist"

export default function Genreid() {

    const r = useRouter();
    const id = r.query.id;

    const [genre, genrestate] = useState([]);
    useEffect(() => {
        fetch(`/api/genres/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => res.json()).then(data => genrestate(data.genre)).then(console.log(genre));
    }, [id]);

    if(!genre){
        return <h1>...Loading Genre Detail</h1>
    }

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em", background: "lightBlue" }}>Book Mart</h1>
            <div className={classes.container}>
                {/* <Genrelist genre={genres} book={books} />    */}
                <h1 className={classes.heading}>GENRE PAGE</h1>
                <div className={classes.genreDetails}>
                    <p><span>Genre ID:</span> {genre.id}</p>
                    <p><span>Genre:</span> {genre.name}</p>
                </div>
                {/* <div className={classes.bookDetails}>
                    <p><span>Book Title:</span> {books?.title}</p>
                </div> */}
                {/* <p>Book title: {books.title}</p>
            <p>genre: {genres.name}</p> */}
            </div>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const { id } = context.params;
//     const genres = getgenres(id)
//     const books = getbookbyid(id)
//     return {
//         props: {
//             genres: genres,
//             books: books
//         }
//     };
// }