import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const init = {
    reviews: [],
  };
  const { id } = useParams();
  const [books, setBooks] = useState(init);
  const [show, setShow] = useState(false);
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/books/${id}`);
      setBooks({ ...books, ...data });
    } catch (e) {
      setShow(true);
    }
  };
  if (show) return <Navigate to="*" />;
  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{books.title}</h2>
        <img className="image" src={books.imageUrl} alt="#" />
        <div className="author">{books.author}</div>
        <div className="description">{books.description}</div>
        <div className="price">{books.price}</div>
        <div className="section">{books.section}</div>
        <div className="isbnNumber">{books.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
          {books.reviews.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
