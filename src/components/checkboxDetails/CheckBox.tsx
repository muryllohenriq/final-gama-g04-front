import { Button, InputGroup } from "react-bootstrap";
import  CheckBoxStyle  from './CheckBoxStyle.css';

export function CheckBox (){
    return (
    
        <>
        {/* <CheckBoxStyle> */}
        <div className="card" style={{width: "320px", height: "132px", display:"flex", justifyContent: "center", alignItems: "center"}}>
            <div className="card-body">
            <h5 className="card-title">Alguma observação?</h5>
            <label htmlFor="placeholder" style={{boxShadow: "2px 2px 15px 0px #1D1C1C12", borderRadius: "5px", height: "50px", width:"272px"}}>Ex: Tirar a cebola, maionese à parte, ponto da carne etc
</label>            
            </div>
            </div>
            
        <div className="dropdown" style={{ marginTop: "12rem", marginBottom:"10rem", flexDirection:"column",alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <button style={{ background:"#fff", color: "black", marginTop: "12rem", margin:"auto", padding:"10px", flexDirection:"column", alignItems: "center", justifyContent: "center"}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <p style={{ marginTop: "1rem", display: "flex", textAlign: "center", justifyContent: "center"}}>Escolha seu Acompanhamento</p>        
                <p style={{ fontSize:"12px", marginRight:"9rem", border:"solid #ADADAD 1px", borderRadius:"6px", color: "#000000" }}>Escolha 1 opção</p>
            <div className="form-check d-flex justify-content-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label mb-20px">
                    Opção 1
                </label>
            </div>
            <div className="form-check d-flex justify-content-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                <label className="form-check-label">
                    Opção 2
                </label>
            </div> 
            <div className="form-check d-flex justify-content-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                <label className="form-check-label">
                    Opção 3
                </label>
            </div>
            <div className="form-check d-flex justify-content-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                <label className="form-check-label">
                    Opção 4
                </label>
            </div>
            </button>
        </div>
        {/* </CheckBoxStyle>                        */}
        </>     
  )
}