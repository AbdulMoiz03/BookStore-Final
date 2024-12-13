import classes from './Authorlist.module.css';

export default function Authorlist(props) {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , background: "lightBlue"}}>Book Mart</h1>
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , fontFamily: "fantasy"}}>Author Detail Page</h1>
            <ul className={classes.ul}>
                {
                    props.authors.map((author) => (
                        <li className={classes.li} key={author.id}>
                            <h2 className={classes.h2}><strong>Author Name: </strong>{author.name}</h2>
                            <p className={classes.p}><strong>Author Biography:</strong> {author.biography}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}