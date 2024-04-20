import leafLogo from "../assets/graphics/leaf-decoration.png"
import { Link } from "react-router-dom"

const Celebration = () => {
  return (
    <div className="bg-gray p-4 text-center text-white" id="celebration">
      <h2 className="m-3 font-moontime text-6xl">Celebration</h2>
      <p className="md:mx-4">
        Please join us for fun, food, drinks, music and general merriment.
      </p>
      <br />
      <div>
        <p className="font-alice text-2xl">Saturday, August 31, 2024</p>
        <p className="font-alice text-3xl uppercase">Boise, Idaho</p>
        <p className="font-alice text-2xl">Kayti and Jake&apos;s House</p>
        <p className="font-alice text-2xl">2707 Malibu Road | 83705</p>
      </div>
      <br />
      <div className="mx-4">
        <p>5 pm music and beverages | 6 pm dinner</p>
      </div>
      <br />
      <div className="mx-4">
        <Link to="/party" className="!decoration-solid">
          See More Information
        </Link>
      </div>
      <div className="flex justify-center py-4">
        <img
          src={leafLogo}
          className="mr-2 w-28 hover:cursor-pointer"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </div>
  )
}

export default Celebration
