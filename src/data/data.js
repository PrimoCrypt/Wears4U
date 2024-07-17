import axios from "axios"


const url =
	"/api/products?organization_id=c891a1be6fd24d7dac2ec16daa816e07&reverse_sort=false&size=100&Appid=5EHG13OL69H2P7A&Apikey=f7dab62db488471ab0b960b359d7da7520240712122004671783"

const fetchData = async () => {
	try {
		const { data } = await axios(url)
		const items = data?.items
		return items
		// setItems(data ? new Map(Object.entries(data.items)) : new Map())
	} catch (error) {
		console.log(error.response)
	}
}
const storeData = async () => {
    const items = await fetchData();
    if (items) {
        localStorage.setItem("cartItems", JSON.stringify(items));
    }
}
storeData()
const getStoredData = () => {
	const storedItems = localStorage.getItem("cartItems")
	if (storedItems) {
		return JSON.parse(storedItems)
	} else {
		return [] // Return empty array if no data found
	}
}
const newItems = getStoredData()

//  Creating a new Map instance
const itemsWithKey = newItems.map((item)=> [item.id, item]);

export const itemsAsMap = new Map(itemsWithKey)

