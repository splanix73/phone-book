// import ItemsList from './items-list/items-list'

import Item from './item';
import ItemsList from './items-list'

import './index.scss'
import 'normalize.css'

const mocks = [{
    "id": 1,
    "namee": "Сергей",
    "phone": 89843256734
},
{
    "id": 2,
    "namee": "Алмаз",
    "phone": 89353456795
},
{
    "id": 3,
    "namee": "Рамазан",
    "phone": 879457438365
}]

const itemsList = ItemsList();
document.body.appendChild(itemsList)

// const generateItems = () => {
//     mocks.forEach((item)=>{
//         const item1Element = Item(item.namee, item.phone);
//         itemsList.appendChild(item1Element)

        
//     })
// }



// generateItems()
const item1Element = Item();
itemsList.appendChild(item1Element)












