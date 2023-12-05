function tinhToanBai1(){
    let arr1 = [4,2,6,1,3,7,8,9,10];
    let count = 0;
    let maxArr = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i]>maxArr){
            maxArr = arr1[i];
            arr1.slice(maxArr);
            count++;
        }if(count==2){
            for (let j = 0; j < arr1.length; j++) {
                if (arr1[j]>maxArr){
                    maxArr = arr1[j];
                    return maxArr;
                }
            }
        }

    }
}


function bai1(){
    console.log("So lon thu 3 la: "+tinhToanBai1());
}


function tryRemoveFromArray(){
    let a = [14,51,616,67,41,54];
    let result2 = [];
    let b = +prompt("nhap vi tri can xoa");
    if (b<0){
        console.log("khong tim thay vi tri")
    }
    for (let i = 0; i < a.length; i++) {
        if(i != b) {
            result2.push(a[i]);
        }

    }
    return result2;
}
function bai2(){
    console.log(tryRemoveFromArray());
}

// function tinhToanBai3(){
//     let str2 ="apple,pen,book";
//     let str1 ="pen,book";
//     let tach1 = str1.valueOf();
//
// }


class Rectangle{
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render(){
        let myCanvas =  document.getElementById("myCanvas")
        let ctx = myCanvas.canvas
        if (myCanvas) {
            let ctx = myCanvas.getContext('2d');
            ctx.fillRect(0, 0, this.width, this.height);
        }
    }
}
let rec1 = new Rectangle(10, 10, 200,100, color="#000000");
function bai4(){
    rec1.render();

}

function tinhToanBai3() {
    let str1 = "Apple,car";
    let str2 = "Apple,car,pen";
    if (str1.length < str2.length) {
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j <str2; j++) {
                if (str1[i]===str2[j]){
                    return true
                }else {
                    return false;
                }
            }
        }
    }else {
        return false;
    }
}
function bai3(){
    console.log(tinhToanBai3());
}