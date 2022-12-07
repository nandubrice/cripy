/////////////////////////////////////////////////////
////////// 1. Componente tipo JSX ///////////////////
/////////////////////////////////////////////////////
import React from 'react';                      //imr

const Componente = () => {                      //sfc
    return ( <h1>Componente (JSX)</h1> );
}
 
export default Componente;

/////////////////////////////////////////////////////
////////// 2. Componente clase //////////////////////
/////////////////////////////////////////////////////
/*
import React, { Component } from 'react';       //rcc

class P1componente extends Component {
    render() {
        return (
            <div>
                Componente clase
            </div>
        );
    }
}

export default P1componente;
*/

/////////////////////////////////////////////////////
////////// 3. Componente funcional equivalente //////
/////////////////////////////////////////////////////
/*
import React from 'react'                       //rfce

export default function P1componente() {
    return (
        <div>
            Componente funcional equivalente.
        </div>
    )
}
*/


/*
import React from 'react'                       //rafc

export const P1componente = () => {
    return (
        <div>
            Componente por fn => Equivalente 2
        </div>
    )
}
*/

/*

import React from 'react'                       //rfce

function P1componente() {
    return (
        <div>
            
        </div>
    )
}

export default P1componente
*/

/*
import React from 'react'                       //rafce

const P1componente = () => {
    return (
        <div>
            
        </div>
    )
}

export default P1componente
*/
