import { HashLink } from "@xzar90/react-router-hash-link"
import bench from "../assets/bench.jpeg"
import graduation from "../assets/graduation.jpeg"
import greenField from "../assets/green-field.jpeg"
import festival from "../assets/festival.jpeg"
import jasmine from "../assets/jasmine.jpeg"
import patio from "../assets/patio.jpeg"
import propsal from "../assets/propsal.jpeg"

const OurStory = () => {
  return (
    <div className="m-4" id="our-story">
      <HashLink smooth to="#" className="hover:cursor-pointer">
        <h2 className="font-moontime m-3 text-6xl text-center">Our Story</h2>
      </HashLink>
      <p className="">
        You know when you think of Jake, or when you think of Kayti, or when you
        think of Jake and Kayti together, and the thing that comes to mind is,
        "they are so nice"? Well, turns out their story is pretty nice, too.
      </p>
      <img
        src={greenField}
        alt="Kayti in Jake's arms in a field of green grass"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
      <p>
        Jake and Kayti started dating in the summer of 2021. While that is the
        start of this part of the story, their paths had crossed a few times
        before that summer. In fact, they first met almost 30 years ago. Jake's
        mom, Sue Dahlgren, was Kayti's teacher at the Boise Cooperative
        Preschool. Kayti, along with many other preschool tots, was invited to
        the Dahlgren house for a Halloween party. Kayti attended in her most
        favorite costume, Princess Jasmine.
      </p>
      <img
        src={jasmine}
        alt="Kayti in a Princess Jasmine halloween costume"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
      <p>
        Since Jake and Kayti are so very nice, they naturally have many, many
        friends. An overlap in their friend groups found Kayti as a roommate to
        Jake's college girlfriend in 2011. Jake and Kayti stayed good friends
        over the next 10 years, often running into each other around town. Kayti
        loved seeing Jake and getting one of his signature hugs.
      </p>
      <img
        src={festival}
        alt="Jake and Kayti at a music festival"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
      <p>
        In 2021, Jake had back surgery and Kayti reached out to go for a quick
        walk to catch up on life. The two talked about life, love, where they
        are in their journeys and where they hope to be in the future. Not
        surprisingly, their quick lasted over three hours. Neither had expected
        this walk to be the start of a relationship. They both indented to
        continue on their own paths, but there was no denying it. They were
        smitten.
      </p>
      <img
        src={bench}
        alt="Jake and Kayti on Dad's bench on the greenbelt"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
      <p>
        Fluttery feelings aside, they took things slow and allowed their
        relationship to develop organically. They were both determined to honor
        their own paths, goals, friends, and family. But they knew this was
        something special. "I love yous" were said and they began happily
        merging their lives. Kayti finished her graduate degree and moved into
        Jake's house in the summer of 2022.
      </p>
      <img
        src={graduation}
        alt="Jake and Kayti at BSU after Kayti's graduation ceremony"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
      <p>
        In January 2023, the Dahlgren and Proctor families spend a beautiful
        seven days in Belize. The whole nine-person crew of parents, siblings,
        and partners got along beautifully! While this was quite the adventure
        in itself, Jake had surprise. During a tour of the Mayan ruin
        Xunantunich, the crew climbed to the top of the largest monument that
        afforded views all the way to Guatemala. On the top of the structure,
        130 feet from the valley floor, Jake proposed. Kayti, of course, said
        yes! It was very nice.
      </p>
      <img
        src={propsal}
        alt="Jake on one knee proposing to Kayti on the top of the Xunantunich monument"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
      <p>
        Jake and Kayti will have an intimate ceremony in June. Keep an eye out
        for pictures! They would love to celebrate with all their family and
        friends at a reception this fall. They're grateful for the love and
        support their friends and family have shown through the years. Every
        twist and turn has led to this moment and they could not be more excited
        for the next chapter of their lives.
      </p>
      <img
        src={patio}
        alt="Jake and Kayti sitting on a patio with a mountain view in the background"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
    </div>
  )
}

export default OurStory