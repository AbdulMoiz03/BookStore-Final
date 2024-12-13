//import booklist.css
import Image from 'next/image';
import classes from './AllBookList.module.css';
import { useRouter } from 'next/router';
//import Image from 'next/image';
export default function AllBookList(props) {
    // consouterole.log(props.books);
    const router = useRouter();
    const btnHandler = (id) => {
        router.push(`/genre/${id}`);
    }
    const btnHandler2 = (id) => {
        router.push(`/books/${id}`);
    }
    return (
        <div>
            
            <ul className={classes.ul}>
                {
                    props.books.map((book) => (
                        <li key = {book.id} className={classes.li}>
                            {/* <Image src={`/images/${book.id}.jpg`} alt={book.title} width={200} height={300} /> */}
                            <h2 className={classes.h2}>Book Title: <strong>{book.title}</strong></h2>
                            {/* <p className={classes.p}>Book Description: {book.description}</p> */}
                            <p className={classes.p}>Book price: <strong>{book.price}</strong></p>
                            <p className={classes.p}>Book rating: <strong>{book.rating}</strong></p>
                            
                            <button className={classes.button} onClick={() => btnHandler(book.id)}>View Genres</button>
                            <button className={classes.button} onClick={() => btnHandler2(book.id)}>View Book Details</button>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    );

}