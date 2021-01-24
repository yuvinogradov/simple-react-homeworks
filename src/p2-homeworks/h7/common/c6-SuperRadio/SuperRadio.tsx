import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps
} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange, onChangeOption  <--- Не понял зачем тут две штуки. Юра
    // alert(e.currentTarget.value);
    onChangeOption(e.currentTarget.value);
  };

  const mappedOptions: any[] = options
    ? options.map((
        o,
        i // map options with key
      ) => (
        <label key={name + "-" + i}>
          <input
            type={"radio"}
            checked={options[i] === value}
            value={o}
            onChange={onChangeCallback}
          />
          {o}
        </label>
      ))
    : [];

  return <>{mappedOptions}</>;
};

export default SuperRadio;
