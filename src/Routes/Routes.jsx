import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/section/:id" element={<Section />} />
        <Route path="/bookdetailspage/:id" element={<BookDetailsPage />} />
        <Route exact path="*" element={<NotFound />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
