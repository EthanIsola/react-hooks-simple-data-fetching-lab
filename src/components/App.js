import React, { useState, useEffect } from "react";


// create your App component here

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <img src = {items.message} alt = "A Random Dog" />
      );
    }
  }

export default App;




// function App(){

//     const [dog, setDog] = useState("Loading...")

//     useEffect(() => {
//         fetch("https://dog.ceo/api/breeds/image/random")
//           .then((response) => response.json())
//           .then((data) => {
//               console.log(data)
//                 setDog(data);
//           });
//           console.log(dog)
//       }, []);
      
//       const disp = <img src = {dog.message} alt = {dog.message}></img>

//     return(
//         {disp}
//         )
// }

// export default App;