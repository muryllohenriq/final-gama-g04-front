import styled from 'styled-components'


export const DetailsStyle = styled.section`
  .container {
      background:#FCFCFC;
    }
    
  .info {
    background: none;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 16px;
    display: flex;
    margin-top: 4px;
    @media only screen and (min-width:768px ){
      margin-left: 40px;
    }

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
    justify-content: center;
    margin-top: 1rem;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 12px;  
    
    @media only screen and (min-width: 310px) { 
    width: 250px;
    height: 156px;
    margin-left: 1.5rem;
    }   

    @media only screen and (min-width:360px ) {
      width: 270px;
      height: 176px;
      margin-left: 2rem;
    }

    @media only screen and (min-width:375px ) {
      width: 290px;
      height: 186px
    }

    @media only screen and (min-width:390px ) {
      width: 300px;
      height: 196px
    }

    @media only screen and (min-width:412px ) {
      width: 320px;
      height: 206px
    }

    @media only screen and (min-width:428px ) {
      width: 340px;
      height: 216px
    }

    @media only screen and (min-width:768px ) {
      width: 450px;
      height: 300px;
      align-items: center;
      justify-content: center;
      margin-left: 6rem;
    }
  } 
   
  .badges {
    font-size: 12px;
    font-weight: 500;
    color: #000000;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
    margin-right: 2.5rem;
    @media only screen and (min-width:768px ){
      margin-right: 12rem;
    }

  }

  .price {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    display: flex;
    justify-content: flex-end;
    margin-right: 2.5rem;
    padding-top: 0.75rem;
    @media only screen and (min-width:768px ){
      margin-right: 12rem; }
}

  .container-2 {
    background: #FFFFFF;
    box-shadow: 2px 2px 15px rgba(29, 28, 28, 0.07), -2px -2px 15px rgba(29, 28, 28, 0.07);
    border-radius: 8px;     
    width: 290px;
    height: 110px;
    margin-right: 10px;
    display: flex;
    justify-items: center;   
    position: relative;
    flex-direction: column890 gh-reverse;
  }
  .ctn {
    margin-left: 2.5rem;
    margin-bottom: 1rem;
  }
  .textarea {
    color: #676767;
    border: 1px solid #FCFCFC;
    border-radius: 5px;
    width: 250px;
    height: 60px;
    padding: 1px 10px;
    margin-top: 1rem;
    margin-left: 10px;
  }
  .obs {
    padding-top: 5px;
    max-width: 200px; 
    margin-left:10px; 
  }
  `
