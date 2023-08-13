import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let inputValue;
let inputArray = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date();

let currentWeek = days[date.getDay()];
let currentDay = date.getDate();
let currentmonth = monthNames[date.getMonth()];
let currentyear = date.getFullYear();

app.get("/",(req,res) =>{
    
    res.render("index.ejs",{
        weekDay : currentWeek,
        day: currentDay,
        month: currentmonth,
        year: currentyear
    })
})

app.post("/submit",(req,res) =>{
  inputValue = req.body["note"];
  inputArray.push(inputValue);
  var yo = inputArray.length
  res.render("submit.ejs",{
    weekDay : currentWeek,
    day: currentDay,
    month: currentmonth,
    year: currentyear,
    text : inputValue,
    len : yo,
    array : inputArray
  })
  
})

 app.listen(port, ()=>{
    console.log(`The app is listening at port:${port}`)
 })