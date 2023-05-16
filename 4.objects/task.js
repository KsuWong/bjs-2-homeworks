function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

// let studentA = new Student("Anna", "female", 25);
// let studentB = new Student("Boris", "male", 26);
// let studentC = new Student("Carl", "male", 27);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  } else {
    return 0;
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty("marks") && this.marks.length > 0) {
    function findAverage (acc, mark, index, arr) {
        const sum = acc + mark;
        if (index === arr.length - 1) {
            return sum / arr.length;
        }
        return sum; 
    };
    let average = this.marks.reduce(findAverage, 0); 
    return average;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  if (this.exclude) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
  }
}
