const a = function (){
    console.log('a', this)
    const b = function (){
        console.log(this)
        const c = {
            hi: function() {
                console.log('c', this)
            }
        }
        c.hi()
    }
    b()
}
a()

const obj = {
    name: 'Billy',
    sing(){
        console.log('a', this);
        var anotherFunction = () =>
        {
            console.log('b', this)
        }
        anotherFunction()
    }
}