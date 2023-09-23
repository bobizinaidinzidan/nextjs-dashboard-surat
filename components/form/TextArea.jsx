import { useState } from 'react';
export default function TextAreaForm(props) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <label className='my-2'>{props.label}</label>
      <textarea
        name={props.name}
        value={props.value || ''}
        onChange={props.change}
        className='w-full p-2 my-2 rounded-md'
        required={Boolean(props.required)}
        onBlur={handleFocus}
        // onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
        placeholder={props.placeholder}
      ></textarea>{' '}
      <span className='text-normal mb-2 text-red-700 hidden'>
        {props.errorMessage}
      </span>
    </div>
  );
}
