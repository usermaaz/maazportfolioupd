
import Navbar from "../navbar";
export default function About() {
  return (
    <div className=" text-center">
      <Navbar />
      <section className="my-10 p-4 sm:p-8 bg-gray-200 text-center">
        <h2 className="text-lg font-black text-">About Myself</h2>
        <i className="text-bold">
          {" "}
          currently i am studying in{" "}
          <abbr title="governor initiative in artificial intelligence  ">
            GIAIC
          </abbr>{" "}
        </i>
        <p>i am web-devloper and accountant </p>
        <i>i am working in a firm as a juniar accountant in a firm</i>
        <br />
        <i> </i>
        <div>
        <a href="https://resume-builder-iota-seven.vercel.app/">
          <button  name="resume"    className=" text-blue-400 hover:text-blue-700 font-mono underline p-2 m-2  border-spacing-2">
            <b>my resume</b>
          </button>
        </a>
        </div>
      </section>
    </div>
  );
}
