import React from 'react'

const Login = () => {
  return (
    <section className="py-5">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-4 shadow-sm p-3 mb-5 bg-body rounded">
                <h1 className="py-3 text-center">Ingrese</h1>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div id="emailHelp" className="form-text">Ingrese el email que suministró al momento de regiatrarse</div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" for="exampleCheck1">Recordar</label>
                      <a className="float-end" href="index.html">¿Olvidó su contraseña?</a>
                  </div>
                  <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Login