function palindrome(x)
    {
        var y=x;
       var rem=0;
       var rev=0;
       while(x>0)
            {
                rem=x%10;
                rev=rem+rev*10;
                x=parseInt(x/10);
            }
       
        if(rev==y)
            {
                return("yahh! it's a palindrome.");
            }
        else
            {
                return("oh nooo!it's not a palindrome.");
            }

    };
    var x=13366331;
    z=palindrome(x);
    console.log(z);