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
    flex-wrap: wrap;
    align-items: flex-start;
    width: 95vh;
  }

  @media only screen and (min-width: 860px) {
    flex-wrap: wrap;
    align-items: flex-start;
    width: 98vh;
  }

  @media only screen and (min-width: 900px) {
    flex-wrap: wrap;
    align-items: flex-start;
    width: 80vh;
  }
`