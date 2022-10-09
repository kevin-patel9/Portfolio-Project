import javascriptImg from "../../technologyImg/java-script.png";
import reactjsImg from "../../technologyImg/reactjs.png";
import photoshopImg from "../../technologyImg/photoshop.png";
import typescriptImg from "../../technologyImg/typescript.png";
import studioImg from "../../technologyImg/visualStudio.png";
import bootstrapImg from "../../technologyImg/bootstrap.png";

export const TextAnimation = () => {
  return (
    <div className="techno-tools">
      <div className="technology">
        <div>
          <img src={javascriptImg} />
          <img src={reactjsImg} />
          <img src={typescriptImg} />
        </div>
        <div>
          <img src={photoshopImg} />
          <img src={bootstrapImg} />
          <img src={studioImg} />
        </div>
      </div>
      <div>
        <h5>Technologies</h5>
        <div className="techno">
          <ul className="techno-text">
            <li>React</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </div>

        <h5>Tools</h5>
        <div className="tools">
          <ul className="tools-text">
            <li>Visual Studio</li>
            <li>Photoshop</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
