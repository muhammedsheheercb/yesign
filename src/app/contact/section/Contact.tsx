'use client';
<<<<<<< HEAD
=======

>>>>>>> dbe9b69 (all section added)
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
<<<<<<< HEAD
import { Check, AlertCircle, Phone, MapPin, Mail } from 'lucide-react';
=======
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  ArrowUpRight,
  Instagram,
  Check,
  AlertCircle,
} from 'lucide-react';
>>>>>>> dbe9b69 (all section added)
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { z } from 'zod';

const FormValidation = z.object({
<<<<<<< HEAD
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
=======
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'Name can only contain letters, spaces, hyphens, and apostrophes.',
    })
    .refine((name) => name.trim().length > 0, {
      message: 'Name cannot be empty or just spaces.',
>>>>>>> dbe9b69 (all section added)
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

<<<<<<< HEAD
  message: z.string().min(1, { message: 'Message is required.' }),
=======
  subject: z
    .string()
    .min(1, { message: 'Subject is required.' })
    .max(200, { message: 'Subject must not exceed 200 characters.' }),

  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message must not exceed 2000 characters.' }),
>>>>>>> dbe9b69 (all section added)
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
<<<<<<< HEAD
      first: '',
      last: '',
      phone: '',
      email: '',
=======
      name: '',
      phone: '',
      email: '',
      subject: '',
>>>>>>> dbe9b69 (all section added)
      message: '',
    },
  });

