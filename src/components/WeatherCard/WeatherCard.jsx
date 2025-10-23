import {
  Card,
  // Image,
  Content,
  Title,
  Type,
  Abilities,
  // StatsList,
  // StatsListItem,
  // Span,
} from './WeatherCard.styled';

// import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

const PokemonCard = () => {
  return (
    <>
      <Card>
        <Title>Kiev</Title>

        <Content>
          <Type>Type:</Type>
          <Abilities>Abilities:</Abilities>
        </Content>
      </Card>
    </>
  );
};

export default PokemonCard;
