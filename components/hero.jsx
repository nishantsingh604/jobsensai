import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div>
        <div>
          <h1>
            {" "}
            Your one stop solution for
            <br />
            Professional Success
          </h1>
          <p>
            Advance your career with personalised guidance, interview
            preparation, and AI- powered tools for job success.
          </p>
        </div>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/nishantsingh604/">
            <Button size="lg" className="px-8" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;