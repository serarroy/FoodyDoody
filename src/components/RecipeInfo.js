import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import '../stylesheets/styles.css';

function RecipeInfo(){

    const [item, setItem] = useState();
    const {MealId} = useParams();

    console.log(MealId);

    if(MealId !== ''){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res => res.json())
        .then(data => {
            setItem(data.meals[0]);
            console.log("Meal: " + data);
        })
    }


    return(
        <>
            {
                (!item)?"Loading...":(<>
                    <div className='content'>
                        <img src={item.strMealThumb} />
                        <div className='inner-content'>
                            <h1>{item.strMeal}</h1>
                            <h2>{item.strArea} Food</h2>
                            <h3>Category: {item.strCategory}</h3>
                        </div>
                    </div>
                    <div className='recipe-details'>
                        <div className='ingredients'><br />
                            <h2>Ingredients</h2>
                            <ul>
                                <li><h4>{item.strIngredient1}: {item.strMeasure1}</h4>
                                <li><h4>{item.strIngredient2}: {item.strMeasure2}</h4></li>
                                <li><h4>{item.strIngredient3}: {item.strMeasure3}</h4></li>
                                <li><h4>{item.strIngredient4}: {item.strMeasure4}</h4></li>
                                <li><h4>{item.strIngredient5}: {item.strMeasure5}</h4></li>
                                <li><h4>{item.strIngredient6}: {item.strMeasure6}</h4></li>
                                <li><h4>{item.strIngredient7}: {item.strMeasure7}</h4></li>
                                <li><h4>{item.strIngredient8}: {item.strMeasure8}</h4></li>
                                <li><h4>{item.strIngredient9}: {item.strMeasure9}</h4></li></li>
                            </ul>
                        </div>
                        <div className='instructions'><br />
                            <h2>Instructions</h2>
                            <h4>{item.strInstructions}</h4>
                        </div>
                    </div>
                </>)
            }
        </>
    );
}

export default RecipeInfo;
