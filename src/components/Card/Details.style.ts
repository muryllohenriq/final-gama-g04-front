import styled from 'styled-components'
import api from './../../services/api';

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
    font-weight: 600;
    margin-top: 0.25rem;
    margin-bottom: 0rem;
    margin-left: 2.5rem;
    width: 100%;
  }
  .icon {
    width: 18px;
    height: 13px;
  }
  .people {
    font-size: 14px;
    font-weight: 300;
    color: #676767;
    margin-left: 2.5rem;
    width: 60%;
  }
  .description {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.25rem;
    margin-right: 2.5rem;
  }
  .text {
    margin-left: 2.5rem;
    margin-top: 1rem;
    width: 75%;
  }
  .image {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-left: 1.25rem;
    margin-right: 2rem;
    width: 310px;
    height: 176px;
  }
  .badges {
    font-size: 12px;
    font-weight: 500;
    color: #000000;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
    margin-right: 2.5rem;
  }
  .price {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    display: flex;
    justify-content: flex-end;
    margin-right: 2.5rem;
    padding-top: 0.75rem;
  }
  .container-2 {
    background-color: grey;
    border-radius: 0.5rem;
    width: 300px;
    display: flex;
    justify-items: center;
    padding-bottom: 10px;
    padding-left: 45px;
    padding-top: 10px;
    position: relative;
    flex-direction: column890 gh-reverse;
  }
  .ctn {
    margin-left: 3rem;
  }
  .textarea {
    background-color: white;
    padding: 1px 10px;
    margin-top: 1rem;
  }
  .obs {
    padding-top: 5px;
  }
`
