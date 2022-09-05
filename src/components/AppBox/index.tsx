import React from "react"
import styles from "./index.module.css"

interface IAppBoxProps {
    children: React.ReactNode
    className?: string
    [key: string]: any
}
const AppBox = ({ children, className, ...props }: IAppBoxProps) => {
    return (
        <div className={`${styles['app-box']} ${className}`} {...props}>{children}</div>
    )
}
export default AppBox
