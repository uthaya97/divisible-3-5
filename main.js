var arr=[10,12,15,27,35,30,60];
document.write("given number"+" "+arr+"<br>"+"<br>");
document.write("divisible number"+"<br>")
for(i=0;i<arr.length;i++)
{
	if((arr[i]%3==0)&&(arr[i]%5==0))
	{
		document.write(arr[i]+"<br>");
	}
}	