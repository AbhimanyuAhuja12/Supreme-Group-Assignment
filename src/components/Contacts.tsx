// 2. Updated ContactUs Component
import React from "react";
import useContact from "@/hooks/useContacts";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ContactUs: React.FC = () => {
  const {
    formValues,
    formErrors,
    formStatus,
    isLoading,
    handleChange,
    handleSubmit,
  } = useContact();

  return (
    <section className="w-full bg-[#0067B1] items-center text-white md:py-30 py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-semibold">Get in Touch</h2>
            <div className="h-[2px] bg-white w-16 my-6"></div>
            <p className="text-2xl font-semibold">For general enquiries</p>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold">Address :</h3>
                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone :</h3>
                <a
                  href="tel:+912225208822"
                  className="inline-block text-white/90 hover:text-white relative w-fit group"
                >
                  <span className="border-b border-transparent group-hover:border-white transition-all duration-300">
                    +91 22 25208822
                  </span>
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Email :</h3>
                <a
                  href="mailto:info@supremegroup.co.in"
                  className="inline-block text-white/90 hover:text-white relative w-fit group"
                >
                  <span className="border-b border-transparent group-hover:border-white transition-all duration-300">
                    info@supremegroup.co.in
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <Input
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                {formErrors.fullName && (
                  <div className="mt-1 text-red-300 text-sm">
                    {formErrors.fullName}
                  </div>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {formErrors.email && (
                  <div className="mt-1 text-red-300 text-sm">
                    {formErrors.email}
                  </div>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                  placeholder="Company"
                />
                {formErrors.company && (
                  <div className="mt-1 text-red-300 text-sm">
                    {formErrors.company}
                  </div>
                )}
              </div>

              <div>
                <Input
                  textarea
                  type="text"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Message"
                />
                {formErrors.message && (
                  <div className="mt-1 text-red-300 text-sm">
                    {formErrors.message}
                  </div>
                )}
              </div>

              <Button type="submit" isLoading={isLoading} label="Submit" />
            </form>

            {/* Success message only */}
            {formStatus && formStatus.includes("successfully") && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded-md font-semibold">
                ✅ {formStatus}
              </div>
            )}

            {/* Error message for server errors */}
            {formStatus && formStatus.includes("wrong") && (
              <div className="mt-4 p-4 bg-red-500 text-white rounded-md font-semibold">
                ❌ {formStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
