import HeaderBackground from '../../assets/headerBackground.png';
import {
    CardContentDescription, CardContentLinks, CardContentTitle, CardContentWrapper, CardWrapper
} from './styles';

export const RectangularCard = () => {
  return (
    <CardWrapper>
      <img id="rect-card-img" alt="" src={HeaderBackground} />
      <CardContentWrapper id="rect-card-content">
        <CardContentTitle id="rect-card-title">
          <span>Cameron Williamson</span>
          <div>
            <span>Github</span>
          </div>
        </CardContentTitle>
        <CardContentDescription id="rect-card-description">
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </span>
        </CardContentDescription>
        <CardContentLinks id="rect-card-links">
          <div>
            <span>cameronwll</span>
          </div>
          <div>
            <span>Rocketseat</span>
          </div>
          <div>
            <span>32 seguidores</span>
          </div>
        </CardContentLinks>
      </CardContentWrapper>
    </CardWrapper>
  );
};
