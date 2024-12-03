import { useState, useEffect } from "react"
import axios from 'axios'
import util from '@aqualunae/util'
import { Link } from 'react-router-dom'
import Footer from "../Components/Footer"

const Cheatsheet = () => {

    const [ charaList, setCharaList ] = useState([])
    const [ worldList, setWorldList ] = useState([])
    const [ displayWorlds, setDisplayWorlds ] = useState([])

    useEffect(() => {
        (async() => {
            axios.get(`${ import.meta.env.VITE_API_URL }/charas/xiv`).then(res => {
                setCharaList(res.data)
                const worlds = res.data?.reduce((list, chara) => {
                    if (chara?.trivia?.world && !list.includes(chara.trivia.world)) {
                        list.push(chara.trivia.world)
                    }
                    return list
                }, [])
                setWorldList(worlds)
            }).catch(err => {
                console.log(err)
            })
        })()
    }, [])

    useEffect(() => {
        const worlds = worldList?.map(world => {
            const worldCharacters = charaList?.filter(chara => {
                return chara.trivia?.world === world
            }).map(chara => {
                return (
                    <Link className="card" to={ `/${ chara.firstName }` } >
                        <img className="portrait bordered-img" src={ `/media/screens/xiv/icons/${ chara.firstName }.png` } />
                        <div className="shape bordered box under-portrait"><h3>{ util.str.title(chara.firstName) } { util.str.title(chara.stageName) }</h3></div>
                    </Link>
                )
            })
            return (
                <div className="row wide bordered transbox world">
                    <div className="shape bordered box world-title"><h2>{ util.str.title(world) }</h2></div>
                    { worldCharacters }
                </div>
            )
        })
        setDisplayWorlds(worlds)
    }, [ charaList, worldList ])

    return (
        <main className="main">
            <article id="cheat">
                <div className="title shape bordered box"><h1>Knife's WoLs</h1></div>
                { displayWorlds }
            </article>
            <Footer />
        </main>
    )
}

export default Cheatsheet