import React from "react";

const Cart = () => {
    return (
        <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                    Carrito de compras
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    <div>
                        <div className="row">
                            <div className="col-3 d-flex align-items-center p-2 border-bottom">
                                <img src="https://kevins.com.co/img/productos/6R06810172.jpg" alt="Product"/>
                            </div>

                            <div className="col-3 d-flex align-items-center p-2 border-bottom">
                                Reloj Guess Análogo
                            </div>

                            <div className="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                                $ 1076000
                            </div>

                            <div className="col-2 d-flex align-items-center justify-content-end p-2 border-bottom">
                                1
                            </div>

                            <div className="col-1 d-flex align-items-center justify-content-center p-2 border-bottom">
                                <a href="index.html">
                                    <i className="bi bi-x-square"></i>
                                </a>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                                Total a pagar:
                            </div>
                            <div className="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                                <b> $ 1076000</b>
                            </div>
                            <div className="col-12 d-flex align-items-center justify-content-center p-4 border-bottom">
                                <a className="btn btn-primary" href="index.html" id="compra"> Finalizar compra </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
