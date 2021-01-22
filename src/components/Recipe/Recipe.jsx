import { Fragment } from "react";
import "./Recipe.css";

const Recipe = (props) => {
  return (
    <div className="recipe-card">
      <div className="recipe-box">
        <img src={props.image} alt="" />
        <div className="recipe-content">
          <h2>{props.title}</h2>
          <p>Calories: {props.calories}</p>
        </div>
      </div>
      <div className="ingredients-box">
        <h2>{props.title}</h2>
        <ol>
          {props.ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
