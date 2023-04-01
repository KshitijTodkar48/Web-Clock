const clock = document.getElementById("clock");
const current_date = document.getElementById("date");
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] ;
const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const showTime = () =>{
    const current_time = new Date();

    const time = `${current_time.getHours()<10 ? 0 : ""}${current_time.getHours()}:${current_time.getMinutes()<10 ? 0 : ""}${current_time.getMinutes()}:${current_time.getSeconds()<10 ? 0 : "" }${current_time.getSeconds()}` ;

    const date = `${weekday[current_time.getDay()]}, ${current_time.getDate()} ${monthNames[current_time.getMonth()]} ${current_time.getFullYear()}` ;
    
    clock.innerText = time ;
    current_date.innerText = date ; 
}

setInterval(showTime,1000);