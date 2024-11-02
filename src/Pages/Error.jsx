import Footer from "../Components/Footer"

const Error = ({ err }) => {

    let errorText = "Something has gone wrong."

    switch(err) {
        case "unknown":
            errorText = "The page you're looking for does not exist."
            break
        case "not found":
            errorText = "The specific item you're looking for could not be found."
            break
        case "loading":
            errorText = "The server is still processing your request. Please wait."
            break
    }

    return (
        <main id="main">
            <article>
                <div className="title shape bordered box"><h1>Error</h1></div>
                <div className="wide bordered box">
                    <p>The server has encountered an error. { errorText }</p>
                </div>
            </article>
            <Footer />
        </main>
    )
}

export default Error