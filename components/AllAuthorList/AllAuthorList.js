import classes from './AllAuthorlist.module.css';

export default function Authorlist(props) {
    return (
        <div>
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