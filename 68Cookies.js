// console.log(document.cookie)
document.cookie="name=vivek;hthth=jh;hghgfj=858"
document.cookie="sname=patel"
let key=prompt("Enter your cookie key:")
let value=prompt("Enter your cookie value:")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
alert(document.cookie)
