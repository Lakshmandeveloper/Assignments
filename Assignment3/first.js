// Part  1A

class restaurantManager{

    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }

    ]
// part 1b
// printAllRestaurantsNames=()=>{
//     return this.restaurantList.map((data) => {
//         return data.restaurantName
//     })
// }


    //part 1c
    filterRestaurantByCity =(CityName ) => {
        return this.restaurantList.filter((data) =>{
            return data.city === CityName

        })

    }
}

orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };
var out=0;
for(key in orderdata){
     out+=orderdata[key];
     console.log(out);
}


var restObj= new restaurantManager( );

//restObj.printAllRestaurantsNames( )
//restObj.filterRestaurantByCity('Pune')
