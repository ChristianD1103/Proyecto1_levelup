var data = ({a:1, b:2, c:3})
console.log(keyandvalues(data))
function keyandvalues(x) {
        return  new Array(Object.keys(x).sort(), Object.values(x))    
}