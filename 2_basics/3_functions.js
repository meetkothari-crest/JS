// function add(num1, num2){
//     console.log(num1 + num2);
    
// }

// add(1,2)


function calculateCartTotal(...num){
    let sum = 0;
    for(let i=0;i<num.length;i++)
    {
        sum += num[i];
    }
    return sum;
}

const total = calculateCartTotal(100,200,300)
console.log(total);

const user = {
    username: "Meet",
    expense: 500
}

function handleObj(obj){
    console.log(`Username is ${obj.username} and Expense is ${obj.expense}`);
    
}

handleObj(user)

