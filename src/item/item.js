import ItemPhoneImg from './phone-alt.png'
import ItemSearchImg from './icon-search.png'
import ItemIconUser1Img from './icon-user1.png'
import ItemIconUser2Img from './icon-user2.png'
import ItemIconUser3Img from './icon-user3.png'
import ItemCrossBlackImg from './cross-black.png'
import ItemHeartWhiteImg from './heart-white.png'
import ItemHeartBlackImg from './heart-black.png'

import './item.scss'

const Item = (onAdd) => {
    console.log(ItemPhoneImg)
    console.log(ItemSearchImg)
    console.log(ItemIconUser1Img)
    console.log(ItemIconUser2Img)
    console.log(ItemIconUser3Img)
    console.log(ItemCrossBlackImg)
    console.log(ItemHeartWhiteImg)
    console.log(ItemHeartBlackImg)

    const ItemElement = document.createElement('div')
    ItemElement.className = 'item'


/////////////////////////////////////////////////////////////Поместить в item элемент

    // const nameElement = document.createElement('span')
    // nameElement.innerText = namee

    // const phoneElement = document.createElement('span')
    // phoneElement.innerText = phone

    const phone_img_divElement = document.createElement('div')
    phone_img_divElement.className = 'phone-img-div'

    const phoneimgElement = document.createElement('img')
    phoneimgElement.className = 'phone__img'
    phoneimgElement.src = ItemPhoneImg;

    const searchElement = document.createElement('input')
    searchElement.className = 'item__search'
    searchElement.src = ItemSearchImg;


    // window.onload = () => {
    //     let input = document.querySelector('input');
    //     input.oninput = function() {
    //         let value = this.value.trim();
    //         let list = document.querySelectorAll('div');

    //         if (value != '') {
    //             list.forEach(elem => {
    //                 if(elem.innerText.search(value) == -1) {
    //                     elem.classList.add('hide')
    //                 }
    //             });
    //         } else {
    //             list.forEach(elem => {
    //                 elem.classList.remove('hide'); 
    //             });
    //         }

    //         console.log(this.value);
    //     };
    // };

    const hrStartElement = document.createElement('hr')
    hrStartElement.className = 'item__hrStart'




    const user_cardsElement = document.createElement('div')
    user_cardsElement.className = 'user-cards'
    
    

    const card1Element = document.createElement('div')
    card1Element.className = 'user-cards__card1'
    const card2Element = document.createElement('div')
    card2Element.className = 'user-cards__card2'
    const card3Element = document.createElement('div')
    card3Element.className = 'user-cards__card3'
    
   


    const icon_user1Element = document.createElement('img')
    icon_user1Element.className = 'card__icon-user1'
    icon_user1Element.src = ItemIconUser1Img;

    const header1Element = document.createElement('div')
    header1Element.className = 'card__header1'
    header1Element.innerText = 'Сергей'

    const body1Element = document.createElement('div')
    body1Element.className = 'card__body1'
    body1Element.innerText = '+79473628475'

    const cross1Element = document.createElement('img')
    cross1Element.className = 'card__cross1'
    cross1Element.src = ItemCrossBlackImg;

    const heart_white1Element = document.createElement('img')
    heart_white1Element.className = 'card__heart-white1'
    heart_white1Element.src = ItemHeartWhiteImg;

    const heart_black1Element = document.createElement('img')
    heart_black1Element.className = 'card__heart-black1'
    heart_black1Element.src = ItemHeartBlackImg;

    heart_white1Element.onclick = function() {
        heart_white1Element.src = ItemHeartBlackImg;
    }

    



    const hr1Element = document.createElement('hr')
    hr1Element.className = 'item__hr1'

    const icon_user2Element = document.createElement('img')
    icon_user2Element.className = 'card__icon-user2'
    icon_user2Element.src = ItemIconUser2Img;

    const header2Element = document.createElement('div')
    header2Element.className = 'card__header2'
    header2Element.innerText = 'Алмаз'

    const body2Element = document.createElement('div')
    body2Element.className = 'card__body2'
    body2Element.innerText = '+79837657372'

    const cross2Element = document.createElement('img')
    cross2Element.className = 'card__cross2'
    cross2Element.src = ItemCrossBlackImg;

    const heart_white2Element = document.createElement('img')
    heart_white2Element.className = 'card__heart-white2'
    heart_white2Element.src = ItemHeartWhiteImg;

    const hr2Element = document.createElement('hr')
    hr2Element.className = 'item__hr2'

    const icon_user3Element = document.createElement('img')
    icon_user3Element.className = 'card__icon-user3'
    icon_user3Element.src = ItemIconUser3Img;

    const header3Element = document.createElement('div')
    header3Element.className = 'card__header3'
    header3Element.innerText = 'Рамазан'

    const body3Element = document.createElement('div')
    body3Element.className = 'card__body3'
    body3Element.innerText = '+79363748576'

    const cross3Element = document.createElement('img')
    cross3Element.className = 'card__cross3'
    cross3Element.src = ItemCrossBlackImg;

    const heart_white3Element = document.createElement('img')
    heart_white3Element.className = 'card__heart-white3'
    heart_white3Element.src = ItemHeartWhiteImg;

    const hr3Element = document.createElement('hr')
    hr3Element.className = 'item__hr3'




    const hrFinishElement = document.createElement('hr')
    hrFinishElement.className = 'item__hrFinish'


    
    



    const buttonElement = document.createElement('button')
    buttonElement.className = 'item__add-button'
    buttonElement.innerText = 'Добавить'
    buttonElement.addEventListener('click', onAdd)

    


/////////////////////////////////////////////////////////////Добавить в родительский элемент

    // ItemElement.appendChild(nameElement)
    // ItemElement.appendChild(phoneElement)
    ItemElement.appendChild(searchElement)
    ItemElement.appendChild(phone_img_divElement)
    ItemElement.appendChild(phoneimgElement)
    // ItemElement.appendChild(hrStartElement)

    ItemElement.appendChild(user_cardsElement)
    ItemElement.appendChild(card1Element)
    ItemElement.appendChild(card2Element)
    ItemElement.appendChild(card3Element)
    

    ItemElement.appendChild(icon_user1Element)
    ItemElement.appendChild(header1Element)
    ItemElement.appendChild(body1Element)
    ItemElement.appendChild(cross1Element)
    ItemElement.appendChild(heart_white1Element)
    ItemElement.appendChild(heart_black1Element)
    // ItemElement.appendChild(hr1Element)

    ItemElement.appendChild(icon_user2Element)
    ItemElement.appendChild(header2Element)
    ItemElement.appendChild(body2Element)
    ItemElement.appendChild(cross2Element)
    ItemElement.appendChild(heart_white2Element)
    // ItemElement.appendChild(hr2Element)

    ItemElement.appendChild(icon_user3Element)
    ItemElement.appendChild(header3Element)
    ItemElement.appendChild(body3Element)
    ItemElement.appendChild(cross3Element)
    ItemElement.appendChild(heart_white3Element)
    // ItemElement.appendChild(hr3Element)




    ItemElement.appendChild(hrFinishElement)


    ItemElement.appendChild(buttonElement)

    return ItemElement
};

export default Item