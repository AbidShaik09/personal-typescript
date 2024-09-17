let a: number = 50
let s: string = "hello"
let an:any = ["hello", "yellow", a]
export default class stock{
    protected code: number
    private company: string
    public rate : number
    constructor(code:number,company:string,rate:number){
        this.code = code;
        this.company = company;
        this.rate = rate;
    }
    store(){
        console.log(this.code +" company: "+this.company+" rate: "+this.rate)
    }
}


