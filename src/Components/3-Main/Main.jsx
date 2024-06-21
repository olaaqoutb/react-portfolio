import "./Main.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

const myProjects = [
  { projectTitle: "Html& Css project", category: ["css"], imgPath: "../../../public/1.png" },
  {
    projectTitle: "js & css project",
    category: ["js"],
    imgPath: "../../../public/2.png",
  },
  { projectTitle: "css project", category: ["css"], imgPath: "../../../public/3.png" },
  { projectTitle: "js & css project", category: ["js"], imgPath: "../../../public/4.png" },
  { projectTitle: "react project", category: ["react"], imgPath: "../../../public/5.png" },
  { projectTitle: "bootstrap  project", category: ["bootstrap"], imgPath: "../../../public/6.png" },
  {
    projectTitle: "bootstrap project",
    category: ["bootstrap"],
    imgPath: "../../../public/7.png",
  },
  {
    projectTitle: "react project",
    category: ["react"],
    imgPath: "../../../public/8.jpeg",
  },
  { projectTitle: "API project", category: ["react"], imgPath: "../../../public/9.png" },
];
const Main = () => {
  const [current, setCurrent] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setCurrent(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className=" flex left-section">
        <button
          onClick={() => {
            setCurrent("all");
            setArr(myProjects);
          }}
          className={current === "all" ? "active" : null}
        >
          all Projects
        </button>
        <button
          // onClick={() => {
          //   setCurrent("css");
          //   const newArr = myProjects.filter((item) => {
          //     const zzz = item.category.filter((myItem) => {
          //       return myItem === "css";
          //     });

          //     return zzz[0] === "css";
          //   });
          //   setArr(newArr);
          // }}
          onClick={() => {
            handleClick("css");
          }}
          className={current === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={current === "js" ? "active" : null}
        >
          Java Script
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={current === "react" ? "active" : null}
        >
          React & API
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={current === "bootstrap" ? "active" : null}
        >
          Bootstrap & Matriel UI
        </button>
      </section>

      <section className="right-section flex">
<AnimatePresence>





        {arr.map((item) => {
          return (
            <motion.article 
            layout
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{type:"spring", damping:8, stiffness:50}}
            key={item.imgPath} className=" card">
              l
              <img width={266} src={item.imgPath} alt="" />




              <div style={{ width: "266px" }} className="box ">
                <h1 className="title">{item.projectTitle} </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  quia esse ut eveniet? Fugiat aut nulla modi, pariatur minima
                  exercitationem. Sed placeat maxime accusamus omnis soluta eos,
                  quidem aperiam rerum?
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="" className="link flex">
                    more
                    <span className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
             
            </motion.article>
          );
        })}

</AnimatePresence>
      </section>
    </main>
  );
};
export default Main;
