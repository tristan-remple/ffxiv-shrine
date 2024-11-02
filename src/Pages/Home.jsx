import { useState, useEffect } from "react"
import axios from 'axios'
import util from '@aqualunae/util'
import { Link } from 'react-router-dom'
import Footer from "../Components/Footer"

const Home = () => {

    const [ charaList, setCharaList ] = useState([])

    useEffect(() => {
        (async() => {
            axios.get(`${ import.meta.env.VITE_API_URL }/charas/xiv`).then(res => {
                setCharaList(res.data)
            }).catch(err => {
                console.log(err)
            })
        })()
    }, [])

    const displayList = charaList?.map(chara => {
        return (
            <Link className="card" to={ `/${ chara.firstName }` } >
                <img className="portrait bordered-img" src={ `/media/screens/xiv/icons/${ chara.firstName }.png` } />
                <div className="shape bordered box under-portrait"><h3>{ util.str.title(chara.firstName) } { util.str.title(chara.lastName) }</h3></div>
            </Link>
        )
    })

    return (
        <main className="main">
            <article>
                <div className="title shape bordered box"><h1>{ import.meta.env.VITE_USER }'s WoLs</h1></div>
                <div className="row wide bordered transbox world">
                    {displayList}
                </div>
            </article>
            <Footer />
        </main>
    )
}

export default Home