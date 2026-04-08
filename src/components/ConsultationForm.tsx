"use client";

import { useState } from "react";

const caseTypes = [
  "Sexual Harassment",
  "Racial Discrimination",
  "Nationality Discrimination",
  "Gender/Sex Discrimination",
  "Sexual Orientation Discrimination",
  "Religious Discrimination",
  "Retaliation Discrimination",
  "Age Discrimination",
  "Wage Manipulation",
  "Disability Discrimination",
  "Workplace Disability Accommodation",
  "Hair Discrimination",
  "Pregnancy Discrimination",
  "Immigration",
];

export function ConsultationForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-navy mb-2">Thank You!</h3>
        <p className="text-gray-600">We&apos;ll review your case and get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className={variant === "compact" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
            First Name <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent text-gray-800"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">
            Last Name <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent text-gray-800"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email <span className="text-red">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent text-gray-800"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent text-gray-800"
          placeholder="(212) 555-0100"
        />
      </div>

      <div>
        <label htmlFor="caseType" className="block text-sm font-medium mb-1.5">
          Case Type <span className="text-red">*</span>
        </label>
        <select
          id="caseType"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent text-gray-800 bg-white"
        >
          <option value="">Select a case type...</option>
          {caseTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Is Your Company Unionized?</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="unionized" value="yes" className="w-4 h-4 text-steel" />
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="unionized" value="no" className="w-4 h-4 text-steel" />
            <span>No</span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1.5">
          Briefly Describe Your Case <span className="text-red">*</span>
        </label>
        <textarea
          id="description"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent text-gray-800 resize-none"
          placeholder="Please provide a brief description of your situation..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold text-navy-dark py-4 rounded-lg font-medium hover:bg-gold-light transition-colors uppercase tracking-wider text-sm"
      >
        Schedule My Free Consultation
      </button>
    </form>
  );
}
