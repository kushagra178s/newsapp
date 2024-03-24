import React from "react";
const About = (props) => {
  let { hello } = props;
  // var h = hello.toString();
  console.log(hello);
  return (
    <>
      <h2 className="text-center" style={{ color: "white", margin: "75px" }}>
        Welcome to InfoNews, your go-to source for real-time updates on
        Technology and Sports. Our platform is designed to keep you informed
        with the latest and most relevant content, ensuring a top-notch user
        experience.
        <br /> <br />
        At InfoNews, we take pride in crafting a dynamic News application using
        cutting-edge technologies such as ReactJs, HTML, CSS, and JavaScript. By
        leveraging the power of newsApi, we bring you up-to-date news
        seamlessly, enhancing user engagement and retention.
        <br /> <br />
        Our commitment to user satisfaction extends to the design realm, where
        we've revamped and optimized the user interface. The integration of
        Bootstrap not only adds a sleek and modern aesthetic but also
        contributes to a 20 percent reduction in website load times. We believe
        in delivering content quickly and efficiently.
        <br /> <br />
        To further elevate your browsing experience, we've implemented infinite
        scrolling, providing a seamless and continuous flow of news articles.
        InfoNews is not just a news platform; it's an immersive journey into the
        latest happenings in the world of Technology and Sports.
        <br /> <br />
        Stay connected, stay informed with InfoNews – where every click brings
        you closer to the pulse of the news.
        <br /> <br />
      </h2>
    </>
  );
};
export default About; /*yoyo*/
