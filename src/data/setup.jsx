// import { useEffect } from "react"
// import axios from "axios";

// const url =
// 	"/api/products?organization_id=c891a1be6fd24d7dac2ec16daa816e07&reverse_sort=false&size=100&Appid=5EHG13OL69H2P7A&Apikey=f7dab62db488471ab0b960b359d7da7520240712122004671783"

// const FirstRequest =()=>{
//     const fetchData = async ()=>{
//         try {
//             const { data} = await axios(url)
//             const {items} = data
//             console.log(items)
//         } catch (error) {
//             console.log(error.response)
//         }
//     }
//     useEffect(()=>{
//        fetchData();
//     }, []);
//     return <h2>First Request now</h2>
// }

// export default FirstRequest