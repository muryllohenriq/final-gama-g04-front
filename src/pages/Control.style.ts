import  styled  from 'styled-components';

export const ControlDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ControlCards = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-bottom: 80px;

  @media only screen and (min-width: 720px) {
    justify-content: space-between;
    flex-flow:row wrap;
    width: 70vh;
  }

  @media only screen and (min-width: 860px) {
    flex-flow:row wrap;
    justify-content: space-between;
    width: 75vh;
  }

  @media only screen and (min-width: 900px) {
    flex-flow:row wrap;
    justify-content: space-between;
    width: 105vh;
  }

  @media only screen and (min-width: 1200px) {
    flex-flow:row wrap;
    justify-content: space-between;
    width: 85.5vh;
  }
`