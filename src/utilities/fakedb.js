// save to localstorage
const addToDb = id => {
    const exists = getDB()
    let shopping_cart = {}
    
    if(!exists){
        shopping_cart[id] = 1;
    } else {
        shopping_cart = JSON.parse(exists)
        if(shopping_cart[id]){
            let newCount = shopping_cart[id] + 1
            shopping_cart[id] = newCount
    } else {
        shopping_cart[id] = 1;
    }
   }
   updateDB(shopping_cart)
}
const getDB = () => localStorage.getItem('shopping_cart')
const updateDB = cart => localStorage.setItem('shopping_cart', JSON.stringify(cart))
const deleteFromDb = id => {
    const exists = getDB()
    if(exists){
        const shopping_cart = JSON.parse(exists)
        delete shopping_cart[id]
        updateDB(shopping_cart)
    }
}
export {addToDb, deleteFromDb} 






// const addToDb = id => {
//     let exists = getDB()
//     let shopping_cart = {}
//     if(!exists){
//         shopping_cart[id] = 1;
//     } else {
//         shopping_cart = JSON.parse(exists)
//         if(shopping_cart[id]){
//             const newCount = shopping_cart[id] + 1;
//             shopping_cart[id] = newCount;
//         } else {
//             shopping_cart[id] = 1;
//         }
//     }
//    updateDB(shopping_cart)
// }
// const getDB = () => localStorage.getItem('shopping_cart');
// const updateDB = cart =>  localStorage.setItem('shopping_cart', JSON.stringify(cart))
// const removeFromDB = id => {
//     const exists = getDB()
//     if(exists){
//         const shopping_cart = JSON.parse(exists)
//         delete shopping_cart[id]
//         updateDB(shopping_cart)
//     }
// }

// export {addToDb, removeFromDB as deleteFromDb}