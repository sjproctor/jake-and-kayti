import { useState } from "react"
import NavigationPages from "../components/NavigationHome"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"

const Reservation = () => {
  const [yesStatus, setYesStatus] = useState("hidden")
  const [noStatus, setNoStatus] = useState("hidden")
  const [selectedStatus, setSelectedState] = useState({
    visibility: "hidden",
    buttonLabel: ""
  })
  const [submission, setSubmission] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    let { name, email, guests, message } = data
    if (message.length === 0) {
      message = "No message included"
    }
    if (guests.length === 0) {
      guests = "Will not be attending"
    }
    try {
      const templateParams = {
        name,
        email,
        guests,
        message
      }
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      setSubmission("Form submission was successful!")
    } catch (e) {
      console.log(e)
      setSubmission("Uh oh. Something went wrong.")
    } finally {
      setYesStatus("hidden")
      setNoStatus("hidden")
      setSelectedState({
        visibility: "hidden",
        buttonLabel: ""
      })
      reset()
    }
  }

  const handleStatus = (status) => {
    setTimeout(() => {
      if (status === "yes") {
        setYesStatus("")
        setNoStatus("hidden")
        setSelectedState({
          visibility: "",
          buttonLabel: "Submit RSVP"
        })
      } else if (status === "no") {
        setYesStatus("hidden")
        setNoStatus("")
        setSelectedState({
          visibility: "",
          buttonLabel: "Submit Regrets"
        })
      }
    }, 100)
  }
  return (
    <>
      <div className="hover:cursor-pointer">
        <NavigationPages />
      </div>
      <div className="m-4" id="rsvp">
        <Link to="/" className="hover:cursor-pointer">
          <h2 className="m-3 text-center font-moontime text-6xl">RSVP</h2>
        </Link>
        <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
          We are excited to celebrate with you! However, we know life can be
          busy and we don&apos;t want anyone to feel obligated to attend if it
          creates a hardship in any way. We feel lucky to have such wonderful
          family and friends, all we ask for is your well wishes.
        </p>
        <br />
        <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
          In order for us to plan properly, please fill out the form below to
          let us know if you are able to attend. Lorem ipsum children and pets.
        </p>
        <br />
        <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">* required fields</p>
        <form
          className="w-full md:mx-10 lg:mx-40"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-2">
            <label htmlFor="name">Your name(s)*</label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              className="w-4/5 rounded-lg px-2 md:w-1/2 lg:w-1/4"
              {...register("name", {
                required: true
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className=" text-sm text-error">Name is required.</p>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="email">Your contact email*</label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="w-4/5 rounded-lg px-2 md:w-1/2 lg:w-1/4"
              {...register("email", {
                required: true
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="px-2 text-sm text-error">Email is required.</p>
            )}
          </div>
          <div className="my-2">
            <p>Will you attend?*</p>
            <input
              id="yes"
              type="radio"
              name="rsvp"
              className="mr-2 rounded-lg"
              onClick={() => handleStatus("yes")}
            />
            <label htmlFor="yes">Yes, I/we will be there.</label>
            <br />
            <input
              id="no"
              type="radio"
              name="rsvp"
              className="mr-2 rounded-lg"
              onClick={() => handleStatus("no")}
            />
            <label htmlFor="no">No, sending well wishes and regrets.</label>
          </div>

          <div className={yesStatus}>
            <br />
            <p>Yay we are excited to see you!</p>
            <div className="my-2">
              <input
                id="guests"
                type="number"
                name="guests"
                min="1"
                max="10"
                className="mr-2 w-10 rounded-lg pl-3"
                {...register("guests")}
              />
              <label htmlFor="guests">Number in your party*</label>
              {errors.name && errors.name.type === "required" && (
                <p className=" text-sm text-error">
                  Please enter a valid number.
                </p>
              )}
            </div>
          </div>

          <div className={noStatus}>
            <br />
            <p>Thanks for letting us know!</p>
          </div>

          <div className={selectedStatus.visibility}>
            <div className="my-2">
              <textarea
                name="message"
                className="w-full resize-x rounded-lg px-4 py-3 md:w-3/4 lg:w-1/2"
                placeholder="Include an optional message for Kayti and Jake..."
                rows="4"
                cols="27"
                {...register("message")}
              ></textarea>
            </div>
            <div className="text-center md:text-left">
              <button
                className="m-2 rounded-full border px-4 py-2 shadow-2xl hover:text-greenGold"
                onClick={handleSubmit}
              >
                {selectedStatus.buttonLabel}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Reservation
