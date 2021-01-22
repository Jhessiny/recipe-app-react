import { useEffect, useState } from "react";
import Recipe from "./components/Recipe/Recipe";
import "./App.css";
import Nav from "./components/Nav/Nav";

const App = () => {
  const APP_ID = "c6b6bd05";
  const APP_KEY = "f54ca586f7e1cfc2df352459359393f7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Nav
        getSearch={(e) => getSearch(e)}
        changeSearch={(e) => setSearch(e.target.value)}
        search={search}
      />
      <div className="recipes-list">
        {recipes.length <= 0 ? <p>No recipe found. Search again.</p> : null}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed(2)}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
