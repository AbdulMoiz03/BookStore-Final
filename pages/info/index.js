import classes from './info.module.css';

export default function Info() {
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Information Page</h1>
            <h1 className={classes.subheading}>Book mart</h1>
            <p className={classes.paragraph}>Welcome to <strong>Book Mart</strong> a haven for book lovers and a gateway to worlds beyond imagination. At Book Mart, we believe in the power of storytelling and the magic that lies within the pages of a book. Specializing in a diverse collection of novels, we curate selections for readers of all tastes, whether you're drawn to heart-stopping thrillers, soul-stirring romances, epic fantasies, or thought-provoking classics. Our shelves are filled with bestsellers, timeless masterpieces, and hidden gems from authors worldwide. For those seeking a quiet escape, Book Mart provides a cozy atmosphere where you can browse at your leisure, discovering new narratives or revisiting old favorites. Each novel in our store is handpicked with passion, ensuring quality and variety for every reader. Book Mart is more than just a store; its a community for readers, where book recommendations flow, and stories come alive. Join us in celebrating literature, and lets embark on countless adventures, one book at a time.</p>
            <h2 className={classes.subheading}>Location: </h2>
            <p className={classes.location}>Faisal Town Lahore</p>
        </div>
    )
}