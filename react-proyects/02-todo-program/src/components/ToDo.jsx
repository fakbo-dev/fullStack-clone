import { useState } from "react";

function ToDo() {
    const [list, setList] = useState(listDefault);
    const [text, setText] = useState("");
    let id = list.length;

    const listItems = list.map(item => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
            />
            {item.text}
        </li>
    ));

    function handleAdd() {
        const newItem = {
            id: id++,
            text: text,
            completed: false,
        };

        setList([...list, newItem]);
        setText("");
    }

    function handleText(e) {
        setText(e.target.value);
    }

    function handleDelete() {
        const updateList = list.filter(item => !item.completed);
        setList(updateList);

    }
    function handleToggle(id) {
        const updatedList = list.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        });
        setList(updatedList);
    }

    function handleSubmit(e) {

        e.preventDefault();
        e.target.reset();
    }
    return (
        <>
            <main className="wrapper">
                <section className="header">
                    <h1 className="title">To-Do App</h1>
                    <h3 className="dev"><span>F</span>akbo <span>W</span>ebDev</h3>
                </section>

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <input type="text"
                                name="name"
                                id="name"
                                placeholder="Add new Task"
                                className="form__input"
                                value={text}
                                onChange={handleText}>
                            </input>
                        </label>
                        <button
                            className="add-btn"
                            onClick={handleAdd}>+</button>
                    </form>
                </div>
                <section className="container">


                    <div className="list">
                        <ol>
                            {listItems}
                        </ol>
                    </div>
                </section>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </main>
        </>
    )
}

export default ToDo

const listDefault = [
    {
        id: 0,
        text: "Walk the dog",
        completed: true,
    },
    {
        id: 1,
        text: "Take a shower",
        completed: true,
    },
    {
        id: 2,
        text: "buy the groceries",
        completed: false,
    }
];