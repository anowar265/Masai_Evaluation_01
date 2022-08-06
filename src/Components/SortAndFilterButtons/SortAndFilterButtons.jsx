import { useState } from "react";

export const SortAndFilterButtons = ({ onHandleSort }) => {
  return (
    <div className="sortButtons">
      {/*
          Create 4 sorting buttons here to sort by following criteria:
          sort title in Ascending order  class: sortByTitleAsc
          sort title in Descending order class: sortByTitleDesc
          sort price asending order      class: sortByPriceAsc
          sort price descending order    class: sortByPriceDesc
          on every button click, call the reusable sorting function
          you received from Parent component, 
          and sort the data.
        */}
      <button
        className="sortByTitleAsc"
        onClick={() => {
          onHandleSort("title", 1);
        }}
      >
        sortByTitleAsc
      </button>
      <button
        className="sortByTitleDesc"
        onClick={() => {
          onHandleSort("title", -1);
        }}
      >
        sortByTitleDesc
      </button>
      <button
        className="sortByPriceAsc"
        onClick={() => {
          onHandleSort("price", 1);
        }}
      >
        sortByPriceAsc
      </button>
      <button
        className="sortByPriceDesc"
        onClick={() => {
          onHandleSort("price", -1);
        }}
      >
        sortByPriceDesc
      </button>
    </div>
  );
};
