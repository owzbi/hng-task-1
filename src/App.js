import Button from "./ButtonComp";
import MyImage from "./MyImage.jpg";
import I4G from "./I4G (1).png"
import zuriLogo from "./logo.36d2d48a.png"
import twitter from "./twitter.png"
import slack from "./slack.png"



function App() {
  return (
    <div className="App">
      <div className="image-div">
        <img src={MyImage} alt="Imag of Myself" id="profile__img" />
        <h2>Segun Owolabi</h2>
       <div id="socials">
       <a id="twitter" href="https://twitter.com/owzbi" target={"_blank"}>
          <img src={twitter}
           alt="twitter logo" />
        </a>
        <a id="slack" href="https://slack.com/owzbi" target={"_blank"}> <img src={slack}
           alt="twitter logo" /></a>
       </div>
      </div>

      <Button link={"https://training.zuri.team"} identify="btn__zuri">
        Zuri Team
      </Button>

      <Button link={"https://books.zuri.team"} identify="books">
        Zuri Books
      </Button>

      <Button
        link={"https://books.zuri.team/python-for-beginners?ref_id=owzbi"}
        identify="book__python"
      >
        Python Books
      </Button>

      <Button link={"https://background.zuri.team"} identify="pitch">
        Background Check
      </Button>

      <Button
        link={"https://books.zuri.team/design-rules "}
        identify="book__design"
      >
        Design Books
      </Button>
    <footer>
      <div id="zuri__logo">
<img src={zuriLogo} alt="Zuri Logo" />
      </div>

      <h5>HNG Internship 9 Frontend Task</h5>

      <div id="I4G__logo">
<img src={I4G} alt="I4G Logo" />
      </div>
    </footer>
     
    </div>
  );
}

export default App;
