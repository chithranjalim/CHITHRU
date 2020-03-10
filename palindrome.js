var x=156651;
var y=x;
var rem=0;
var rev=0;
while(x>0)
    {
        rem=x%10;
        rev=rev*10+rem;
        x=parseInt(x/10);
    }
if(rev==y)
    {
        console.log("the value "+y+" is a palindromic number");
    }
else
    {
        console.log("the value "+y+" is not a paliondromic number");
    }