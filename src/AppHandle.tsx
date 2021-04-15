import React, {useRef} from 'react';
import Form, {FormRef} from './Form';

/**
 * Modificar a referencia passada para um componente nosso
 * (como se fosse compartilhar props de filho para o pai)
 * useImperativeHandle trabalha junto com o useRef
 */


const AppHandle: React.FC = () => {
  const formRef = useRef<FormRef>(null);

  const handleSubmit = () => {
    formRef.current.onSubmit();
  }
  return <Form ref={formRef}/>;
}

export default AppHandle;