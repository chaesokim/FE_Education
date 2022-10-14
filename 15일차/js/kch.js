var num3 = 0;
setInterval( //간극조절, 주기적으로 
    function(){
        num3++;
        num3 %=3;
        console.log(num3);
    }, 1000 // 수행한다 1초 주기로
)
// 터미널 종료 : ctrl + c