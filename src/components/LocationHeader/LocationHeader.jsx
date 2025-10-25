// import { } from './LocationHeader.styled';

const LocationHeader = ({ forecast }) => {
  return (
    <>
      <h1>{forecast.location.name}</h1> {/* город */}
      <p>{forecast.location.region}</p> {/* регион */}
      <p>{forecast.location.localtime}</p> {/* дата и время */}
      <p>{forecast.current.condition.text}</p> {/* описание */}
      <p>{forecast.current.dewpoint_c}</p> {/* градусы*/}
      <img
        src={forecast.current.condition.icon}
        alt={forecast.current.condition.text}
      />
      {/* иконка */}
    </>
  );
};

export default LocationHeader;
