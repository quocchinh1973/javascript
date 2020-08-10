function Meo(name,size,color)
{
    this.name = name;
    this.size = size;
    this.color = color;
}
// Tạo đối tượng MeoMun
var MeoMun = new Meo("Mun",45,"Black");
console.log(MeoMun);
//Tạo đối tượng MeoMiu
var MeoMiu = new Meo("Miu",40,"White");
console.log(MeoMiu);
console.log(MeoMiu.size);
console.log(MeoMiu["color"]);
