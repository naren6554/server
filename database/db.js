
//narengit
import mongoose from 'mongoose';
export const Connection= async () =>
{

 const URL=`mongodb://localhost:27017`;

try{  


     await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
    console.log("DB CON SUCCESSFUL");
}
catch(error){

console.log("db error",error);

}

}
