const mysql=require('mysql');
const sabzlearnDb=mysql.createConnection({
    user:'root',
    host:"localhost",
    password:"",
    database:'sabzlearn_shop'
})
sabzlearnDb.connect((err) => {
    if (err) {
        console.log('failed connection');
    } else {
        console.log('connected');
    }
});
module.exports=sabzlearnDb;