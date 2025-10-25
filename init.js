const mongoose = require("mongoose");
const Chat = require ("./models/chat.js");

main()
.then(()=>{
    console.log("connection successfull")
})
.catch((err) => console.log("mongoose"))


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whtasapp');
}

Chat.insertMany([{
    from:"maryam",
    to: "hasan",
    msg:"lets start from beginning, once again",
    created_at: new Date()
  },
  {
    from:"hasan",
    to: "maryam",
    msg:"again, lets walk in the mids of autumn ,falls",
    created_at: new Date()
  },
  {
    from:"maryam",
    to: "hasan",
    msg:"lets sat in the river basin , gather memories",
    created_at: new Date()
  },
  {
    from:"hasan",
    to: "maryam",
    msg:"lets start from beginning, once again",
    created_at: new Date()
  }
]);
