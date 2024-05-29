import { useState } from "react";

const baseToDo = [
    {
        id: 0,
        content: "Take a shower",
    },
    {
        id: 1,
        content: "Play Videogames",
    },
    {
        id: 2,
        content: "walk the dog",
    }
];

function ToDo() {

    const [list, setList] = useState(baseToDo);

    const listItems = list.map((l) => <li key={l.id} className="b-list__items">{l.content}{" "}<button className="button">Done</button></li>);
    return (
        <>
            <main className="b-wrapper">
                <section className="b-container">
                    <div className="b-title">
                        <h1 className="b-title__header">To-Do List 📃!</h1>
                        <h2 className="b-title__dev"><span className="b-title__dev__first">F</span>akbo <span className="b-title__dev__first">W</span>ebDev.</h2>
                    </div>

                    <div className="b-list">
                        <ol>
                            {listItems}
                        </ol>
                    </div>

                    <div className="b-buttons">
                        <input type="text" />
                        <br />
                        <button className="button">Add new task</button>
                        <button className="button">delete complete task</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ToDo