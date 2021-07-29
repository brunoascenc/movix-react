import styled from 'styled-components';

export const PopularContainer = styled.div`
  margin-top: 70px;
  position: relative;
  margin-bottom: 50px;

  .left-arrow,
  .right-arrow {
        cursor: pointer;
        font-size: 18px;
        color: #e0d2d1;
    }
    
     .left-arrow{
        position: absolute;
        top: 165px;
        left: 15px;
    }

    .right-arrow{
        position: absolute;
        top: 165px;
        right: 21px;
    }
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 100px));
  /* grid-gap: 2rem; */
  column-gap: 1rem;
  grid-row-gap: 4rem;
  margin-top: 2rem;
`

export const SectionTitle = styled.h2`
    margin-bottom: 15px;
`;

export const Image = styled.img`
    height: 260px;
    border-radius: 12px;
    border: solid 1px rgb(44, 44, 51,0.4);
`;

export const MovieInfo = styled.span``;
