// Данные троки не нужны для меню 
// const headerLi = document.querySelector('.header_li')

// headerLi.addEventListener('click', addItem)

// let completedTasks = []
// let checked = []

// function addItem () {
//     let inputTextValue = inputText.value
//     inputText.value = ''

// } 

// Получаешь все li из большого списка (на заказ, девушки и т.д) в массив так как их у тебя несколько
const liItems = document.querySelectorAll('.li_item')

// Циклом перебираешь все пункты и если на каком то из них фиксируется клик - у него переключается класс с .sub_menu на sub_menu_visible и обратно
for (const item of liItems) {
    item.onclick = function() {
        this.querySelector('.sub_menu').classList.toggle('sub_menu_visible')
        this.classList.toggle('li_item_visible')
       } 
    }


function showModal(self){
    const divModal = document.createElement('div')

    divModal.classList.add('main')

    divModal.insertAdjacentHTML('afterbegin',`
        <div class="newmodal">
            <div class="title-container">
                <h1 class="title">Товар добавлен в корзину</h1>
            </div>
            <p>Товар успешно добавлен в корзину. Нажмите кнопку "ОК", чтобы закрыть окно</p>
            <button>ОК</button>
        </div>
        `)
    document.body.appendChild(divModal)

}

window.onclick = function(event){

    let modal = document.querySelector('.newmodal button')

    if(event .target == modal ){
        document.querySelector('.main').remove()
    }
    
}