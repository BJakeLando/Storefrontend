import axios from 'axios';

const catalogue = [
    {
        _id: '1',
        title: "Couple at the Wedding",
        price: 150.00,
        category: "Water Color",
        image: "wedding.jpg" 
    },
    {
        _id:'2',
        title: "Squid",
        price: 200.00,
        category: "Water Color",
        image: "Squid.jpg"
    },
    {
        _id:'3',

        title: "Couple",
        price: 150.00,
        category: "Oil Based",
        image: "Couple.jpg"
    },
    {
        _id:'4',
        title: "Self Portrait",
        price: 100.00,
        category: "Water Color",
        image: "Self.jpg"
    },
    {
        _id:'5',
        title: "Family",
        price: 120.00,
        category: "Oil Based",
        image: "Family.jpg"
    },
    {
        _id:'6',
        title: "Pet",
        price: 75.00,
        category: "Water Color",
        image: "pet.jpg"
    },
    {
        _id:'7',
        title: "Love in the City",
        price: 200.00,
        category: "Water Color",
        image: "CityLove.jpg"
    },
    //at least 7 items
    
];

class Dataservice {
    async getCatalogue() {
        // use this line to work without a server below
        //return catalogue;

        //TODO: call the server to get the data
        // use the line below to work with the server
        let res = await axios.get("http://127.0.0.1:5000/api/catalog");
        return res.data;

    }

    async saveProduct(product){
        let res = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return res.data;
    }

    saveOrder(){}


    validateCouponCode(){}

    async saveCoupon(coupon){
        let res = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
        return res.data;
    }

    async getCoupons(){
        let res = await axios.get("http://127.0.0.1:5000/api/coupons");
        return res.data;
    }

}

export default Dataservice;