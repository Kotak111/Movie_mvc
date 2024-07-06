const {Schema,model}=require("mongoose")


const Schemaformat={
     type:String,
     required:true,
     trim:true
}
const MovieSchema = new Schema({
    Moviename:{
        ...Schemaformat,
        unique:true,
    },
    MovieDirector:{
        ...Schemaformat
    },
    MovieRelese:{
        type:Number,
        ...Schemaformat,
        
    },
    MoviePoster:{
        ...Schemaformat,
        required:false
       
    },
    Moviepic:[]

})
const  MovieModel=model("BannerMovie",MovieSchema);
module.exports=MovieModel;