'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  rating: number;
  text: string;
  authorName: string;
  authorInitial: string;
  timeAgo: string;
  avatarColor: string;
}

const ReviewsSection = () => {
  const [expandedReviews, setExpandedReviews] = useState(new Set<number>());

  const reviews: Review[] = [
    {
      rating: 5,
      text: 'The monthly mess package has been a lifesaver! Authentic Kerala food delivered right to my door. The fish curry reminds me of home, and the breakfast varieties are amazing. Best decision for anyone missing home-cooked Indian meals!',
      authorName: 'Mohammed Al Rashid',
      authorInitial: 'M',
      timeAgo: '2 weeks ago',
      avatarColor: '#FF6B35',
    },
    {
      rating: 5,
      text: "I've been ordering the 2-time food package for 3 months now. The quality is consistently excellent, portions are generous, and the taste is just perfect. The Friday biryani is absolutely phenomenal! Highly recommend Spice Catering.",
      authorName: 'Priya Sharma',
      authorInitial: 'P',
      timeAgo: '1 month ago',
      avatarColor: '#A9861B',
    },
    {
      rating: 5,
      text: 'As a working professional, this mess service is perfect. The variety in the weekly menu keeps things interesting, and I love that they include traditional Kerala dishes. The porotta and beef curry combo is my favorite!',
      authorName: 'Ahmed Hassan',
      authorInitial: 'A',
      timeAgo: '3 weeks ago',
      avatarColor: '#C41E3A',
    },
    {
      rating: 5,
      text: 'Exceptional food quality and timely delivery! The breakfast options like appam and puttu are authentic and delicious. My entire family enjoys the meals. Worth every dirham!',
      authorName: 'Lakshmi Menon',
      authorInitial: 'L',
      timeAgo: '1 week ago',
      avatarColor: '#FF6B35',
    },
    {
      rating: 5,
      text: 'Best mess service in Dubai! The chicken curry is packed with flavor, and the rice is always perfectly cooked. Delivery is always on time, and the food arrives hot. Very professional service.',
      authorName: 'Rajesh Kumar',
      authorInitial: 'R',
      timeAgo: '2 months ago',
      avatarColor: '#A9861B',
    },
    {
      rating: 5,
      text: "I'm so impressed with the authenticity of the food. The dosa set for breakfast is crispy and comes with amazing chutneys. The monthly package is very affordable compared to eating out. Highly satisfied customer!",
      authorName: 'Fatima Abdullah',
      authorInitial: 'F',
      timeAgo: '3 weeks ago',
      avatarColor: '#C41E3A',
    },
    {
      rating: 5,
      text: 'The 3-time food package has been perfect for my busy schedule. No more worrying about what to eat! Everything from breakfast to dinner is delicious and filling. The ghee rice and chicken curry is restaurant quality!',
      authorName: 'Suresh Pillai',
      authorInitial: 'S',
      timeAgo: '1 month ago',
      avatarColor: '#FF6B35',
    },
    {
      rating: 5,
      text: 'Outstanding service and food quality! The chapathi is soft, the curries are flavorful, and the fish preparations are fresh. My friends have also started ordering after trying my meals. Keep up the great work!',
      authorName: 'Aisha Mohamed',
      authorInitial: 'A',
      timeAgo: '2 weeks ago',
      avatarColor: '#A9861B',
    },
  ];

  const toggleReadMore = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  const isTextTruncated = (text: string) => {
    return text && text.length > 150;
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-milchella mb-4 text-4xl text-[#A9861B] md:text-6xl">
            What Our Customers Say
          </h2>
          <p className="font-montserrat__alternates mx-auto max-w-2xl text-base text-[#373737] md:text-lg">
            Real experiences from our satisfied customers who enjoy authentic
            Indian cuisine daily
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => {
                const isExpanded = expandedReviews.has(index);
                const needsReadMore = isTextTruncated(review.text);

                return (
                  <CarouselItem
                    key={index}
                    className="basis-full pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="group h-full transform overflow-hidden rounded-2xl border-2 border-[#A9861B]/20 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#A9861B] hover:shadow-2xl">
                        <CardContent className="flex min-h-[380px] flex-col gap-6 p-6 sm:p-8">
                          {/* Rating Stars */}
                          <div className="flex justify-center gap-1">
                            {Array.from({ length: review.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-6 w-6 fill-current text-[#A9861B] transition-transform duration-300 group-hover:scale-110"
                                />
                              )
                            )}
                          </div>

                          {/* Review Text */}
                          <div className="flex flex-1 flex-col justify-center">
                            <div className="relative">
                              <svg
                                className="absolute -top-2 -left-2 h-8 w-8 text-[#A9861B]/20"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                              >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                              </svg>
                              <p
                                className={`font-montserrat__alternates text-center text-sm leading-relaxed text-[#373737] transition-all duration-300 sm:text-base ${
                                  isExpanded ? '' : 'line-clamp-4'
                                }`}
                              >
                                {review.text}
                              </p>
                              <svg
                                className="absolute -right-2 -bottom-2 h-8 w-8 rotate-180 text-[#A9861B]/20"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                              >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                              </svg>
                            </div>

                            {needsReadMore && (
                              <button
                                onClick={() => toggleReadMore(index)}
                                className="mt-4 text-sm font-semibold text-[#A9861B] underline transition-colors duration-200 hover:text-[#D4AF37]"
                              >
                                {isExpanded ? 'Read Less' : 'Read More'}
                              </button>
                            )}
                          </div>

                          {/* Author Info */}
                          <div className="flex flex-col items-center gap-3 border-t border-[#A9861B]/10 pt-6">
                            <div className="relative">
                              <div
                                className="flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg"
                                style={{ backgroundColor: review.avatarColor }}
                              >
                                {review.authorInitial}
                              </div>
                              <div className="absolute -right-1 -bottom-1 rounded-full bg-[#25D366] p-1">
                                <svg
                                  className="h-4 w-4 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>

                            <div className="text-center">
                              <p className="font-montserrat__alternates text-base font-bold text-[#373737] sm:text-lg">
                                {review.authorName}
                              </p>
                              <p className="font-montserrat__alternates text-sm text-[#666666]">
                                {review.timeAgo}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation Arrows */}
            <div className="mt-12 flex justify-center gap-4">
              <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-full border-2 border-[#A9861B] bg-white text-[#A9861B] shadow-lg transition-all hover:scale-110 hover:bg-[#A9861B] hover:text-white" />
              <CarouselNext className="static h-12 w-12 translate-y-0 rounded-full border-2 border-[#A9861B] bg-white text-[#A9861B] shadow-lg transition-all hover:scale-110 hover:bg-[#A9861B] hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* Rating Summary */}

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h3 className="font-milchella mb-4 text-3xl text-[#A9861B] md:text-4xl">
            Join Our Happy Customers
          </h3>
          <p className="font-montserrat__alternates mb-8 text-lg text-[#373737]">
            Experience authentic Indian cuisine delivered fresh to your door
          </p>
          <a
            href="https://wa.me/0507440148"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat__alternates inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#128C7E]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Order Now on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
