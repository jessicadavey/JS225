let Account = (function() {

  const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let randomNumber = function(max) {
    return Math.floor(Math.random() * max);
  }
  
  let anonymize = function() {
    let result = "";
    
    for (let index = 0; index <= 15; index += 1) {
      result = result.concat(CHARS[randomNumber(CHARS.length - 1)]);
    }
    
    return result;
  }

  return {
    init(email, password, firstName, lastName) {
      this.password = password;

      this.email = function(currentPassword) {
        if (currentPassword === this.password) {
          return email;
        }
        return 'Invalid Password';
      };

      this.firstName = function(currentPassword) {
        if (currentPassword === this.password) {
          return firstName;
        }
        return 'Invalid Password';
      };

      this.lastName = function(currentPassword) {
        if (currentPassword === this.password) {
          return lastName;
        }
        return 'Invalid Password';
      };

      this.displayName = anonymize();

      return this;
    },

    resetPassword(currentPassword, newPassword) {
      if (currentPassword === this.password) {
        this.password = newPassword;
        return true;
      }

      return 'Invalid Password';
    },

    reanonymize(currentPassword) {
      if (currentPassword === this.password) {
        this.displayName = anonymize();
        return true;
      }

      return 'Invalid Password';
    }
  };

  })();



let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
console.log(fooBar.displayName);

console.log(fooBar.__proto__);
