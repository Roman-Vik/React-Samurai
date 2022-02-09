export const State = {
    constructor() {
    },

    test2: undefined,

    test3: function () {
        this.test4 = this.test2
    },

    test4: () => {
        console.log(1)
    },

    test1(test1){
        console.log(test1)
        this.test2 = test1
    }
}