const Footer = () => {
    return (
        <footer className="transbox bordered">
            <p>
                This is a shrine for { import.meta.env.VITE_USER }'s Warriors of Light. You can find more of their work on <a href={ import.meta.env.VITE_MAIN_SITE }>their website</a>.
                <br /><br />
                Many of the images on this site are from <a href="https://www.finalfantasyxiv.com/">Final Fantasy XIV</a>, including screencaps and some icons. The homepage background is by <a href="https://unsplash.com/photos/blue-and-white-starry-night-sky-jtO2ciJbRgs">Arul James</a>.
            </p>
        </footer>
    )
}

export default Footer