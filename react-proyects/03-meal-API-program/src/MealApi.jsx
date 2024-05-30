import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";

function MealApi() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(res => {
                setItems(res.data.meals);
            }).catch(err => {
                console.log(`ERROR type ${err}`)
            })
    }, [])

    const listItems = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section className="card" key={idMeal}>
                <img src={strMealThumb} className="api-image" />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>id {idMeal}</p>
                </section>
            </section>
        );
    });

    return (
        <div className="items-container">
            {listItems}
        </div>
    );
}

export default MealApi