'use client';
import { useState } from 'react';
export default function InputForm(props) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <label className='my-2 text-lg'>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className='w-full p-2 my-2 rounded-md border'
        value={props.value || ''}
        onChange={props.change}
        pattern={props.pattern}
        required={props.required.toString()}
        onBlur={handleFocus}
        onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span className='text-normal mb-2 text-red-700 hidden'>
        {props.errorMessage}
      </span>
    </div>
  );
}
