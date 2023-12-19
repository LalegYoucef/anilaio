import React from "react";
import "./SearchBar.css"


function SearchBar() {
  return (
    <>

        <div class="SecondContainer">
   <div class="search">
   <form action="/search.html" class="search-wrapper cf">
        <input type="text" placeholder="Search" required=""></input>
        <button type="submit"> <span class="fontawesome-search"></span>
        </button>
    </form>
   </div>
</div>
    </>

  );
}

export default SearchBar;
