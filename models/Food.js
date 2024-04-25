const mongoose =require("mongoose");//mongooseモジュールを読み込む
const FoodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true, //空白を削除
        lowercase:true,//小文字に変換
    },
    calories:{
        type:Number,
        default:0,
        validate(value){//バリデーションとは、データの正当性を検証することです。バリデーションを行うことで、データの整合性を保つことができます。
            if(value<0) throw new Error("マイナスのカロリーは存在しません。");{

            }
        }
    }

});

const Food =mongoose.model("Food",FoodSchema);//Foodモデルを作成

module.exports=Food;//Foodモデルを外部に公開
