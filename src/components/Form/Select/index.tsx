import { Select } from './styles';

interface IOptions {
  value: string;
  label: string;
}

interface SelectProps {
  options: Array<IOptions>;
  name: string;
  onChange?: (event: any) => void;
}

const SelectField: React.FC<SelectProps> = ({
  options,
  name,
  onChange,
}: SelectProps) => {
  return (
    <>
      <Select onChange={onChange} name={name}>
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </Select>
    </>
  );
};

export { SelectField };
