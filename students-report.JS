var message = '';
var student;

function print(message) {
  document.write("<section>" + message + "</section>");
}

for (var i = 0; i < students.length; i++) {
  student = students[i];
  console.log(student);
  message += '<h1>' + student.name + '</h1>';
  message += '<p>' + student.track + '</p>';
  message += '<p>' + student.achievements + '</p>';
  message += '<p>' + student.points + '</p>';
}

print(message);
