let list = document.querySelectorAll("li");
let array = Array.from(list);
for(let i=0;i<list.length;i++)
{	
	list[i].addEventListener("click",function(){
		console.log(i+1+"번째 입니다.")
	})
}

let temp = array.filter(function(value){
		return value.innerText.includes("e");
	});

console.log(...temp);
let ulList = document.querySelectorAll("ul");
console.log(ulList);