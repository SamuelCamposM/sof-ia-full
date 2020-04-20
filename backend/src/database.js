import { connect } from 'mongoose';

 export async function ConectarDb() {
 try {
   await connect('mongodb://localhost/sofia', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('se conecto correctamente a MongoDB');
    
 } catch (error) {
     console.log(error);
 }
}
