var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]


// Calculate the Average rating for all the restaurants.
// List of all restaurants with average rating greater than 4.

let distinct=[ ]
for (i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant)==-1){
        distinct.push(ratingData[i].restaurant)
    }
}
console.log(distinct)
