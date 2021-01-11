// solution from previous exercise:

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

// Current exercise code:

let school = {
  students: [],
  addStudent(name, year) {
    switch (year) {
      case '1st':
      case '2nd':
      case '3rd':
      case '4th':
      case '5th':
        let newStudent = createStudent(name, year)
        this.students.push(newStudent);
        return newStudent;
      default:
        console.log('Invalid Year');
    };
  },
  enrollStudent(student, courseName, courseCode) {
    let course = {
      name: courseName,
      code: courseCode,
    };
    student.addCourse(course);
  },
  addGrade(student, courseCode, grade) {
    const course = student.courses.filter(({code}) => code === courseCode)[0];

    if (course) {
      course.grade = grade;
    }
  },
  getReportCard(student) {
    student.listCourses().forEach(({name, grade}) => {
      console.log(`${name}: ${grade || 'In Progress'}`)
    });
  },
  courseReport(courseName) {
    let grades = {};
    this.students.forEach(student => {
      let course = student.courses.filter(course => course.name === courseName)[0];
      if (course && course.grade) {
        grades[student.name] = course.grade;    
      }
    });
    this.displayGrades(grades, courseName);
  },
  average(values) {
    return values.reduce((a, b) => a + b) / values.length;
  },
  displayGrades(grades, courseName) {
    if (Object.getOwnPropertyNames(grades).length !== 0) {
      console.log(`=${courseName} Grades=`);
      for (let name in grades) {
        console.log(`${name}: ${grades[name]}`);
      }
      console.log(`---`);
      console.log(`Course Average: ${this.average(Object.values(grades)).toFixed(0)}`)

    } else {
      console.log(undefined);
    }
  }
};

let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);

school.enrollStudent(bar, 'Math', 101);

school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

school.addGrade(bar, 101, 91);

school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

// school.getReportCard(foo);

// console.log(school.students);
school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

school.courseReport('Advanced Math');
// // =Advanced Math Grades=
// // foo: 90
// // qux: 90
// // ---
// // Course Average: 90

school.courseReport('Physics');
// undefined