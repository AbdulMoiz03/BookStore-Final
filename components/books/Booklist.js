//import booklist.css

// import Image from 'next/image';
// import classes from './booklist.module.css';
// import { useRouter } from 'next/router';
// //import Image from 'next/image';
// export default function booklist(props) {
//     // consouterole.log(props.books);
//     const router = useRouter();
//     const btnHandler = (id) => {
//         router.push(`/genre/${id}`);
//     }
//     const btnHandler2 = (id) => {
//         router.push(`/books/${id}`);
//     }

//     const btnHandler3 = () => { 
//         router.push(`/books`);
//     }

//     const btnHandler4 = () => {
//         router.push(`/info`);
//     }

//     const btnHandler5 = () => {
//         router.push(`/allauthor`);
//     }
//     return (
//         <div>
            
//             <ul className={classes.ul}>
//                 {
//                     props.books.map((book) => (
//                         <li key = {book.id} className={classes.li}>
//                             {/* <Image src={`/images/${book.id}.jpg`} alt={book.title} width={200} height={300} /> */}
//                             <h2 className={classes.h2}>Book Title: <strong>{book.title}</strong></h2>
//                             {/* <p className={classes.p}>Book Description: {book.description}</p> */}
//                             <p className={classes.p}>Book price: <strong>{book.price}</strong></p>
//                             <p className={classes.p}>Book rating: <strong>{book.rating}</strong></p>
                            
//                             <button className={classes.button} onClick={() => btnHandler(book.id)}>View Genres</button>
//                             <button className={classes.button} onClick={() => btnHandler2(book.id)}>View Book Details</button>
//                         </li>
                        
//                     ))
//                 }
//             </ul>
//             <div className={classes.buttonRow}>
//             <div className={classes.buttonContainer}>
//                 <button className={classes.button2} onClick={() => btnHandler3()}> 
//                     View All Books
//                 </button>

//             </div>

//             <div className={classes.buttonContainer}>
//             <button className={classes.button2} onClick={() => btnHandler5()}>View All Authors</button>
//             </div>

//             <div className={classes.buttonContainer}>
//             <button className={classes.button2} onClick={() => btnHandler4()}>View Info Page</button>
//             </div>

            
//             </div>
//         </div>
//     );

// }

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './booklist.module.css';
import SearchBar from '../SearchBar/SearchBar';
import LogoutButton from '../Logout/Logout';

export default function Booklist(props) {
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);

    // Load dark mode preference from local storage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
        setDarkMode(savedDarkMode);
        document.documentElement.classList.toggle('dark', savedDarkMode);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('dark-mode', newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    // Button Handlers
    const btnHandler = (id) => router.push(`/genre/${id}`);
    const btnHandler2 = (id) => router.push(`/books/${id}`);
    const btnHandler3 = () => router.push(`/books`);
    const btnHandler4 = () => router.push(`/info`);
    const btnHandler5 = () => router.push(`/allauthor`);
    const btnHandler6 = () => router.push(`/genre`);
    return (
        <div>
            <LogoutButton />
            <SearchBar />
            <button onClick={toggleDarkMode} className={`${classes.button} ${classes.toggleButton}`}>
                {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>

            <ul className={classes.ul}>
                {props.books.map((book) => (
                    <li key={book.id} className={classes.li}>
                        <h2 className={classes.h2}>Book Title: <strong>{book.title}</strong></h2>
                        <p className={classes.p}>Book price: <strong>{book.price}</strong></p>
                        <p className={classes.p}>Book rating: <strong>{book.rating}</strong></p>
                        <button className={classes.button} onClick={() => btnHandler(book.id)}>View Genres</button>
                        <button className={classes.button} onClick={() => btnHandler2(book.id)}>View Book Details</button>
                    </li>
                ))}
            </ul>

            <div className={classes.buttonRow}>
                <button className={classes.button2} onClick={btnHandler3}>View All Books</button>
                <button className={classes.button2} onClick={btnHandler5}>View All Authors</button>
                <button className={classes.button2} onClick={btnHandler6}>View All Genres</button>
                <button className={classes.button2} onClick={btnHandler4}>View Info Page</button>
                
            </div>
        </div>
    );
}
