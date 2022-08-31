import React, { useState } from 'react'

const TextForm = (props) => {
    const textHandeler = () => {
        text === text.toUpperCase() ? setText(text.toLowerCase()) : setText(text.toUpperCase())
        text === text.toUpperCase() ? setTextMode('UPPER CASE') : setTextMode('lower case')
        text === text.toUpperCase() ? props.showAlert("Converted to Lower Case","success") : props.showAlert("Converted to Upper Case","success")
    }

    const handelText = (event) => {
        setText(event.target.value)
    }

    const clear = () => {
        setText('')
        setTextMode('Transform')
        props.showAlert('Cleared', 'success')
    }

    const phone = () => {
        var number = [];
        let lowerText = text.toLowerCase()
        let digits = lowerText.split(" ");
        for (let i = 0; i < 10; i++) {
            if (digits[i] === "zero") {
                number[i] = 0;
            }
            else if (digits[i] === "one") {
                number[i] = 1;
            }
            else if (digits[i] === "two") {
                number[i] = 2;
            }
            else if (digits[i] === "three") {
                number[i] = 3;
            }
            else if (digits[i] === "four") {
                number[i] = 4;
            }
            else if (digits[i] === "five") {
                number[i] = 5;
            }
            else if (digits[i] === "six") {
                number[i] = 6;
            }
            else if (digits[i] === "seven") {
                number[i] = 7;
            }
            else if (digits[i] === "eight") {
                number[i] = 8;
            }
            else if (digits[i] === "nine") {
                number[i] = 9;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "zero")) {
                number[i] = 0;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "one")) {
                number[i] = 1;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "two")) {
                number[i] = 2;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "three")) {
                number[i] = 3;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "four")) {
                number[i] = 4;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "five")) {
                number[i] = 5;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "six")) {
                number[i] = 6;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "seven")) {
                number[i] = 7;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "eight")) {
                number[i] = 8;
            }
            else if ((digits[i] === "double") && (digits[i + 1] === "nine")) {
                number[i] = 9;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "zero")) {
                number[i] = "00";
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "one")) {
                number[i] = 11;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "two")) {
                number[i] = 22;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "three")) {
                number[i] = 33;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "four")) {
                number[i] = 44;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "five")) {
                number[i] = 55;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "six")) {
                number[i] = 66;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "seven")) {
                number[i] = 77;
            }
            else if ((digits[i] === "triple") && (digits[i + 1] === "eight")) {
                number[i] = 88;
            }
            else if ((digits[i] === "riple") && (digits[i + 1] === "nine")) {
                number[i] = 99;
            }

        }
        var str = number.join("")
        str = parseInt(str)
        setText(str)
        props.showAlert("Converted to Number","success")
    }

    const [textMode, setTextMode] = useState('Transform')

    const [text, setText] = useState()

    return (
        <div className={`container w-50 py-5 rounded bg-${props.mode}`}>

            <div className="mb-3 mt-5">

                <label
                    htmlFor="exampleFormControlTextarea1" className={`form-label fs-2 text-${props.mode==="dark"?"light":"dark"}`}>Enter Text</label>

                <textarea
                    className={`form-control text-${props.mode === "dark"?"light":"dark"} bg-${props.mode}`} id="exampleFormControlTextarea1"
                    placeholder="Enter Text"
                    rows="5"
                    value={text}
                    onChange={handelText}></textarea>

            </div>

            <div className="container py-2">
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={textHandeler}>{textMode}
                </button>

                <button
                    type="button"
                    className="btn btn-danger mx-1 my-1"
                    onClick={clear}>Clear All
                </button>

                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={phone}>Text to Phone Numer
                </button>
            </div>

        </div>
    )
}

export default TextForm
