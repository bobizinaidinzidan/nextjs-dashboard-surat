import { useState } from 'react';
export default function DropdownSurat(props) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  const datas = props.data;
  return (
    <div>
      <label className='my-2'>{props.label}</label>
      <select
        name={props.name}
        value={props.value || Number('')}
        onChange={props.change}
        className='w-full p-2 my-2 rounded-md'
        // pattern={props.pattern}
        required={Boolean(props.required)}
        onBlur={handleFocus}
        // onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      >
        <option value=''>--Please choose an option--</option>
        {datas.map((Data) => (
          <option value={Data.id} key={Data.id}>
            {Data.nosurat}
          </option>
        ))}
      </select>
      <span className='text-normal mb-2 text-red-700 hidden'>
        {props.errorMessage}
      </span>
    </div>
  );
}
