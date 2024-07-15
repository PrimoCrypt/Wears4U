import axios from "axios"


const url =
	"/api/products?organization_id=c891a1be6fd24d7dac2ec16daa816e07&reverse_sort=false&size=100&Appid=5EHG13OL69H2P7A&Apikey=f7dab62db488471ab0b960b359d7da7520240712122004671783"

const fetchData = async () => {
	try {
		const { data } = await axios(url)
		const items = new Map(Object.entries(data.items))
		return items
		// setItems(data ? new Map(Object.entries(data.items)) : new Map())
	} catch (error) {
		console.log(error.response)
	}
}
export const items = await fetchData()


