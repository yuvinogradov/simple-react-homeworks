import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  Children
} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((
        o,
        i // map options with key
      ) => (
        // <option value="volvo">Volvo</option>

        <option key={o}>{o}</option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // onChange, onChangeOption
    //alert(e.currentTarget.value);
    onChangeOption(e.currentTarget.value);
  };

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
