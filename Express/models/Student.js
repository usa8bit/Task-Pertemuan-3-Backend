// import database
const db = require("../config/database.js")

class Student {
    // callback solution
    // static all(callback) {
    //     const query = "SELECT * from students";

    //     db.query(query, (err, result) =>{
    //         callback(result);
    //     });
    // }

    // promise + async await solution
    static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * from students";
    
            db.query(query, (err, result) =>{
                resolve(result);
            });
        });
    }

    static create() {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO students (nama, nim, email, jurusan)";
    
            db.query(query, (err, result) => {
                resolve(result);
            });
        });
    }
}

module.exports = Student;