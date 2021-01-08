function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      return `${name} is a ${year} year student`
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, note) {
      let course = this.courses.find(course => course.code === code);
      if (course.note) {
        course.note = course.note + '; ' + note;
      } else {
        course.note = note;
      }
    },
    viewNotes() {
      let notes = '';
      this.courses.forEach((course, index) => {
        if (course.note) {
          if (index !== 0) {
            notes += '\n';
          }
          notes += `${course.name}: ${course.note}`;
        }
      });
      return notes;
    },
    updateNote(code, newNote) {
      let course = this.courses.find(course => course.code === code);
      course.note = newNote;
    }
  }
}

let foo = createStudent('Foo', '1st');
console.log(foo.info());
// "Foo is a 1st year student"
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
console.log(foo.viewNotes());
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
console.log(foo.viewNotes());
// "Math: Fun course; Remember to study for algebra"
// "Advanced Math: Difficult subject"
foo.updateNote(101, 'Fun course');
console.log(foo.viewNotes());
// "Math: Fun course"
// "Advanced Math: Difficult subject"