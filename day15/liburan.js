




// getSquare(553) // ==> 25259

// ================== 1
const getSquare = (int) => {
    var str = int.toString()
    var arr = str.split('')
    var result = ''
    // var i =0
    // do{
    //     result += arr[i] * arr[i]
    //     i ++
    // }while(i < arr.length)

    for(var i = 0 ; i < arr.length ; i++){
        result += arr[i] * arr[i]
    }
    return parseInt(result)
}

// console.log(getSquare(553))


// ubah integer menjadi string 
// kemudian baru diubah jadi arr
// loop disetiap item dari arr
// setiap loop , di pangkat 2
// tinggal return hasil loopingnya




// ================== 2
const checkName = (bebas) => {
    // console.log(bebas)
    var result = [] // ['Andy', 'Seto']
    for(var i = 0 ; i < bebas.length ; i++){
        if(bebas[i].length == 4){
            result.push(bebas[i])
        }
    }
    return result
}

// console.log(checkName(['andy','steve','seto','Fikri']))


// ====================== 3

var a = "http://github.com/carbonfive/raygun"
var b ="http://www.zombie-bites.com"
var c ="github.com"
var d = 'https://www.google.com/search?q=how+to+loop+through+an+integer+in+javascript&oq=how+to+loop+through+an+integer+in+javascript&aqs=chrome..69i57.15631j0j7&sourceid=chrome&ie=UTF-8'
// console.log(c.split('//')[1].split('.')[0])

// console.log(d.replace('http://' , '').replace('.com' , '').replace('www.','').split('/')[0])

const getDomain = (satu) => {
    var first = satu.replace('http://','').replace('.com','').replace('www.' ,'')
    return first.split('/')[0]
} 

console.log(getDomain(a))


