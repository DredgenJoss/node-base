const TestCreateDto = require('./test-create-dto');

class TestUpdateDto extends TestCreateDto {
  id;

  constructor(data: any) {
    super(data); // Llama al constructor de la clase padre (TestCreateDto)
    this.id = data.id;
  }
}

module.exports = TestUpdateDto;