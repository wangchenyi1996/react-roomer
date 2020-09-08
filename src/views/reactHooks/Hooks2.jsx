import React, { useContext, useReducer, useState, useEffect, createContext } from "react";

const AppContext = createContext({});

const Navbar = () => {
    const { username } = useContext(AppContext)

    return (
        <p>navbar {username}</p>
    )
}

const Messages = () => {
    const { age } = useContext(AppContext)

    return (
        <h1>Messages {age}</h1>
    )
}

const myReducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case ('countUp'):
            return {
                ...state,
                count: state.count + action.value
            }
        default:
            return state
    }
}

let userinfo = {
    username: '张小三',
    age: 18
}
export default function App() {
    const [state, dispatch] = useReducer(myReducer, { count: 0 })
    const [num, setnum] = useState(10)

    useEffect(() => {
        fetch(`http://rap2.taobao.org:38080/app/mock/233782/api/getTabbar`)
          .then(response => response.json())
          .then(data => {
            console.log(data.tabList)
          });
    }, [])

    const clickAdd10 = () => {
        dispatch({ type: 'countUp', value: Number(num) })
    }
    const handlenum = (e) => {
        // console.log(e.target)
        setnum(e.target.value)
    }

    return (
        <AppContext.Provider value={userinfo}>
            <>
                <Navbar />
                <Messages />
                <input type="text" placeholder="请输入数值" value={num} onChange={handlenum} />
                <button onClick={clickAdd10}> 点击 + {num} </button>
                <p>Count: {state.count}</p>
            </>
        </AppContext.Provider>
    );
}
