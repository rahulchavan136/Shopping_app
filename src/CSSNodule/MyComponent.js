import React from 'react'
import styles from "./MyComponent.module.css"

export const MyComponent = () => {
  return (
    <>
    <div className={`${styles.title} ${styles.title1}`}>
        This is MyComponent
        </div>
        <button className={`${styles.button}`}>Click Here</button>
    </>
  )
}
