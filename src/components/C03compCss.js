import React from "react";
import "./C03compCss.css"
import style from './C03comCssObj.js'

const C03componenteConCss = () => {
    return (
        <div className="marcoComponente">
            <h4>Componente 3. Con formas de definir estilos</h4>

            <button style={{backgroundColor:'green', color:'blue', padding:'3px'}}>
                Boton 1 con estilos en linea de atributos (Definido como objeto)
            </button>
            <hr/>
            <button>
                boton 2 con estilos en archivo css (normal)
            </button>
            <br/>

            <button style={style.estilo1}>
                Boton 3 con estilos en archivo js (Definido como objeto)
            </button>
        </div>
    )
}

export default C03componenteConCss