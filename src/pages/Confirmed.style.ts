import  styled  from 'styled-components';

export const ConfirmedStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;

  img{
    width: 400px;
    height: 400px;
    position: relative;
  }

  p {
    position: absolute;
    text-align: center;
    width: 320px;
    margin-top: 330px;
    font-style: normal;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    color: #000000;
    margin-bottom: 145px;
    }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #A14C47;
  border-radius: 8px;
  border: none;
  padding: 10px 30px;
  width: 328px;
  height: 48px;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  margin-top: 70px;
`