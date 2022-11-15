import styled from 'styled-components'

export const DetailsStyle = styled.section`
  .info {
    background: none;
    flex-direction: column;
    width: 100%;
    height: 150px;
    border-radius: 16px;
    display: flex;
    margin-top: 4px;
  }
  .food-name {
    font-size: 24px;
    margin-top: 2rem;
    padding-left: 2rem;
    width: 60%;
  }
  .icon {
    
  }
  .description {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0.25rem;
    margin-top: 2rem;
  }
  .text {
    padding-left: 2rem;
    margin-top: 3rem;
    box-sizing: border-box;
    width: 60%;
  }
  .image {
    margin-top: 1rem;
    margin-left: 2rem;
    width: 300px;
    height: 150px;
  }
  .badges {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    margin-right: 6.5rem;
  }
  .price {
    margin-top: 1rem;
    margin-left: 14rem;
  }
`;
