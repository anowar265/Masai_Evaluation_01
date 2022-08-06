import { useState, useEffect } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const init = {
    sortBy: "",
    type: 1,
  };
  const [books, setBooks] = useState([]);
  const [sorting, setSorting] = useState(init);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((res) => setBooks(res));
  };

  const onHandleSort = (sortBy, type) => {
    setSorting({ ...sorting, sortBy, type });
  };
  console.log(sorting);
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons onHandleSort={onHandleSort} />
      <div>
        {books
          .sort((a, b) =>
            sorting.sortBy === "price"
              ? sorting.type === 1
                ? a.price - b.price
                : b.price - a.price
              : sorting.sortBy === "title"
              ? sorting.type === 1
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
              : true
          )
          .map((item) => (
            <BookCard {...item} key={item.id} />
          ))}
      </div>
    </div>
  );
};
