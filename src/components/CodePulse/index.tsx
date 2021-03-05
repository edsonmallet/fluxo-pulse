/* eslint-disable react/no-array-index-key */
import useTranslation from '@/contexts/Intl';
import { useRef, useState } from 'react';
import { Container, Input, Inputs, Label, Validations } from './styles';

interface CodePulseProps {
  length: number;
  label?: string;
  loading?: boolean;
  valid?: boolean;
  onComplete: (code: any) => void;
  onChange: (code: any) => void;
}

export interface ValidationProps {
  type: string;
}

const CodePulse: React.FC<CodePulseProps> = ({
  length,
  label,
  valid,
  loading,
  onComplete,
  onChange,
}: CodePulseProps) => {
  const [code, setCode] = useState<Array<string>>(
    [...Array(length)].map(() => ''),
  );
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const { text } = useTranslation();

  const processInput = (event: any, slot: number) => {
    const num = event.target.value;
    if (/[^a-zA-Z0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((number) => number !== '')) {
      onComplete(newCode.join(''));
    } else {
      onChange(newCode.join(''));
    }
  };

  const onKeyUp = (event: any, slot: number) => {
    if (event.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = '';
      setCode(newCode);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputs.current[slot - 1].focus();
    }
  };

  const handleValidation = () => {
    return loading
      ? 'loading'
      : Object.values(code).some((item) => item.length === 0)
      ? ''
      : valid
      ? 'valid'
      : 'invalid';
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Inputs>
        {code.map((number, index) => {
          return (
            <Input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={number}
              readOnly={loading}
              onChange={(event) => processInput(event, index)}
              onKeyUp={(event) => onKeyUp(event, index)}
              ref={(ref) => inputs.current.push(ref)}
            />
          );
        })}
      </Inputs>
      <Validations type={handleValidation()}>
        {handleValidation().length > 0 && text(handleValidation())}
      </Validations>
    </Container>
  );
};

export { CodePulse };
