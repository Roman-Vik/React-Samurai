import {State} from "./test2"

const hello = () => {
    console.log('hello')
}

State.test4() // 1



State.test1(hello) // func heloo

State.test4() // 1
State.test3()
State.test4() // hello

State.test1() // undefined
State.test2() //
console.log(undefined())


// убрать из index js импорт тест 1
// тест1 тест 2 удалить либо переместить куда-нибудь