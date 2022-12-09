import React from 'react'                     

const C03estilosConCss = () => {                      
    return(
        <div className='marcoComponente'>
            <h4>Componente 03 con formas de dividr estilos</h4>
            <button style={{backgroundColor: 'red', color:"white", padding:"10px"}}>
                Boton 1 con estilos en linea de atributos (Definido como objeto)
            </button>
            <hr/>
            <button>
                Boton 2 con estilos css normal
            </button>
            
        </div>
    )
}
export default C03estilosConCss