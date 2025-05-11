"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { FormikHelpers } from "formik";

interface FormValues extends Record<string, string> {
  user_name: string;
  user_email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  user_name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const loadingToast = toast.loading("Sending message...");

    try {
      await emailjs.send(
        "service_sac4iri",
        "template_vs52qzd",
        values,
        "mThJDK3QM7PiIpe0u"
      );

      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! We will get back to you soon.");
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in
            <span className="text-blue-600"> Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help bring
            your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Formik
            initialValues={{
              user_name: "",
              user_email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="user_name"
                    id="user_name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="Your name"
                  />
                  <ErrorMessage
                    name="user_name"
                    component="div"
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="user_email"
                    id="user_email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                  <ErrorMessage
                    name="user_email"
                    component="div"
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="Tell us about your project..."
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">Or reach us directly at:</p>
            <a
              href="mailto:contact@pexelare.info"
              className="text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              contact@pexelare.info
            </a>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}
