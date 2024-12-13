import Image from "next/image";
import localFont from "next/font/local";
import { getfeaturedBooks } from "@/Data";
import Booklist from "@/components/books/Booklist";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const { user } = useContext(AuthContext);
  const fbooks = getfeaturedBooks();
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , background: "lightBlue"}}>Book Mart</h1>
      {user ? (
                <div>
                    <p>Logged in as: {user.email}</p>
                    {/* <LogoutButton /> */}
                </div>
            ) : (
                <p>Please log in to access personalized features.</p>
            )}
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5em" , fontFamily: "fantasy"}}>Featured Books</h1>
      <Booklist books={fbooks} />
      
    </div>
  );
}

