import React, { useEffect, useState } from 'react';
import '../stylesheets/styles.css';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';

function Meal(){

    const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');

    const searchRecipe = (e) =>{
        if(e.key === 'Enter'){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        }
    }

    useEffect(() =>{
        fetch(url).then(res => res.json()).then(data => {
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    }, [url]); //Al cambiar la url se ejecuta useEffect

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
    return(
        <>
            <div className='main'>
                <div className='header'>
                    <h1>Foody Moody</h1>
                    <h3>One of the most memorable aspects of travelling is a country’s food. Cuisines play an integral part in defining a nation’s culture – and whether you’re sampling a local delicacy at a street market, being entertained by a family in their home, or dining out at an upmarket restaurant, here is a small taste of must-eat foods around the globe.</h3>
                </div>
                <div className='heading'>
                    <h2>Search your food recipe</h2>
                </div>
                <div className='searchBox'>
                    <input
                        type='search'
                        className='search-bar'
                        placeholder='Enter a food'
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchRecipe}
                    />
                </div>
                <div className='container'>
                    {
                        show ? <MealItem data={item}/> : 'No Found'
                    }
                </div>
                <div className='indexContainer'>
                    <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)}/>
                </div>
            </div>
        </>
    );
}

export default Meal;