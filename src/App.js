import "./index.css"
import styled from "styled-components"
const Main = styled.div`
  height:25rem;
  border: 1px solid black;
  width:90%;
  background-color: white;
  margin: 5rem auto;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  display: flex;
  @media screen and (max-width:600px){
    .gRIQrt{
      flex-direction: row;
    }
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  width:45%;  
  border:1px solid black;
  border-radius: 5px;
  height:80%;
  box-shadow: 1px 1px 4px 2px rgb(180, 178, 178);
`;
const Boxes = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-left: 1rem;
`;
const Imgbox = styled.div`

background-position: center;
background-size: cover;
height: 80%;
width: 35%;
background-repeat: no-repeat;
background-image: url(https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1698603005~exp=1698603605~hmac=9e96a45c196fb38c08040449f490d28e492b325d9db6204a5ab6d622ae1ae7b3);
`;
function App() {
  return (
    <>
    <Main className="mainbox">
      <Imgbox></Imgbox>
      <Right>
      
        <form action="/" className="form">
          <h3>LOGIN</h3>
          <div className="ch"><p>Login Id</p><input placeholder="EMAIL" type="email" required></input></div>
          <div className="ch"><p>Password</p><input placeholder="PASSWORD" type="password" required></input></div>
          <Boxes>
            <div className="ll"><input type="checkbox" placeholder="REMEMBER ME" /><p>Remember Me</p></div>
            <div className="ll"><input type="checkbox" placeholder="REMEMBER ME" /><p>Accept to Terms & Conditions</p></div>
          </Boxes>
          <div className="kk"><input type="submit" placeholder="LOGIN" className="sub"/></div>
        </form>
        </Right>
  
    </Main>
    </>
  );
}

export default App;
