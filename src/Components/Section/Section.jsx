import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
  `;

  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/books?section=${id}`
    );
    if (data.length === 0) setShow(true);
    setBooks([...data]);
  };
  if (show) return <Navigate to="*" />;
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          id
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {books.map((item) => (
          <BookCard {...item} key={item.id} />
        ))}
      </Main>
    </>
  );
};
