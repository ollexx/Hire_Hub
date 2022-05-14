import styled from "styled-components";
import { FcAdvertising } from "react-icons/fc";

export const SolutionsContainer = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606;
  background-color: rgb(246, 246, 253); */
  padding: 5rem 0;
  background: transparent;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 1rem 0;
  padding: 1rem 0;
  border-radius: 1.2rem;
  cursor: pointer;
`;
export const FcAdvertisment = styled(FcAdvertising)`
  font-size: 3rem;
  cursor: pointer;
`;
export const CategoryCard = styled(CardsContainer)`
  display: grid;
  grid-template-columns: [image-row] 1fr [context] 3fr;
  width: 30%;
  justify-content: space-between;
  /* background-color: white; */
  padding: 1.5rem 2rem;
  text-align: center;
  margin: 1rem 0;
  padding-left: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.32);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);

  .box1 {
    grid-column-start: image-row;
    /* From https://css.glass */
    background: transparent;
    transition: all 0.2s ease-in-out;
  }
  .box2 {
    grid-column-start: context;
    /* From https://css.glass */
    background: transparent;

    p {
      /* From https://css.glass */
      background: transparent;

      font-size: 14px;
      margin: 0;
    }
    h6 {
      /* From https://css.glass */
      background: transparent;
    }
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #423edd;
    .box2 {
      transition: all 0.2s ease-in-out;
      p,
      h6 {
        color: white;
        transition: all 0.2s ease-in-out;
      }
    }
    ${FcAdvertisment} {
      g,
      path {
        fill: rgb(255, 254, 254);
      }
    }
  }
`;