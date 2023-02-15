import {createContext, useState} from 'react'

const AppConText = createContext()

function AppProvider({children}){

    const [isDark,setTheme] = useState(false)
    const toggleTheme = ()=>{
        setTheme(!isDark)
    }

    const [status, setStatus] = useState({
        page: "home",
        payload: undefined
    })

    const changeFilmInfo = (filmId)=>{
        console.log(filmId);
        setStatus({
            page: "filmInfo",
            payload: filmId
        })
    }

    const changeHome = ()=>{
        setStatus({
            page: "home",
            payload: undefined
        })
    }

    const changeSearch=(content)=>{
        setStatus({
            page: "search",
            payload: content
        })
    }

    const changeProfile=(proId)=>{
        setStatus({
            page: "profile",
            payload: proId
        })
    }

    const value={
        isDark,
        toggleTheme,
        status,
        changeFilmInfo,
        changeHome,
        changeSearch,
        changeProfile
    }

    return(
        <AppConText.Provider value={value}>
            {children}
        </AppConText.Provider>
    )
}

export {AppConText, AppProvider}