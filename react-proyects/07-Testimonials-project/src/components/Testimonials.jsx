import { useState } from "react";

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonilas = [
        {
            quote: "This is the best product i've ever used!",
            author: "Aiden McGuire",
        },
        {
            quote: "could be better product but the staff is really kind so it's work for me",
            author: "Isaac Davidson",
        },
        {
            quote: "el pepe ete shech",
            author: "Eugene Perkins",
        },
        {
            quote: "banca shat",
            author: "Myrtle Fernandez",
        }

    ]


    function handlePrevClick() {
        setCurrentIndex((currentIndex + testimonilas.length - 1) % testimonilas.length);
    }

    function handleNextClick() {
        setCurrentIndex((currentIndex + 1) % testimonilas.length);
    }
    return (
        <>
            <div className="testimonials">
                <div className="testimonials-quote">{testimonilas[currentIndex].quote}</div>
                <div className="testimonial-author">
                    {testimonilas[currentIndex].author}
                </div>
                <testimonials className="nav">
                    <button onClick={handlePrevClick}>Prev</button>
                    <button onClick={handleNextClick}>Next</button>
                </testimonials>
            </div>
        </>
    )
}

export default Testimonials