let ip = {
    "name":" PRITHIVIRAJAN",
    "mobiles":9342539054,
    "email":"prithivirajan22@gmail.com",
  " date of birth":"04/06/2004",
  "eduction":[
    {
      "degree": "bsc physics",
       "Institute":"st joshep collage",
        "completed year": "2024"  }
  ], 
  "home detials":{
    "father name ":"Rajmohan",
  "mother name":"sutha r",
   "adress ":"48/11E, palliyvaya, trichy ,lalgudi",     
  
  },
          
     "course":{
  "institute ":"GUVI",
  "mother name":"FULL stack develepment",
   "adress ":"FSD56WE-T",     
     },       
  };
  // for loop
let objKeys = Object.keys(ip);

for (let i = 0; i < objKeys.length; i++) {
  if (typeof ip[objKeys[i]] == "object") {
    console.log(`${objKeys[i]} : ${JSON.stringify(ip[objKeys[i]])}`);
  } else {
    console.log(`${objKeys[i]} : ${ip[objKeys[i]]}`);
  }
}
// for in loop
for (let key in ip) {
    if (typeof ip[key] == "object") {
      console.log(`${key} : ${JSON.stringify(ip[key])}`);
    } else {
      console.log(`${key} : ${ip[key]}`);
    }
  }

  //for of loop
  
  for (const [key, value] of Object.entries(ip)) {
    if (typeof ip[key] == "object") {
      console.log(`${key} : ${JSON.stringify(ip[key])}`);
    } else {
      console.log(`${key} : ${ip[key]}`);
    }
  }
  
  //forEach loop
  
  Object.keys(ip).forEach((x) => {
    if (typeof ip[x] == "object") {
      console.log(`${x} : ${JSON.stringify(ip[x])}`);
    } else {
      console.log(`${x} : ${ip[x]}`);
    }
  });