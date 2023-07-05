//i
    const button = document.getElementById('myButton');
    const myText = document.querySelector('.text');
    //i have to attach an event listener ...
    button.addEventListener('click', function(){
            //alert('Hi, you clicked me!');
            myText.style.color = 'green';
            //mousedown/click & right-click, mouseup/click, mouseover, click, keyup
    });
    //
//ii    
    const myBackground = document.getElementById('myBackground');
    const button1 = document.getElementById('myButton1');
    button1.addEventListener('click', doSomething);

    function doSomething(){
      // myBackground.style.backgroundColor = 'silver';
      myBackground.style.display = 'block';
    }
    //
//iii   
    //event
    const myEvent = document.getElementById('myEvent');
    myEvent.addEventListener('click', eventFunction);

    function eventFunction(e){
        console.log('this is event ', e);
    }
   //
//iv
    //add event on a class
    const myEvent1 = document.querySelector('.myEvent1');
    myEvent1.addEventListener('click', function(){
        alert('I am clicked');
    });
    //
//v
    //event on html
    function eventOnHtml(){
        alert('event added on html page');
    }
    //
//vi
    //genereate message based on score
    const myMessage = document.getElementById('message');
    const myScore = document.getElementById('myScore').innerHTML;
    //console.log(myScore);//18
    const showScore = document.getElementById('showScore');
    showScore.addEventListener('click', function(){
        if(myScore > 10){
            //console.log('excellent!')
            myMessage.innerHTML = 'Congra you scored ' + myScore + '/ 20'; 
        }else{
            //console.log('poor')
            myMessage.innerHTML = 'you scored ' + myScore + '/ 20 ' + 'try next time!';
        }
    })
    //
//vii
    //generate random number and compare with the lucky-number
    let randomNumber = Math.random().toFixed(1)*10;//random numb b/n 0-10
    //console.log(randomNumber)
    const showMessage =  document.getElementById('showMessage');
    const luckyNumber = document.getElementById('luckyNumber');
    luckyNumber.addEventListener('click', function(){
        if(randomNumber === 5){
            //alert('the lucky-number is ' + randomNumber + ' you won')
            showMessage.innerHTML = '<b> the lucky-number is ' + randomNumber + ' you won </b>'
        }else{
            //alert('the lucky-number is ' + randomNumber +  ' try more')
            showMessage.innerHTML = 'the lucky-number is ' + randomNumber +  ' try more'
        }
    })
    //
    //refresh button
    const myRefresh = document.getElementById('refresh');
    myRefresh.addEventListener('click', refreshIt);
    function refreshIt(){
        location.reload();
    }
    //
//8  event with input field
    //
    function amountChanged(){
        const pizzaPrice = 8;
        const myAmount = document.getElementById('amount').value;
        //console.log(myAmount)
        const priceDiv = document.getElementById('priceDiv');
        let myTotalPrice = pizzaPrice * myAmount;
        priceDiv.innerHTML = 'Total pizza price is ' + myTotalPrice + '€';
    }

   
