class TestCreateDto{
    username;
    email;
    password;
  
    constructor(data: any) {
      this.username = data.username;
      this.email = data.email;
      this.password = data.password;
    }
  }

module.exports = TestCreateDto;