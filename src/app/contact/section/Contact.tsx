'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Check, AlertCircle, Phone, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { z } from 'zod';

const FormValidation = z.object({
  first: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50, { message: 'First name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'First name can only contain letters, spaces, hyphens, and apostrophes.',
    })
    .refine((name) => name.trim().length > 0, {
      message: 'First name cannot be empty or just spaces.',
    }),

  last: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(50, { message: 'Last name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'Last name can only contain letters, spaces, hyphens, and apostrophes.',
    })
    .refine((name) => name.trim().length > 0, {
      message: 'Last name cannot be empty or just spaces.',
    }),

  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Please enter a valid email address.' })
    .max(100, { message: 'Email must not exceed 100 characters.' }),

  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .regex(/^\+?[\d\s()-]+$/, {
      message:
        'Phone number can only contain digits, spaces, parentheses, hyphens, and plus sign.',
    })
    .refine(
      (phone) => {
        const digitsOnly = phone.replace(/\D/g, '');
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      { message: 'Phone number must contain between 10-15 digits.' }
    ),

  message: z.string().min(1, { message: 'Message is required.' }),
});

type FormData = z.infer<typeof FormValidation>;

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      first: '',
      last: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const bookTableMutation = useMutation({
    mutationFn: async (values: FormData) => {
      return await axios.post('/api/contact', values);
    },
    onSuccess: () => {
      setModalType('success');
      setShowModal(true);
    },
    onError: () => {
      setModalType('error');
      setShowModal(true);
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  return (
    <section className="relative h-full w-full bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] py-12 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12 px-4 md:px-20">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <span className="font-montserrat__alternates text-sm tracking-wider text-[#A9861B] uppercase md:text-base">
            Get In Touch
          </span>
          <h1 className="font-milchella text-4xl text-[#373737] md:text-6xl">
            Contact Us
          </h1>
          <p className="font-montserrat__alternates max-w-2xl text-base text-[#666666] md:text-lg">
            Have questions about our monthly mess packages? We`&apos;re here to
            help!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <div className="space-y-6 rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="font-milchella text-2xl text-[#A9861B] md:text-3xl">
                Spice Catering Services
              </h2>
              <p className="font-montserrat__alternates max-w-[500px] text-sm leading-relaxed text-[#666666] md:text-base">
                Experience authentic Indian cuisine delivered fresh to your
                doorstep. We specialize in monthly mess packages with
                traditional Kerala recipes, prepared daily with the finest
                ingredients. Enjoy the taste of home-cooked meals without the
                hassle of cooking.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="group flex items-center gap-4 rounded-2xl border-2 border-[#A9861B]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#A9861B] hover:shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37] transition-transform duration-300 group-hover:rotate-12">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat__alternates mb-1 text-xs font-semibold tracking-wider text-[#A9861B] uppercase">
                    Call Us
                  </h3>
                  <Link
                    href="tel:0507440148"
                    className="font-montserrat__alternates text-lg font-bold text-[#373737] transition-colors hover:text-[#A9861B]"
                  >
                    050 744 0148
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-center gap-4 rounded-2xl border-2 border-[#A9861B]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#A9861B] hover:shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] transition-transform duration-300 group-hover:rotate-12">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat__alternates mb-1 text-xs font-semibold tracking-wider text-[#FF6B35] uppercase">
                    Email Us
                  </h3>
                  <Link
                    href="mailto:spicysquarecatering@gmail.com"
                    className="font-montserrat__alternates text-sm text-[#373737] transition-colors hover:text-[#FF6B35] md:text-base"
                  >
                    spicysquarecatering@gmail.com
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-4 rounded-2xl border-2 border-[#A9861B]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#A9861B] hover:shadow-2xl">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#C41E3A] to-[#FF6B35] transition-transform duration-300 group-hover:rotate-12">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat__alternates mb-1 text-xs font-semibold tracking-wider text-[#C41E3A] uppercase">
                    Visit Us
                  </h3>
                  <Link
                    target="_blank"
                    href={
                      'https://maps.google.com/?q=Warehouse+130-103+Dubai+Investment+Park+2'
                    }
                    className="font-montserrat__alternates text-sm leading-relaxed text-[#373737] transition-colors hover:text-[#C41E3A]"
                  >
                    Warehouse 130-103, King Key Stores <br />
                    for Warehouse Management <br />
                    Dubai Investment Park 2
                  </Link>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-montserrat__alternates mb-1 text-sm font-bold text-white uppercase">
                      Quick Order
                    </h3>
                    <p className="font-montserrat__alternates text-xs text-white/90">
                      Order directly via WhatsApp
                    </p>
                  </div>
                  <Link
                    href="https://wa.me/0507440148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="rounded-2xl border-2 border-[#A9861B]/20 bg-white p-6 shadow-xl md:p-8">
              <div className="mb-6">
                <h2 className="font-milchella text-2xl text-[#A9861B] md:text-3xl">
                  Send us a Message
                </h2>
                <p className="font-montserrat__alternates mt-2 text-sm text-[#666666]">
                  Have questions about our packages or want to place an order?
                  Fill out the form below and we`&apos;ll get back to you
                  shortly.
                </p>
              </div>

              {isMounted ? (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="first"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="last"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Last Name"
                                {...field}
                                className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email Address"
                              type="email"
                              {...field}
                              className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Phone Number"
                              type="tel"
                              {...field}
                              className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Your Message (e.g., interested in 2-time food package)"
                              {...field}
                              className="min-h-[120px] resize-none rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 py-3 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={bookTableMutation.isPending}
                        className="font-montserrat__alternates h-14 w-full rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37] text-base font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50"
                      >
                        {bookTableMutation.isPending
                          ? 'Sending Message...'
                          : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </Form>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                    <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                  </div>
                  <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                  <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                  <div className="h-[120px] animate-pulse rounded-lg bg-[#A9861B]/10" />
                  <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <div className="mb-8 text-center">
            <span className="font-montserrat__alternates text-sm tracking-wider text-[#A9861B] uppercase md:text-base">
              Visit Us
            </span>
            <h2 className="font-milchella mt-2 text-3xl text-[#373737] md:text-4xl">
              Find Our Location
            </h2>
            <p className="font-montserrat__alternates mt-2 text-[#666666]">
              Dubai Investment Park 2
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-[#A9861B]/20 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4534.821369020206!2d55.193757376111776!3d24.981238340412673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73d657da0b6b%3A0x95178da2ebd18997!2sWarehouse%20No.%204!5e1!3m2!1sen!2sus!4v1763581221517!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full md:h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {isMounted && showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-2xl border-2 border-[#A9861B]/30 bg-white p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {modalType === 'success' ? (
                <>
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37]">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-milchella mb-3 text-2xl text-[#A9861B]">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-montserrat__alternates mb-8 text-[#666666]">
                    Thank you for contacting Spice Catering. We`&apos;ll get
                    back to you within 24 hours.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        setShowModal(false);
                        form.reset();
                      }}
                      className="font-montserrat__alternates rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37] font-bold tracking-wider text-white uppercase hover:scale-105"
                    >
                      Perfect!
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
                      className="font-montserrat__alternates rounded-full border-2 border-[#A9861B] font-bold tracking-wider text-[#A9861B] uppercase hover:bg-[#FFF8E7]"
                    >
                      Close
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                    <AlertCircle className="h-10 w-10 text-red-500" />
                  </div>
                  <h3 className="font-milchella mb-3 text-2xl text-[#373737]">
                    Something Went Wrong
                  </h3>
                  <p className="font-montserrat__alternates mb-8 text-[#666666]">
                    We couldn`&apos;t send your message. Please try again or
                    call us directly at 050 744 0148.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowModal(false)}
                      className="font-montserrat__alternates rounded-full bg-red-500 font-bold tracking-wider text-white uppercase hover:bg-red-600"
                    >
                      Try Again
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
                      className="font-montserrat__alternates rounded-full border-2 border-[#A9861B] font-bold tracking-wider text-[#A9861B] uppercase hover:bg-[#FFF8E7]"
                    >
                      Close
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
