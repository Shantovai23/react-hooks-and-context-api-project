import React,{useState} from 'react'

const InputHook=(val)=>{
  const [state,setState] =useState(val)
  const inputFeild=(e)=>{
        e.preventDefault()
        setState(e.target.value) 
  }
  const clear=()=>{
      setState('')
  }

  return [state,inputFeild,clear]
}

export default InputHook