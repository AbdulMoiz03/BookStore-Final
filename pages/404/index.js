import classes from './Notfound.module.css';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>404</h1>
            <h2 className={classes.subHeading}>Page Not Found</h2>
            <p>We're sorry, but the page you're looking for doesn't exist.</p>
            <Link href="/" passHref>
                <button className={classes.homeButton}>Home Page</button>
            </Link>
        </div>
    );
}
