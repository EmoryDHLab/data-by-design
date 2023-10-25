let voyages = [];
let voyages_raw = [];
const num = 1000;
let noiseScale = 0.01;
let table
let xoff = 0.0;
let flag = 1;
var t = 0;
var angle = 180;	// initialize angle variable
var scalar = 10; 

let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function preload(){
    voyage_table = loadTable("data/conceptual_vis.csv","csv","header")
}
function setup(){
    createCanvas(5000, 3000);
    t = 0;
    background("#081245");
    stroke(225);
    x = 0;
    //console.log(voyage_table)

    let days_bg = voyage_table.getColumn("days_since_bg");
    let days_end = voyage_table.getColumn("days_since_end");

    let embs = voyage_table.getColumn("total_embarked_18");
  
    let e_day = min(days_bg);
    let l_day = max(days_end);

    let min_size = min(embs);
    let max_size = max(embs);

    for(let r  = 0; r < voyage_table.getRowCount(); r++){
        const v_id = voyage_table.getString(r,"voyage_id");
        //const resis = voyage_table.getString(r,"if_res");
        let x = voyage_table.getNum(r,"days_since_bg")+1
        let emb = voyage_table.getNum(r,"total_embarked_18")
        let disemb = voyage_table.getNum(r,"total_disembarked")
        let resis = voyage_table.getNum(r,"if_res")
        let m_x = map(x, e_day, l_day, 0, width);
        let end = voyage_table.getNum(r,"days_since_end")
        let m_end = map(end, e_day, l_day, 0, width);
        let y = random(height);
        voyages[r] = new voyage(m_x,y,m_end,emb,disemb, resis)
    }
    
    
 
  
  
}

function mouseReleased(){

}

function draw(){
    //background(225,10);
    for (let i = 0; i < voyages.length; i++) {

        if(voyages[i].resis == 0){
            voyages[i].x += 1;
        }
        
        voyages[i].show();
        t += 1
        
    }
}

function on_track(v){

  return v.x <= v.end;
}

class voyage_points {
    constructor(x, y, res){
        this.x = x;
        this.y = y;
        this.on_track = true;
        this.res = res;
    }

    update() {

    }

    display() {
        if(this.res == 0){
            stroke("white")
        }else{
            stroke("#f8fc03")
        }
        
        point(this.x, this.y);
    }
}

class voyage {
    constructor(start, y, end, emb, disemb, resis) {
      this.start = start;
      this.end = end+100;
      this.x = start;
      this.y = y;
      this.y_org = y;
      this.emb = emb*0.01;
      this.disemb = disemb*0.01;
      this.resis = resis;
      this.point_array = [];
     
    }

    calc_wave(){
        theta += 0.02;

        // For every x value, calculate a y value with sine function
        let x_loop = theta;
        for (let i = 0; i < this.point_array.length; i++) {
            this.point_array[i].y = this.y_org;
        }

    }

   
  
    show() {
        //flag = -flag
       if(this.resis == 0){
        flag = 1
        noiseScale = 0.01;
        randomSeed(0);
        let n = noise(this.x*noiseScale, this.y*noiseScale)
        let a  = TAU * n;
        this.y += flag*sin(a);
        strokeWeight(0.5)
        if(!on_track(this)){
            this.point_array = [];
        }else{
            this.point_array.push(new voyage_points(this.x, this.y, this.resis))
            this.point_array[this.point_array.length-1].display();

        }
        

       }else{
        if(scalar < 0){
            angle = 180;
            scalar = 10;
          }
        var x = this.x + scalar * cos(angle);
        var y = this.y + scalar * sin(angle);
        strokeWeight(1)
        stroke("#f8fc03")
        point(x, y);
        scalar -= 0.03;
        
        
        angle++;

       }
    }
  }