var n = Math.floor(Math.random()*100)+1;  //要猜的答案，random()隨機亂數的值在0.0～0.999之間
var num = 0;   //輸入的數字
var minNum = 1;
var maxNum = 100;

num = prompt("請輸入數字:", "");

if (num == null || num == n)  //剛開始將直接猜對或是未輸入者做判斷處理
    if(num==null) {
        document.write("你沒有輸入，答案是"+ n +".");
    } else {
        document.write("答對了，"+ n +".");
    }
    for (var i=1; i<=num; i++)  {  //計算次數，並迴圈執行判斷
        if(num>n) {
            maxNum = num;
            num = prompt("你輸入"+ num +"太高了，請再輸入:(" + minNum + "-" + maxNum + ")之間", "");
    continue;
    } else if (num<n) {
            minNum = num;
            num = prompt("你輸入"+ num +"太低了，請再輸入:(" + minNum + "-" + maxNum + ")之間", "");
    continue;
    } else if (num == n) {
        document.write("答對了，"+ n +".<br />");
        break;
    } else {
        document.write("你放棄了，答案是"+ n +".");
        break;
    }
}
document.write("恭喜你，共猜"+ i +"次"); //跳出迴圈並執行計算次數的工作