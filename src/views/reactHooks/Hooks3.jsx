import React, { useState, useEffect, useCallback } from 'react'

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [onResize])

    return size;
}

export default function () {
    let size = useWinSize()
    return (
        <div>
            <p style={{ lineHeight:'30px',fontSize:20 }}>页面Size:</p>
            <p style={{ lineHeight:'30px',fontSize:20 }}>{size.width}x{size.height}</p>
        </div>
    )
}