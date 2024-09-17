import stock  from "./index";



class mutualFunds extends stock{
    public x:number;
    display(){
        this.rate =0 
        this.store()
    }
    constructor(code:number, company :string, rate:number){
        super(code,company,rate)

    }
}
interface Buildings{
    area:number;
    location:string;
}
interface Flats extends Buildings{
    saleAmount:number
}

function testFlats(f:Flats){
    console.log(f.area+" "+f.location+" "+ f.saleAmount)
}


type Building={
    area:number;
    location:string;
}
type Flat = Buildings & {
    saleAmount:number
}

function testFlat(f:Flat){
    console.log(f.area+" "+f.location+" "+ f.saleAmount)
}
testFlat({area:12,location:  "hyd",saleAmount : 300})


testFlats({area:12,location:  "hyd",saleAmount : 300 })

let s = new mutualFunds(12,"tata",12);
s.display();


class Car{
    readonly name:string = "hello"
}