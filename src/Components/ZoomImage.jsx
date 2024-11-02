import { useState, useEffect } from "react"

const ZoomImage = ({ cap }) => {

    const [ open, setOpen ] = useState(false)

    const clickHandler = () => {
        const newOpen = open ? false : true
        setOpen(newOpen)
    }

    const keyboardHandler = (event) => {
        if (event.code === "Enter") {
            clickHandler()
        } else if (event.code === "Tab") {
            setOpen(false)
        }
    }

    useEffect(() => {
        if (open) {
            document.getElementById(cap.filename).focus()
        }
    }, [ open ])

    return (
        <>
            { open && <div className="overlay">
                <img 
                    className="screencap" 
                    src={ `/media/screens/xiv/${ cap.filename }.png` } 
                    alt={ cap.alt_text } 
                    id={ cap.filename }
                    tabIndex={ 0 }
                    onClick={ clickHandler }
                    onKeyUp={ keyboardHandler }
                />
            </div> }
            <img 
                className="screen-thumb" 
                src={ `/media/screens/xiv/${ cap.filename }.png` } 
                alt={ cap.alt_text } 
                tabIndex={ 0 }
                onClick={ clickHandler }
                onKeyUp={ keyboardHandler }
            />
        </>
    )
}

export default ZoomImage