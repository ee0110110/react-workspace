const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();
app.use( bodyParser.json())
app.use( cors())

let data_set = [
    {id:"aaa-s", pwd:"aaa", name:"홍길동-s", addr:"산골짜기"},
    {id:"bbb-s", pwd:"bbb", name:"김개똥-s", addr:"개똥별"},
    {id:"ccc-s", pwd:"ccc", name:"고길동-s", addr:"마포구"},
]

/*
    request, response
 */

app.get("/mem", (req, res)=>{
    const result = 
        data_set.filter( data => data.id === req.params.id )[0] //req와 파라미터를 이용해서 아이디를 꺼내옴 /mem/aaa-s
        res.json( result )
})
// : id(ccc-s) /mem/aaa-s 이렇게 치면 요청한 정보의 파라미터 값(req.params.id)을 가져옴
app.post("/mem", (req, res) => {
    console.log("request body : ", req.body );
    data_set = data_set.concoat( req.body );
}) // 바디에서 꺼내와 저장하겠다..
app.listen(4000, ()=>console.log("4000 back 구동"))


