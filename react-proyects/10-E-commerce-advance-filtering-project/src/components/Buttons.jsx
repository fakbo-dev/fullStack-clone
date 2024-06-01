
function Buttons({ onCLickHandler, value, title }) {
    return (
        <button onCLick={onCLickHandler} value={value} className="btns">
            {title}
        </button>
    )
}

export default Buttons