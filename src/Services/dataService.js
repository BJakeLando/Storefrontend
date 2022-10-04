const catalogue = [
    {
        _id: '1',
        title: "Couple at the Wedding",
        price: 150.00,
        category: "Water Color",
        image: "wedding.jpg" //img-1.jpg
    },
    {
        _id:'2',
        title: "Grandparents",
        price: 200.00,
        category: "Water Color",
        image: "test1.png"
    },
    {
        _id:'3',

        title: "Beautiful day at the beach",
        price: 150.00,
        category: "Oil Based",
        image: "test1.png"
    },
    {
        _id:'4',
        title: "Sunset Cliffs",
        price: 12.99,
        category: "Water Color",
        image: "test1.png"
    },
    {
        _id:'5',
        title: "Oranges",
        price: 12.99,
        category: "Oil Based",
        image: "test1.png"
    },
    {
        _id:'6',
        title: "Shadow",
        price: 12.99,
        category: "Water Color",
        image: "test1.png"
    },
    //at least 7 items
    
];

class Dataservice {
    getCatalogue() {
        return catalogue;
        //TODO: call the server to get the data

    }

    saveOrder(){

    }

    validateCouponCode(){

    }

}

export default Dataservice;