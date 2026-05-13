import React from "react";

interface SelectProps {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: [any, any][]; // key - value
  selected: string;
}

const Select = (props: SelectProps) => {
  return (
    <div>
      <div>
        <label htmlFor={props.title}>{props.title}</label>

        <select id="province" value={[props.selected]} onChange={props.onChange}>
          <option value=""></option>

          {props.options?.map((p) => (
            <option key={p[1]} value={p[0]}>
              {p[1]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
