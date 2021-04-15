import React, { forwardRef, useImperativeHandle } from 'react';


interface FormProps {
  initialData?: string;
}

export interface FormRef {
  onSubmit(): void;
}

const Form: React.ForwardRefRenderFunction<FormRef, FormProps> = (props, ref)=> {
  const onSubmit = () => {
    alert('submit')
  }

  useImperativeHandle(ref, () => ({
    onSubmit
  }))

  return(
    <form>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <input type="password" name="password"/>
    </form>
  )
}

export default forwardRef(Form);