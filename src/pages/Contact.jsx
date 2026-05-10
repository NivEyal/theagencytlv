import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/shared/FadeIn';
import SectionLabel from '../components/shared/SectionLabel';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+972 52 777 1715', href: 'tel:+972527771715' },
  { icon: Mail, label: 'Email', value: 'info@theagencytlv.com', href: 'mailto:info@theagencytlv.com' },
  { icon: MapPin, label: 'Address', value: 'Tel Aviv, Israel', href: null },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/972527771715' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const subjectValue = watch('subject');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel light>Get in Touch</SectionLabel>
          <FadeIn>
            <h1 className="mt-4 font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
              Let's Talk Property
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 font-inter text-base md:text-lg text-white/60 max-w-2xl mx-auto">
              Whether you're buying, selling, or need property management — we're here to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-card p-12 rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.04)] text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle className="w-16 h-16 text-gold mx-auto" />
                      </motion.div>
                      <h3 className="mt-6 font-playfair text-2xl text-foreground font-medium">
                        Message Sent Successfully
                      </h3>
                      <p className="mt-3 font-inter text-muted-foreground">
                        Thank you for reaching out. Our team will be in touch within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-gold font-montserrat text-xs uppercase tracking-wider hover:underline"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="bg-card p-8 md:p-10 rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.04)] space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-inter text-sm text-foreground">
                            Full Name <span className="text-gold">*</span>
                          </Label>
                          <Input
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            placeholder="Your full name"
                            className="bg-background border-border focus:border-gold focus:ring-gold/20 rounded-sm"
                          />
                          {errors.name && (
                            <p className="text-xs text-destructive">{errors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-inter text-sm text-foreground">
                            Email <span className="text-gold">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                            })}
                            placeholder="your@email.com"
                            className="bg-background border-border focus:border-gold focus:ring-gold/20 rounded-sm"
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-inter text-sm text-foreground">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            {...register('phone')}
                            placeholder="+972..."
                            className="bg-background border-border focus:border-gold focus:ring-gold/20 rounded-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-inter text-sm text-foreground">
                            Subject <span className="text-gold">*</span>
                          </Label>
                          <Select
                            value={subjectValue}
                            onValueChange={(val) => setValue('subject', val, { shouldValidate: true })}
                          >
                            <SelectTrigger className="bg-background border-border focus:border-gold focus:ring-gold/20 rounded-sm">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="buy">Buy a Property</SelectItem>
                              <SelectItem value="sell">Sell a Property</SelectItem>
                              <SelectItem value="manage">Property Management</SelectItem>
                              <SelectItem value="develop">New Development</SelectItem>
                              <SelectItem value="other">Other Enquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <input type="hidden" {...register('subject', { required: 'Subject is required' })} />
                          {errors.subject && (
                            <p className="text-xs text-destructive">{errors.subject.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-inter text-sm text-foreground">
                          Message <span className="text-gold">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          {...register('message', { required: 'Message is required' })}
                          placeholder="Tell us about your property needs..."
                          className="bg-background border-border focus:border-gold focus:ring-gold/20 h-32 rounded-sm"
                        />
                        {errors.message && (
                          <p className="text-xs text-destructive">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold hover:bg-gold/90 text-navy font-montserrat text-xs uppercase tracking-wider py-6 rounded-sm"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </FadeIn>
            </div>

            {/* Contact Info + Map */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn delay={0.1}>
                <div className="bg-card p-8 rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <h3 className="font-playfair text-xl text-foreground font-medium mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="font-montserrat text-xs uppercase tracking-wider text-muted-foreground">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="font-inter text-sm text-foreground hover:text-gold transition-colors mt-0.5 block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-inter text-sm text-foreground mt-0.5">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54088.53190498048!2d34.7417!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1700000000000!5m2!1sen!2sil"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Agency TLV Location"
                    className="w-full"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}