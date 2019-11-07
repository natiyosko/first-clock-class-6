import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'new-clock',
  templateUrl: './new-clock.component.html',
  styleUrls: ['./new-clock.component.css']
})
export class NewClockComponent {

time: string; 
@Input() city: string;
//@Input() D: string;

  constructor() {
    this.setTime();
    setInterval(()=> this.setTime(), 1000);
   }

   setTime(){
     let d = new Date;
     let Newtime = ''
     switch(this.city){
       case "Tal Aviv":
        Newtime = (d.getHours() + ":" + d.getMinutes() + ":" +  d.getSeconds())
        break;
       case "London":
        Newtime = (d.getHours()-2 + ":" + d.getMinutes() + ":" +  d.getSeconds())
        break;
       case "New York":
        Newtime = (d.getHours()-7 + ":" + d.getMinutes() + ":" +  d.getSeconds())
        break;
       case "Paris":
        Newtime = (d.getHours()-1 + ":" + d.getMinutes() + ":" +  d.getSeconds())
        break;
       case "Tokyo":
        Newtime = (d.getHours()+7 + ":" + d.getMinutes() + ":" +  d.getSeconds())
        break;
       case "Hong Kong":
        Newtime = (d.getHours()+6 + ":" + d.getMinutes() + ":" +  d.getSeconds())
        break;
     }
     this.time = Newtime;
   }
}
