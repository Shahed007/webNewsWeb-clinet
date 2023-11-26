import Container from "../../components/container/Container";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ArticlesDetails = () => {
  return (
    <section className="my-20">
      <Container>
        <Card className="w-full flex-col lg:flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full lg:w-2/5 shrink-0 rounded-t-lg lg:rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="px-3 py-5 lg:px-6">
            <div className="flex items-center justify-between">
              <p className="uppercase text-secondary_color text-sm">#Since</p>
              <p className="flex items-center flex-col">
                <span className="text-text_primary font-semibold">
                  Publisher
                </span>
                <span>Shahed</span>
              </p>
            </div>
            <div className="flex items-center justify-between my-5">
              <p>
                <span className="text-text_primary font-semibold">View:</span>{" "}
                70
              </p>
              <p className="flex flex-col">
                <span className="text-text_primary font-semibold">
                  Published Date:
                </span>{" "}
                7/10/2023
              </p>
            </div>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 sm:text-3xl text-xl"
            >
              Lyft launching cross-platform service this week
            </Typography>
            <Typography
              color="gray"
              className="mb-8 font-normal h-96 overflow-y-auto space-y-6"
            >
              <p className="text-sm text-justify">
                {" "}
                In the bustling city of Metropolis, where skyscrapers kissed the
                sky and the hum of life echoed through its streets, a quiet
                revolution was brewing. In the heart of the urban jungle, a
                group of innovative minds came together to launch a
                groundbreaking project aimed at transforming the way people
                consumed news. This project, aptly named "NewsWave," sought to
                ride the digital wave and redefine the landscape of online
                journalism. As dawn broke
              </p>
              <p className="text-sm text-justify">
                {" "}
                over the city, the NewsWave team huddled in their sleek office
                space, fueled by passion and a shared vision. The air buzzed
                with excitement as they meticulously crafted a platform that
                would not only deliver news but immerse users in an interactive
                and engaging experience. The ethos driving NewsWave was simple
                yet profound – to make information not just accessible but
                enjoyable. The platform boasted a myriad of features designed to
                cater to the
              </p>
              <p className="text-sm text-justify">
                {" "}
                diverse tastes of its users. From crisp and concise headlines
                for the busy commuter to in-depth analysis pieces for the
                curious intellect, NewsWave aimed to be the one-stop destination
                for news enthusiasts. The user interface, adorned with modern
                aesthetics and intuitive design, promised a seamless navigation
                experience, ensuring that even the technologically challenged
                could
              </p>
              <p className="text-sm text-justify">
                effortlessly surf the digital currents of information. NewsWave
                didn't stop at just delivering news; it aimed to foster a sense
                of community among its users. A comment section beneath each
                article became a virtual town square where opinions clashed and
                ideas melded. The team envisioned a platform that transcended
                the traditional boundaries of news consumption, transforming it
                into a social experience where users could connect, debate, and
              </p>
              <p className="text-sm text-justify">
                collaborate. As the sun dipped below the skyline, casting hues
                of orange and pink across the cityscape, NewsWave rolled out its
                subscription plans. The Basic Plan, a gateway to the world of
                information, offered users a taste of premium content and
                exclusive newsletters. The Premium Plan elevated the experience,
                providing an ad-free environment, exclusive interviews, and a
                ninety-day access pass to a treasure trove of articles. For the
                ultimate news connoisseur, the Ultimate Plan unfolded a
                year-long journey of unlimited access, early-breaking news
                alerts, and personalized recommendations tailored to individual
                preferences.
              </p>
              <p className="text-sm text-justify">
                NewsWave wasn't just about delivering news; it was about
                embracing a new era of journalism. The platform's editorial
                team, a blend of seasoned journalists and emerging voices,
                worked tirelessly to curate content that informed, inspired, and
                sparked conversations. Whether it was a riveting investigative
                piece or a heartwarming human interest story, NewsWave aimed to
                stir emotions and provoke thoughts. To complement the digital
                realm, NewsWave hosted events that bridged the gap between the
                virtual and the tangible. From
              </p>

              <p className="text-sm text-justify">
                town hall discussions with prominent journalists to interactive
                workshops on media literacy, the platform strived to be a
                catalyst for positive change in the way society engaged with
                information. As the moon ascended, casting a soft glow over
                Metropolis, NewsWave stood as a beacon of innovation in the
                ever-evolving landscape of digital media. The quiet revolution
                had blossomed into a movement, inviting users to ride the
                NewsWave and embark on a journey where information wasn't just
                consumed but celebrated. In the city that never slept, NewsWave
                had awakened a new era of journalism, where the power of the
                press met the pulse of the people.
              </p>
            </Typography>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};

export default ArticlesDetails;
