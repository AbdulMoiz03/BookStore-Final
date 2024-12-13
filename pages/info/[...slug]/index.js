import { useRouter } from 'next/router';
import classes from './slug.module.css';

export default function Slug() {
    const r = useRouter();
    const { slug } = r.query;

    let content;

    if (!slug) {
        content = (
            <div>
                <h1>...Loading</h1>
            </div>
        );
    } else if (slug[0] === 'faqs') {
        content = (
            <div>
                <h1 className={classes.sectionTitle}>FAQs Page</h1>
                <p className={classes.text}>Find answers to frequently asked questions.</p>
                <ul>
                    <li>What is Book Mart?</li>
                    <li>How can I purchase books?</li>
                    <li>Do you offer international shipping?</li>
                    <li>How can I contact customer support?</li>
                    <li>What is your return policy?</li>
                </ul>
            </div>
        );
    } else if (slug[0] === 'support') {
        content = (
            <div>
                <h1 className={classes.sectionTitle}>Support Page</h1>
                <p className={classes.text}>If you need help, contact our support team.</p>
                <ul>
                    <li>Email: 123@gmail.com</li>
                    <li>Phone: 123-456-7890</li>
                    <li>Hours: Mon-Fri, 9am-5pm</li>
                </ul>
            </div>
        );
    } else {
        content = (
            <>
                <h1 className={`${classes.sectionTitle} ${classes.notFound}`}>Section Not Found</h1>
                <p className={classes.text}>We couldn't find the section you were looking for.</p>
            </>
        );
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Book Mart</h1>
            {content}
        </div>
    );
}
