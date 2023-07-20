import { useState, useEffect } from 'react'
import ListItem from './LisItems/ListItem'
import axios from 'axios';

function Products() {
    const [items,setItems]  = useState([]);

    useEffect(()=>{
        async function fetchItems(){
            try {
                        const response = await  axios.get(`https://ekart-b2904-default-rtdb.firebaseio.com/items.json`)
                        const data = response.data;
                        const transformedData = data.map((item,index)=>{
                                    return{
                                        ...item,
                                        id:index,
                                    }
                    })
                    setItems(transformedData);
            }
            catch(error){
                console.log(error);
            }
          
        }
       fetchItems();
    },[])

    const updateItemTitle = async (itemId) => {
        try{
            let title = `Updated title #item-${itemId}`
            await axios.patch(`https://ekart-b2904-default-rtdb.firebaseio.com/items/${itemId}.json`,{
                title: title
        })
           let data = [...items]
           let index =  data.findIndex(e => e.id === itemId);
           data[index]['title'] = title

           setItems(data);
        }
       catch(error){
        console.log(error);
       }
    }

  return (
    <div className={'product-list'}>
        <div className={'product-list--wrapper'}>
            {items.map(item=>{
                return(<ListItem key={item.id} data={item} updateItemTitle={updateItemTitle} />)
            })}
        </div>
    </div>
  )
}

export default Products