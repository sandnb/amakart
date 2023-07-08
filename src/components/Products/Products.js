
import ListItem from './LisItems/ListItem'


function Products() {
    const items =[
        {
            id:0,
            discountedPrice: 340,
            price: 450,
            title: "Title of the item",
            thumbnail: "placeholder.png",

        },
        {
            id:1,
            discountedPrice: 450,
            price: 4500,
            title: "Gulab-Jaamunn",
            thumbnail: "placeholder.png",

        },
        {
            id:2,
            discountedPrice: 300,
            price: 457,
            title: "Basmathi-Rice",
            thumbnail: "placeholder.png",

        }
    ]    

  return (
    <div className={'product-list'}>
        <div className={'product-list--wrapper'}>
            <ListItem data={items[0]}/>
            <ListItem data={items[1]}/>
            <ListItem data={items[2]}/>
        </div>
    </div>
  )
}

export default Products