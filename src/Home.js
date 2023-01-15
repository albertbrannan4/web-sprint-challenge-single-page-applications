import './App.css';

const PlacesToEatArr = [
    {
        name: "McDonald's",
        type: "American - Fast Food - Burgers",
        image: "https://images.unsplash.com/photo-1583779791512-eeccdee5c5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWNkb25hbGQnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "sweetgreen",
        type: "Healthy - Salads",
        image: "https://images.unsplash.com/photo-1582529025748-aa9abd591585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXQlMjBncmVlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Starbucks",
        type:"Cafe - Coffee & Tea - Breakfast and Brunch",
        image:"https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name:"Chick-fil-A",
        type:"Best Chicken Ever",
        image:"https://images.unsplash.com/photo-1558883188-817ab9ecf395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2slMjBmaWwlMjBhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Pho Today",
        type:"Chinese-American",
        image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Wawa",
        type:"Fuel Station",
        image:"https://images.unsplash.com/photo-1635471424158-fe4493375ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F3YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
]

const Home = () => {
    return (
        <div>
            <section className='introImg'>
                <h2>Your favorite food, delivered while coding!</h2>
                <a href='./pizza'>Pizza?</a>
            </section>
            <section className='restaurants'>
                <div>
                    <h3>Food Delivery in Gotham City</h3>
                </div>
                <div className='cards'>
                    {PlacesToEatArr.map((restaurant, idx) => {
                        return (

                            <div className='card' key={idx}>
                                <img className='restaurant-img' src={restaurant.image} alt={restaurant.name} />
                                <div>
                                    <p>{restaurant.name}</p>
                                    <p>{restaurant.type}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
export default Home;

