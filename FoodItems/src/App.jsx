//Fragments, maps
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import styles from "./components/Item.module.css"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import { useState } from "react"

function App() {
  // let foodItems = ["icecream", "leafyVegetables", "salads", "Milk", "dal" ]
  // let [textToShow,setTextState] = useState();
   let[foodItems, setFoodItems] = useState([])

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = ''
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      console.log('food value entered is ' + newFoodItem)
    }
    
  }
  
  return (
    <>
    <Container >
      <h1 className={styles.foodHeading} >Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>

      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}></FoodItems>
    </Container> 



    {/* <Container >Good Food Good Mood. . . </Container> */}
    
    </>
  )
}
export default App

// import React from "react"
// import Heading from "./components/Heading.jsx"
// import Para from "./components/Para.jsx"
// import Time from "./components/Time.jsx"
// import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {

//   return (
//  <center className="padding:10px" >
//   <Heading/>
//  <Para/>
//  <Time/>
//  </center>
//   )

// }

// export default App



 {/* <ul className="list-group">
        {foodItems.map((item) => (
          // <li className="list-group-item" >{item}</li>
          <li key={item} className="list-group-item" >{item}</li>

        ))
        }
      </ul> */}