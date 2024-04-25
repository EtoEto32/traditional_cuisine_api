
const express=require("express");//エクスプレスモジュールを読み込む
const app=express();//エクスプレスのインスタンスを生成
const mongoose=require("mongoose");//mongooseモジュールを読み込む

const foodRouter =require("./routes/foodRoutes");//foodRouresモジュールを読み込む
app.use(foodRouter);//foodRouterを使用する


/*データベース接続*/
mongoose.connect(
    "mongodb+srv://ace09040805:<password>@cluster0.l1ji1of.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0"
 )
 .then(()=>console.log("DB Connected"))//データベースに接続
 .catch((err)=>{
    console.log(err);//エラーが発生した場合はエラーメッセージを表示
 });


app.listen(3000,()=>{//3000番ポートでサーバーを立ち上げる
    console.log("server is running...")//サーバーが立ち上がったらコンソールにメッセージを表示
})
module.exports=app;