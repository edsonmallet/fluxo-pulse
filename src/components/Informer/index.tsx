import useTranslation from '@/contexts/Intl';
import { Button } from '../Button';
import { Container, Privacy, FormWrapper, Select } from './styles';

const InformerWrapper: React.FC = () => {
  const { text } = useTranslation();

  return (
    <Container>
      <div>
        <h2>{text('informerTitle')}</h2>
        <p>{text('informerDescription')}</p>
      </div>

      <FormWrapper>
        <Select>
          <option value="female">Feminino</option>
          <option value="male">Male</option>
          <option value="other">Outros</option>
        </Select>
        <Button>Próximo &rarr;</Button>
      </FormWrapper>

      <Privacy>
        <h4>{text('privacyPolitic')}</h4>
        <p>{text('privacyPoliticParagraph')}</p>
      </Privacy>
    </Container>
  );
};

export { InformerWrapper };
