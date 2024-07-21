'use client'

import { useState } from "react"
import { Button } from "./ui/button"

export default function Counter(props: {
    message: string
}) {
    const [count, setCount] = useState(0)
    function increase() {
        setCount(count + 1)
    }
    return (
        <Button type='button' onClick={increase}>{props.message}: {count}</Button>
    )
}