

var meo = {
name: "MiuMiu",
size: 45,
color: "đen trắng",
run: function(){console.log("Miu đang chạy");},
sleep: function(){console.log("Miu đang ngủ");}
}; // Khởi tạo đối tượng meo

console.log(meo.name);
//Hiển thị giá trị ra màn hình console thuộc tính name của meo
console.log(meo["size"]);
 //Hiển thị giá trị ra màn hình console thuộc tính size của meo
meo.run();
//Gọi phương thức run của đối tượng meo



var meo = new Object;
meo.name = "Mun";
meo.run = function(){ console.log("Mun đang chạy")};
//Khởi tạo đối tượng meo gồm thuộc tính name và phương thức run
console.log(meo.name);
//Hiển thị giá trị ra màn hình console thuộc tính name của meo
meo.run(); 
