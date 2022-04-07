var num = parseInt(prompt('Enter a Number'))
var sum = 0
var remainder,num,i,fact
 
 
while (num>0)
{
remainder = num%10
fact = 1, i = 1
while (i<=remainder)
{
fact = fact*1
i++    
}    
sum = sum + fact
num = parseInt(num/10)
}
if (num == sum)
{
 console.log('This is a Strong number' + num);    
}
else
{
    console.log('This is not a Strong Number' + num);
}
