//import booklist.css
import Image from 'next/image';
import classes from './BookDetailList.module.css';
import { useRouter } from 'next/router';

//import Image from 'next/image';
export default function Detailbooklist(props) {
    
    const r = useRouter();
    const btnHandler = (id) => {
        r.push(`/books/${id}/author`);
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , background: "lightBlue"}}>Book Mart</h1>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , fontFamily: "fantasy"}}>Book Detail Page</h1>
            <ul className={classes.ul}>
                {
                    props.books.map((book) => (
                        <li key = {book.id} className={classes.li}>
                            {/* <Image src={`/images/${book.id}.jpg`} alt={book.title} width={200} height={300} /> */}
                            <h2 className={classes.h2}>Book Title: <strong>{book.title}</strong></h2>
                            <p className={classes.p}>Book Description: {book.description}</p>
                            <p className={classes.p}>Book price: <strong>{book.price}</strong></p>
                            <p className={classes.p}>Book rating: <strong>{book.rating}</strong></p>
                            <button className={classes.button} onClick={() => btnHandler(book.id)}>View Author Detail</button>
                        
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    );

}