const express = require("express");
const cors = require("cors");
const db = require("./config");
// const date = require("./config");
// const { query } = require("express");
const app = express();
app.use(cors());

app.get("/", async (req, res) => {
    res.send("hello conmou");
});

app.get("/min", async (req, res) => {
    const snapshot = await db.collection("Min").orderBy('TS','desc').limit(10).get();
    const Minlist = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    Minlist.reverse()
    res.send(Minlist);
}); 

app.get("/day", async (req, res) => {
    const snapshot = await db.collection("Day").orderBy('TS','desc').limit(5).get();
    const Daylist = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    Daylist.reverse()
    res.send(Daylist);
}); 
app.listen(5001, () => console.log("Up & RUnning *5001"));

// snapshot.forEach(element => {
    //     console.log(element.data())
    // });
    // const unsubscribe = min.onSnapshot((querySnapshot) => {
    //     console.log(`Received query snapshot of size ${querySnapshot.size}`);
    // });
    // res.send(unsubscribe)
    // const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    // const data = await min.orderB吧y('TS','desc').limit(5).get().then(snapshot => {
    //     //         snapshot.forEach( element => {
    //     //             const timestamp = element.data().TS
    //     //             const date = new Date(timestamp);
    //     //             // console.log(date.getDay())
    //     //             time = {
    //     //                 nanoseconds: 0,
    //     //                 seconds: date
    //     //             }
    //     //             const limit = new Date(time.seconds*1000)
    //     //             // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //     //             // console.log(limit.toLocaleDateString(undefined, options))
    //     //             const list2 = limit.toLocaleString("zh-TW");
    //     //             res.send(list2);
    //     //         })
    //     //     })