<<<<<<< HEAD
  const bookTableMutation = useMutation({
=======
  const contactMutation = useMutation({
>>>>>>> dbe9b69 (all section added)
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
<<<<<<< HEAD
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
=======
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9400671513',
      href: 'tel:+919400671513',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'admin@yesign.in',
      href: 'mailto:admin@yesign.in',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pradhibha Building, Erumapetty, Thrissur, Kerala 680584',
      href: 'https://maps.google.com/?q=Erumapetty,Thrissur,Kerala',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat: 9 AM - 6 PM',
      href: null,
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-16 md:py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-1/4 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="font-inter text-xs font-medium tracking-[0.3em] text-cyan-400 uppercase">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-cyan-400" />
          </div>
          <h1 className="font-barlow text-4xl font-light tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
            Contact <span className="font-bold text-cyan-400">Us</span>
          </h1>
          <p className="font-inter mt-4 max-w-xl text-base text-white/50">
            Have a project in mind? Let&apos;s discuss how we can help bring
            your vision to life.
>>>>>>> dbe9b69 (all section added)
          </p>
        </div>

        {/* Main Content */}
<<<<<<< HEAD
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
=======
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="flex w-full flex-col gap-8 lg:w-2/5">
            {/* Info Text */}
            <div className="space-y-4">
              <h2 className="font-barlow text-2xl font-semibold tracking-wide text-white uppercase">
                Let&apos;s Create Together
              </h2>
              <p className="font-inter text-sm leading-relaxed text-white/60">
                Whether you need a stunning brand identity, a powerful website,
                or a comprehensive digital marketing strategy, YESIGN is here to
                help. Reach out to us and let&apos;s start building something
                amazing.
>>>>>>> dbe9b69 (all section added)
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
<<<<<<< HEAD
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
=======
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="group flex items-start gap-4 border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/10 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400">
                      <IconComponent className="h-5 w-5 text-cyan-400 transition-colors duration-300 group-hover:text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-inter mb-1 text-xs font-medium tracking-wider text-white/40 uppercase">
                        {info.label}
                      </h3>
                      <p className="font-inter text-sm text-white transition-colors duration-300 group-hover:text-cyan-400">
                        {info.value}
                      </p>
                    </div>
                    {info.href && (
                      <ArrowUpRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400" />
                    )}
                  </div>
                );

                return info.href ? (
                  <Link
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      info.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="font-inter text-xs font-medium tracking-wider text-white/40 uppercase">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/yesign0fficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center border border-white/20 bg-transparent text-white/60 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <Instagram size={20} />
                </Link>
>>>>>>> dbe9b69 (all section added)
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
<<<<<<< HEAD
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
=======
          <div className="flex w-full flex-col lg:w-3/5">
            <div className="relative border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 h-12 w-12 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute right-0 bottom-0 h-12 w-12 border-r-2 border-b-2 border-cyan-400" />

              <div className="mb-8">
                <h2 className="font-barlow text-xl font-semibold tracking-wide text-white uppercase md:text-2xl">
                  Send Us a Message
                </h2>
                <p className="font-inter mt-2 text-sm text-white/50">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
>>>>>>> dbe9b69 (all section added)
                </p>
              </div>

              {isMounted ? (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
<<<<<<< HEAD
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="first"
=======
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
>>>>>>> dbe9b69 (all section added)
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
<<<<<<< HEAD
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
=======
                                placeholder="Your Name"
                                {...field}
                                className="font-inter h-12 rounded-none border border-white/20 bg-white/5 px-4 text-white transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400 focus:bg-white/10 focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
>>>>>>> dbe9b69 (all section added)
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
<<<<<<< HEAD
                        name="last"
=======
                        name="phone"
>>>>>>> dbe9b69 (all section added)
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
<<<<<<< HEAD
                                placeholder="Last Name"
                                {...field}
                                className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
=======
                                placeholder="Phone Number"
                                type="tel"
                                {...field}
                                className="font-inter h-12 rounded-none border border-white/20 bg-white/5 px-4 text-white transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400 focus:bg-white/10 focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
>>>>>>> dbe9b69 (all section added)
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
<<<<<<< HEAD
                              className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
=======
                              className="font-inter h-12 rounded-none border border-white/20 bg-white/5 px-4 text-white transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400 focus:bg-white/10 focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
>>>>>>> dbe9b69 (all section added)
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
<<<<<<< HEAD
                      name="phone"
=======
                      name="subject"
>>>>>>> dbe9b69 (all section added)
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
<<<<<<< HEAD
                              placeholder="Phone Number"
                              type="tel"
                              {...field}
                              className="h-12 rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
=======
                              placeholder="Subject"
                              {...field}
                              className="font-inter h-12 rounded-none border border-white/20 bg-white/5 px-4 text-white transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400 focus:bg-white/10 focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
>>>>>>> dbe9b69 (all section added)
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
<<<<<<< HEAD
                              placeholder="Your Message (e.g., interested in 2-time food package)"
                              {...field}
                              className="min-h-[120px] resize-none rounded-lg border-2 border-[#A9861B]/30 bg-[#FFF8E7] px-4 py-3 text-[#373737] placeholder:text-[#666666] focus-visible:border-[#A9861B] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
=======
                              placeholder="Tell us about your project..."
                              {...field}
                              className="font-inter min-h-[150px] resize-none rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400 focus:bg-white/10 focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
>>>>>>> dbe9b69 (all section added)
                        </FormItem>
                      )}
                    />

<<<<<<< HEAD
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={bookTableMutation.isPending}
                        className="font-montserrat__alternates h-14 w-full rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37] text-base font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50"
                      >
                        {bookTableMutation.isPending
                          ? 'Sending Message...'
                          : 'Send Message'}
=======
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="font-inter group flex w-full items-center justify-center gap-3 rounded-none border-2 border-cyan-400 bg-cyan-400 px-8 py-6 text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-cyan-400 disabled:opacity-50"
                      >
                        {contactMutation.isPending ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
>>>>>>> dbe9b69 (all section added)
                      </Button>
                    </div>
                  </form>
                </Form>
              ) : (
<<<<<<< HEAD
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                    <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                  </div>
                  <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                  <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
                  <div className="h-[120px] animate-pulse rounded-lg bg-[#A9861B]/10" />
                  <div className="h-12 animate-pulse rounded-lg bg-[#A9861B]/10" />
=======
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="h-12 animate-pulse bg-white/10" />
                    <div className="h-12 animate-pulse bg-white/10" />
                  </div>
                  <div className="h-12 animate-pulse bg-white/10" />
                  <div className="h-12 animate-pulse bg-white/10" />
                  <div className="h-[150px] animate-pulse bg-white/10" />
                  <div className="h-14 animate-pulse bg-cyan-400/20" />
>>>>>>> dbe9b69 (all section added)
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
<<<<<<< HEAD
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
=======
        <div className="mt-20">
          <div className="mb-8 text-center">
            <span className="font-inter text-xs font-medium tracking-[0.3em] text-cyan-400 uppercase">
              Visit Us
            </span>
            <h2 className="font-barlow mt-2 text-2xl font-light tracking-tight text-white uppercase md:text-3xl">
              Find Our <span className="font-bold text-cyan-400">Location</span>
            </h2>
          </div>
          <div className="relative overflow-hidden border border-white/10">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 z-10 h-8 w-8 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute right-0 bottom-0 z-10 h-8 w-8 border-r-2 border-b-2 border-cyan-400" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5!2d76.2!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sErumapetty%2C%20Thrissur!5e0!3m2!1sen!2sin!4v1234567890"
>>>>>>> dbe9b69 (all section added)
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
<<<<<<< HEAD
              className="h-[400px] w-full md:h-[500px]"
=======
              className="h-[400px] w-full grayscale transition-all duration-500 hover:grayscale-0"
>>>>>>> dbe9b69 (all section added)
            />
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {isMounted && showModal && (
<<<<<<< HEAD
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
=======
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-md border border-white/10 bg-black p-8 shadow-2xl">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-cyan-400" />

            <div className="flex flex-col items-center text-center">
              {modalType === 'success' ? (
                <>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center border border-cyan-400/30 bg-cyan-400/10">
                    <Check className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="font-barlow mb-2 text-xl font-semibold tracking-wide text-white uppercase">
                    Message Sent!
                  </h3>
                  <p className="font-inter mb-8 text-sm text-white/60">
                    Thank you for contacting YESIGN. We&apos;ll get back to you
                    within 24 hours.
>>>>>>> dbe9b69 (all section added)
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        setShowModal(false);
                        form.reset();
                      }}
<<<<<<< HEAD
                      className="font-montserrat__alternates rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37] font-bold tracking-wider text-white uppercase hover:scale-105"
=======
                      className="font-inter rounded-none border-2 border-cyan-400 bg-cyan-400 px-6 py-3 text-xs font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-cyan-400"
>>>>>>> dbe9b69 (all section added)
                    >
                      Perfect!
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
<<<<<<< HEAD
                      className="font-montserrat__alternates rounded-full border-2 border-[#A9861B] font-bold tracking-wider text-[#A9861B] uppercase hover:bg-[#FFF8E7]"
=======
                      className="font-inter rounded-none border border-white/20 bg-transparent px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:border-white/40 hover:bg-white/10"
>>>>>>> dbe9b69 (all section added)
                    >
                      Close
                    </Button>
                  </div>
                </>
              ) : (
                <>
<<<<<<< HEAD
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                    <AlertCircle className="h-10 w-10 text-red-500" />
                  </div>
                  <h3 className="font-milchella mb-3 text-2xl text-[#373737]">
                    Something Went Wrong
                  </h3>
                  <p className="font-montserrat__alternates mb-8 text-[#666666]">
                    We couldn`&apos;t send your message. Please try again or
                    call us directly at 050 744 0148.
=======
                  <div className="mb-6 flex h-16 w-16 items-center justify-center border border-red-500/30 bg-red-500/10">
                    <AlertCircle className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="font-barlow mb-2 text-xl font-semibold tracking-wide text-white uppercase">
                    Something Went Wrong
                  </h3>
                  <p className="font-inter mb-8 text-sm text-white/60">
                    We couldn&apos;t send your message. Please try again or
                    contact us directly at admin@yesign.in
>>>>>>> dbe9b69 (all section added)
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowModal(false)}
<<<<<<< HEAD
                      className="font-montserrat__alternates rounded-full bg-red-500 font-bold tracking-wider text-white uppercase hover:bg-red-600"
=======
                      className="font-inter rounded-none border-2 border-red-500 bg-red-500 px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-transparent hover:text-red-400"
>>>>>>> dbe9b69 (all section added)
                    >
                      Try Again
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
<<<<<<< HEAD
                      className="font-montserrat__alternates rounded-full border-2 border-[#A9861B] font-bold tracking-wider text-[#A9861B] uppercase hover:bg-[#FFF8E7]"
=======
                      className="font-inter rounded-none border border-white/20 bg-transparent px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:border-white/40 hover:bg-white/10"
>>>>>>> dbe9b69 (all section added)
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
