import React from 'react'

const Register = () => {
  return (
    <section className="py-5">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-4 shadow-sm p-3 mb-5 bg-body rounded">
                <h1 className="py-3 text-center">Regístrese</h1>
                <form>
                <div className="mb-3">
                    <label for="exampleInputName2" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputName2"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputLastName2" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="exampleInputLastName2"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword2"/>
                  </div>
                  <div className="mb-3 form-check">
                    <a className="float-start" href="index.html">Ya tengo una cuenta</a>
                  </div>
                  <button type="submit" className="btn btn-primary">Crear cuenta</button>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Register