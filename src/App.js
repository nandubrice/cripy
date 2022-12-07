import React from "react";
import Componente from './components/P1componente';
import Contador from './components/P2contador';
import Contador2 from './components/P3dobleestado';
import Variable from './components/P4variable';
import Matriz from './components/P6matriz';
import MatrizOperaciones from './components/P7matrizOperaciones';

function App(){
  return (
    <div className="App">
      <h1>Practicas... React</h1>
      <P1Componente/>
      <br />
      <P2Estado/>
      <br />
      <C03componenteConCss/>
      <br />
      <EjemploDeEstado/>
      <br />
      <EjemploDeDobleEstado/>
      <br />
      <ComponenteConVariable xVariable="Hola mundo... desde... react"/>
      <br />
      <OperadorTernario xEdad ="20" />
      <br/>
      <Matriz/>
    </div>
  );
}

export default App;