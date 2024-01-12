var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hr",
  port:3306,
  database:"angular"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!!!");
}); 

function getEmployees(callback)
{
    sql = 'select * from product';
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get All Employees : " );
      // console.log(result);
      callback(result);
    });
}
function getEmployee(id,callback)
{
    sql = 'select * from employees where eid = '+id;
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get Blog for Id: "+id );
      callback(result);
    });
}
function addEmployees(blog, callback)
{
    sql = "insert into blog(title,description,date,time,category) values('"+blog.title+"','"+blog.description+"','"+blog.date+"','"+blog.time+"','"+blog.category+"')";
      console.log(blog);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Inserted: " );
      callback(result);
    });
}
function editEmployee(blog, callback)
{
    sql = "update blog set title = '"+blog.title+"',description='"+blog.description+"',category='"+blog.category+"' where id = "+blog.id;
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Updatng DB: " );
      callback(result);
    });
}
function deleteEmplpoyee(id,callback)
{
    sql = "delete from product where pid = ?";
    console.log(sql);
    con.query(sql, [id],function (err, result) {
      if (err) throw err;
      console.log("deleted: " );
      callback('deleted');
    });
}
exports.getEmployees = getEmployees;
exports.addEmployees = addEmployees;
exports.deleteEmplpoyee = deleteEmplpoyee;
exports.getEmployee = getEmployee;
exports.editEmployee = editEmployee;