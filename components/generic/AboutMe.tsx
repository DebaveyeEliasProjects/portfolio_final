import PageBuilder from "./PageBuilder";

export const AboutMe = () => {
  return (
    <div className="py-16">
      <PageBuilder>
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-purple-900 mb-16">About me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-md">
          <p>
            Hye there. My name is Elias Debaveye. A motivated, young man who
            loves programming and creating full-stack applications. I started my
            whole journey of creating these applications in{" "}
            <a
              className="text-purple-600 border-b border-purple-600 border-solid"
              href="https://www.howest.be"
            >
              Howest
            </a>
            .{" "}
            <a
              className="text-purple-600 border-b border-purple-600 border-solid"
              href="https://www.mct.be"
            >
              MCT
            </a>
            to be specific. <br /> <br />
            In that course I learned to create applications from the database
            side all the way to the frontend. To create stunning websites and
            secure backends. In short, everything that you would need for a
            full-stack project
          </p>
          <p>
            Before I went to Howest, I had 2 years of ICT in Kortrijk where I
            learned to program Siemens PLCs and microcontrollers.
            <br />
            <br /> Besides programming, I also learned the bearbones of an
            electric circuit. I learned about logic gates and chips. In short,
            the base of the person who I am right now.
            <br /> An ambitious student with humor and a big passion for
            frontend!
          </p>
        </div>
      </PageBuilder>
    </div>
  );
};
