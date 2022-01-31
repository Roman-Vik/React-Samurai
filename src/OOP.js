let man = {
    name: "Roman",
    age: 30,
    sayHey() {
        console.log(this.name + " " + this.age)
    }
}
// console.log(man.age)
// console.log(man.name)
// man.sayHey()
/*===================== Инкапсулирована логика=========================================*/

let page = {
    title: "Samurai JS",
    content: "",
    render () {
        document.write(this.content)
    }
}
page.content = `<strong><div>Content about React</div><strong>`
//page.render()
/*====================================================================*/

let page2 = {
    title: "Samurai JS",
    _content: "",
    setContent(value){
        //log
        //value is dangerous ssx throw new exception
        this._content = value
    },
    getContent(){
        return this._content
    },
    render: function () {
        document.write(this._content)
    }
}
//НЕЛЬЗЯ page2._content = `<div>Content about React</div>`
 page2.setContent(`<div>Content about React</div>`)
 page2.setContent(`Content about React`) // в консоли показать
//НЕЛЬЗЯ console.log(page2._content)
//console.log(page2.getContent())
//page2.render()
/*================================================================================================*/

let store = {
    _subscriber(){
        console.log("no subscribe (observers)")
    },
    _state: {
        firstName : "Danila",
        lastName : "Bodrov",
    },
    getState(){
        return this._state //данные state
    },
    _subscribe(observer){
        this._subscribe = observer
    },
    setFirstName(value) {
        this._state.firstName = value // имя
        this._subscribe();
    },
}

// let state = store._state // мы присваиваем данные
// console.log(state)
// store.setFirstName("Vasia") //передаем новое имя
// state = store.getState() // вызываем  метод с новым именем
// console.log(state) // проверяем что изменились данные в _state
//
// store._subscribe (() => {
//     let state = store.getState( // берем актуальный state
//         // renderPage(state) // говорим отрендери новую страницу
// })
store.setFirstName("youTube.com")



