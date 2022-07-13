import styled from "styled-components";
import pikachucap from "../../assets/pikachu_cap.png"


const Index = () => {
    return (
        <BannerDiv>
            <div><h1>Create Your Team to Challenge Your Friends</h1></div>
            <div className='bannerImage'><BannerImage src={pikachucap}/></div>
        </BannerDiv>
    )

};
export default Index;

const BannerDiv = styled.div `
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  text-align: center;
  gap: 10px;
  min-height: 200px;

  h1 {
    color: #000000;
  }

  div {

    flex: 1;
    align-content: center;
    flex: 0.4;

    h1 {
      text-align: right;
      font-size: 55px;
    }
  }

  .bannerImage {
    text-align: left;

  }
`
const BannerImage = styled.img`
  max-width: 100%;
  max-height: 250px;
  
`;