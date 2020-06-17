const Calculate_my_interest=(event)=>{
	       
			let time;
			let rate;
			let principal;
			let interest;
			//Checking for invalid principal
			if(isNaN(parseInt(document.getElementById('amount').value)))
				{
					return alert('Please Enter a valid amount in Naira');
				}
        
			if(isNaN(parseInt(document.getElementById('time').value)))
				{
					return alert('Please Enter a valid time');
				}
			

		    let typedAmount=parseInt(document.getElementById('amount').value)
			let typedtime=parseInt(document.getElementById('time').value);

			 if(typedAmount<1000)return alert('Sorry, minimum amount that can be locked is 1000 Naira')
			 	principal=typedAmount

            //checking for invalid duration
            let selectedIndex=document.getElementById('select').selectedIndex;
			if(selectedIndex==0)time=typedtime;
			else if(selectedIndex==1)time=typedtime*30;
			else{time=typedtime*365};

               //fixing correct rate
			if(time<10)return alert('Sorry, You can only lock cash for 10 days or more')
			else if(time>9&&time<31)rate=6;
			else if(time>30&&time<61)rate=8;
			else if(time>60&&time<91)rate=10;
			else if(time>90&&time<730)rate=13;
			else{rate=15.5};
			let selectValue=document.getElementById('select').options[selectedIndex].value;
			interest=(principal*rate*time)/(100*365)
			let roundedInterest=parseFloat(interest).toFixed(2)
			event.preventDefault();
			return document.getElementById('result').innerHTML+=`<p>After  ${typedtime} ${selectValue} of locking ${principal} Naira, your interest from SafeLock will be ${roundedInterest} Naira.</p>`

		}
