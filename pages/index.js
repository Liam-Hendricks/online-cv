//Import the Link API to support client-side navigation
import Layout from "../components/MyLayout";



const index = () => {
  



  return(<Layout>
    <div className="siteNameDiv">
      <h1 className="siteName">liamhendricks.com</h1>
    </div>
   

    <div className="introductionDiv">

      <h3 className="introduction">Hello! My name is Liam hendricks, and I’m a Cape Town based <br/>Full Stack Web Developer.
      <br/>
      <br/>
        I have a diverse set of skills,ranging from design to HTML- CSS - JavaScript,all the way to the MERN stack. 
      </h3>
    </div>

    <div className="circle-img-div">
      <img className ="circle-img"src="/static/circle-img.jpg" alt="my image" />
    </div>
    <div className="linkedIn-svg">
      <a  href="https://www.linkedin.com/in/liam-hendricks-43aa33176/" target="_blank">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5 0C9.62574 0 0 9.62573 0 21.5C0 33.3743 9.62574 43 21.5 43C33.3743 43 43.0001 33.3743 43.0001 21.5C43.0001 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4935 10.3267 16.3535 11.2718 16.3803 12.5014C16.3803 13.7062 15.4935 14.6805 14.0332 14.6805ZM32.1381 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3757 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1999 21.93 23.1999 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7297 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1259 16.0824C29.9903 16.0824 32.1381 18.0018 32.1381 22.1271V30.4113V30.4113Z" fill="#FEEFEF"/>
        </svg>
      </a>
    </div>
    <div className="gitHub-svg">
      <a href="https://github.com/Liam-Hendricks" target='_blank'>
        <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9805 0.502077C9.90527 0.497487 0.125 9.68635 0.125 21.0279C0.125 29.9964 6.24316 37.6201 14.7637 40.4199C15.9111 40.6907 15.7354 39.9242 15.7354 39.401V35.8439C9.10938 36.5737 8.84082 32.452 8.39648 31.7635C7.49805 30.3223 5.37402 29.9551 6.00879 29.2666C7.51758 28.5368 9.05566 29.4502 10.8379 31.9241C12.127 33.7188 14.6416 33.4158 15.916 33.1175C16.1943 32.0389 16.79 31.075 17.6104 30.3269C10.7451 29.1702 7.88379 25.2322 7.88379 20.5505C7.88379 18.2785 8.67969 16.1902 10.2422 14.5057C9.24609 11.7288 10.335 9.35129 10.4814 8.99788C13.3184 8.75921 16.2676 10.9073 16.4971 11.0771C18.1084 10.6686 19.9492 10.4529 22.0098 10.4529C24.0801 10.4529 25.9258 10.6778 27.5518 11.0908C28.1035 10.6961 30.8379 8.851 33.4746 9.0759C33.6162 9.42932 34.6807 11.7518 33.7432 14.4919C35.3252 16.181 36.1309 18.2877 36.1309 20.5643C36.1309 25.2551 33.25 29.1978 26.3652 30.3361C26.9549 30.8812 27.4232 31.5313 27.7426 32.2485C28.062 32.9656 28.2262 33.7354 28.2256 34.5128V39.6764C28.2646 40.0895 28.2256 40.498 28.958 40.498C37.6055 37.7578 43.8311 30.079 43.8311 21.0324C43.8311 9.68635 34.0459 0.502077 21.9805 0.502077V0.502077Z" fill="#F4F4F4"/>
        </svg>
      </a>
    </div>
  

  </Layout>);
};

export default index;
