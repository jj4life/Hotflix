import * as styled from './lolomoStyles';

import Slider from './Slider';

import { TMDB } from 'data/tmdbEndpoints';

export default function Lolomo({ loading, category }) {
  return (
    <styled.Lolomo isLoading={loading}>
      {TMDB[category].sections.map((section) => (
        <Slider key={section.title} section={section} category={category} />
      ))}
    </styled.Lolomo>
  );
}
