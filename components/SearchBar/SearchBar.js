// import React, { useRef, useState } from 'react';
// import { useRouter } from 'next/router';
// import classes from './SearchBar.module.css';

// const SearchBar = () => {
//     const search = useRef();
//     const [searchResult, setSearchResult] = useState([]);
//     const router = useRouter();

//     function SearchHandler(event) {
//         event.preventDefault();
//         const enteredSearch = search.current.value;
        
//         fetch('/api/searchbar', {
//             method: 'POST',
//             body: JSON.stringify({ search: enteredSearch }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             setSearchResult(data.books);
//             if (data.books.length > 0) {
//                 // Redirect to the first book's detail page
//                 router.push(`/books/${data.books[0].id}`);
//             } else {
//                 alert('No books found!');
//             }
//         })
//         .catch(err => {
//             console.error('Error searching for books:', err);
//         });
//     }

//     return (
//         <div className={classes.searchBarContainer}>
//             <div className={classes.searchBar}>
//                 <input
//                     type="text"
//                     placeholder="Enter Book name"
//                     className={classes.searchInput}
//                     ref={search}
//                 />
//                 <button className={classes.searchButton} onClick={SearchHandler}>
//                     &#128269;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SearchBar;



import React, { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/AuthContext';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    const search = useRef();
    const [searchResult, setSearchResult] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const { user } = useContext(AuthContext);
    const router = useRouter();

    const SearchHandler = (event) => {
        event.preventDefault();
        const enteredSearch = search.current.value;

        // Store search history
        if (user) {
            fetch('/api/history', {
                method: 'POST',
                body: JSON.stringify({ email: user.email, search: enteredSearch }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Fetch search results
        fetch('/api/searchbar', {
            method: 'POST',
            body: JSON.stringify({ search: enteredSearch }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setSearchResult(data.books);
                if (data.books.length > 0) {
                    router.push(`/books/${data.books[0].id}`);
                } else {
                    alert('No books found!');
                }
            })
            .catch((err) => {
                console.error('Error searching for books:', err);
            });
    };

    const ViewHistoryHandler = () => {
        if (user) {
            fetch(`/api/history?email=${encodeURIComponent(user.email)}`)
                .then((res) => res.json())
                .then((data) => {
                    setSearchHistory(data.history);
                    setShowHistory(true);
                })
                .catch((err) => {
                    console.error('Error fetching search history:', err);
                });
        } else {
            alert('Please log in to view your search history.');
        }
    };

    return (
        <div className={classes.searchBarContainer}>
            <div className={classes.searchBar}>
                <input
                    type="text"
                    placeholder="Enter Book name"
                    className={classes.searchInput}
                    ref={search}
                />
                <button className={classes.searchButton} onClick={SearchHandler}>
                    &#128269;
                </button>
                <button className={classes.historyButton} onClick={ViewHistoryHandler}>
                    View History
                </button>
            </div>

            {showHistory && (
                <div className={classes.historyCard}>
                    <h3>Search History</h3>
                    {searchHistory.length > 0 ? (
                        <ul>
                            {searchHistory.map((query, index) => (
                                <li key={index}>{query}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No history available.</p>
                    )}
                    <button onClick={() => setShowHistory(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
