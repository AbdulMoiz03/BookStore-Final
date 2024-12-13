import { useEffect, useState } from "react";
import classes from './allgenre.module.css';

export default function Genre() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch("/api/genres",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => res.json()).then(data => setGenres(data.genres)).then(console.log(genres));
    }, []);
    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "2.5em",
                    background: "lightBlue",
                }}
            >
                Book Mart
            </h1>
            <div className={classes.container}>
                <h1 className={classes.heading}>GENRE PAGE</h1>
                <div className={classes.genreList}>
                    {genres && genres.length > 0 ? (
                        genres.map((genre) => (
                            <div key={genre.id} className={classes.genreDetails}>
                                <p>
                                    <span>Genre ID:</span> {genre.id}
                                </p>
                                <p>
                                    <span>Genre:</span> {genre.name}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No genres found.</p>
                    )}
                </div>
            </div>
        </>

    )
}