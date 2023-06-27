class UsersController {
  /**
   * index - GET para listar vários registros
   * show - GET para exibir um registro específico
   * create - POST para criar um registro
   * update - PUT atualizar um registro
   * delete - DELETE remover um registro
   */

  create(request, response) {
    const { name, email, password } = request.body;
    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
