import { testimonials } from "@/constans";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="pt-[128px]">
      <h2 className="md:container px-4  text-primary lg:text-[56px] lg:font-bold lg:leading-[64px] tracking-tight text-[32px] leading-10">
        Listen to what our
        <span className="underline decoration-secondary decoration-solid underline-offset-[5px] decoration-4 lg:text-[56px] text-[32px] leading-10 ml-4">
          satisfied
        </span>
        <br /> clients have to say
      </h2>
      <div className="relative pt-[64px]">
        <div className="absolute left-0 top-0 z-10 h-full w-64 lg:bg-gradient-to-r  from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-64 lg:bg-gradient-to-l  from-white to-transparent" />
        <div className="mb-6 overflow-hidden whitespace-nowrap bg-white">
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
        <div className="mb-6 overflow-hidden whitespace-nowrap bg-white">
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
        {/* second */}
      </div>
    </section>
  );
};
export default Testimonial;
