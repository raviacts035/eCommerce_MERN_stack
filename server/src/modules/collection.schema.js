import mongoose from "mongoose";

const collectionSchema=new mongoose.Schema(
    {
      name:{
        typr: String,
        require:["true","Please Provide a schema name"],
        trim:true
      }  
    }, {timestamps:true}
)

export default mongoose.model("Collection",collectionSchema)
// (Call name, SChemaName)