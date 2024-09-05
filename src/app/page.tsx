"use client"

import { useEffect, useState } from "react";
import TypingAnimation from "@/components/magicui/typing-animation";
import "./index.css"

export default function Home() {

  const messages = ["Visit Our Website", "Create an Account", "Start Learning", "Track Progress"]
  const [activeI, setActiveI] = useState<number>(0)

  const ChangeActive = () => {
    setActiveI(prev => ((prev + 0.5) % 4))
  }

  useEffect(() => {
    setInterval(ChangeActive, 2000);
  }, [])

  return (
    <>
      <div className="main w-full">
        <div className="home-container">
          <TypingAnimation
            className="text-4xl font-bold text-white"
            duration={100}
            text = {["Inclusivity for All!", "Opportunity for Every Learner.","Education for Everyone!"]}
          />
        </div>
      </div>


      <div className="img-out">
        <div className="images">
          <div className="image-block">
            <div className="image image-1">
            </div>
            <div className="description">
              <h2 className="para-title">Empowering through signs</h2>
              <p className="para">Welcome to our cutting-edge learning platform, designed to empower the deaf and mute community. With interactive, easy-to-follow lessons in Gujarati and Indian Sign Language, we make communication seamless and learning engaging for users of all levels, ensuring everyone can express themselves confidently.
              </p>
            </div>
          </div>
          <div className="image-block reverse">
            <div className="image image-2">
            </div>
            <div className="description rev">
              <h2 className="para-title">Connecting with Loved Ones</h2>
              <p className="para">Our platform goes beyond—it’s crafted for families and friends, offering a unique opportunity to learn sign language and bridge the communication gap with their loved ones. Strengthen relationships and foster deeper connections with our fun, accessible learning tools.
              </p>
            </div>
          </div>
          <div className="image-block">
            <div className="image image-3">
            </div>
            <div className="description">
              <h2 className="para-title">Thrive Through Transition</h2>
              <p className="para">For those who’ve become deaf or mute later in life, we provide tailored lessons to help them smoothly transition, adapt, and regain confidence. Stay connected, communicate effortlessly, and embrace life with the tools and support you need to thrive.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="out-container w-full pb-10">
        <h2 className="steps-head">Just follow these four simple steps!!</h2>
        <div className="steps-container">
          {
            messages.map((item, index) => (
              <div key={index} className={`step ${index == activeI ? "active" : ""}`} data-step="1">
                <div className="step-number">{(index + 1)}</div>
                <div className="step-title">{item}</div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
