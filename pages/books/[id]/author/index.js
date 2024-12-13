//Pre Rendred page
import { getauthorbyid, getallAuthors } from "@/Data";
import Authorlist from "@/components/Authorlist/Authorlist";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import withAuth from "@/hoc/withAuth";

function AuthorDetail() {
    const r = useRouter();
    const id = r.query.id;
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        fetch(`/api/authors/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => setAuthor(data.author)).then(console.log(author));
    }, [id]);

    if (!author) {
        return <h1>...Loading Author Detail</h1>
    }
    return (
        <div>
            <Authorlist authors={[author]} />
        </div>
    );
}

export default withAuth(AuthorDetail);

// export async function getStaticPaths() {
//     const allAuthors = await getallAuthors();
//     const paths = allAuthors.map((author) => ({
//         params: { id: author.id.toString() },
//     }));

//     return { paths, fallback: "blocking" };
// }

// // This function fetches data for each author based on the ID parameter
// export async function getStaticProps({ params }) {
//     const { id } = params;
//     const author = getauthorbyid(id);

//     // Return a 404 if the author doesn't exist
//     if (!author) {
//         return { notFound: true };
//     }

//     return {
//         props: {
//             author,
//         },
//     };
// }



//Not showing 404 page
// import { useRouter } from "next/router";
// import { getauthorbyid } from "@/Data";

// export default function authordetail() {
//     const r = useRouter();
//     const id = r.query.id;
//     const author = getauthorbyid(id);
//     console.log(id);
//     console.log(author);
//     if(!author){
//         return <h1>...Loading Author Detail</h1>
//     }
//     return (
//         <div>
//             <h1><strong>Author Detail Page</strong></h1>
//             <h2><strong>{author.name}</strong></h2>
//             <p>{author.biography}</p>

//         </div>
//     );
// }