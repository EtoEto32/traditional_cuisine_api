const express = require("express");//エクスプレスモジュールを読み込む
const router = express.Router(); // ルーターインスタンスを作成
const foodModel = require("../models/food");//foodモデルを読み込む
router.use(express.json());//エクスプレスのjsonメソッドを使用

router.get("/foods", async (req, res) => {//foodsのルートにアクセスした場合
    try {//tryブロック
        const foods = await foodModel.find({});//foodモデルから全てのデータを取得
        res.send(foods);//foodsを表示
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/food", async (req, res) => {//foodのルートにアクセスした場合
    const food = new foodModel(req.body);//リクエストボディをfoodモデルに代入
    try {
        await food.save();//foodを保存
        res.status(201).send(food);//201番は作成された場合
    } catch (err) {
        res.status(500).send(err);
    }
});

router.patch("/food/:id", async (req, res) => {//idを指定して更新
    try {  
        await foodModel.findByIdAndUpdate(req.params.id, req.body, { new: true });//idを指定して更新 {new:true}は更新後のデータを取得するためのオプション
        await foodModel.save();//foodを保存
        if (!food) {//foodが存在しない場合
            return res.status(404).send();
        }
        res.send(food);
    } catch (err) {//エラーが発生した場合
        res.status(500).send(err);//エラーメッセージを表示
    }
});

router.delete("/food/:id", async (req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.params.id);//idを指定して更新 resが要らない理由は削除するだけだから
        if (!food) {//foodが存在しない場合
            return res.status(404).send();
        }
        res.send(food);
    } catch (err) {//エラーが発生した場合
        res.status(500).send(err);//エラーメッセージを表示500番はサーバーエラー
    }
});
module.exports = router; // ルーターをエクスポート

