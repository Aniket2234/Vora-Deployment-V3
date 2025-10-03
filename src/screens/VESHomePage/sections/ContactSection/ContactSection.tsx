// import React, { useState } from "react";
// import { Phone, Mail } from "lucide-react";

// const Button = ({ children, className, ...props }) => (
//   <button className={className} {...props}>
//     {children}
//   </button>
// );

// const Card = ({ children, className }) => (
//   <div className={className}>
//     {children}
//   </div>
// );

// const CardContent = ({ children, className }) => (
//   <div className={className}>
//     {children}
//   </div>
// );

// const Input = ({ className, ...props }) => (
//   <input className={className} {...props} />
// );

// const Select = ({ children, onValueChange }) => (
//   <select className="w-full h-10 px-3 py-2 bg-[#f4f5f6] rounded-2xl border border-[#0707001a] text-[#07070099] text-sm transition-all duration-300 hover:shadow-lg hover:bg-white focus:scale-[1.02] focus:shadow-xl focus:border-yellow-400" onChange={(e) => onValueChange(e.target.value)}>
//     {children}
//   </select>
// );

// const SelectTrigger = ({ children, className }) => children;

// const SelectValue = ({ placeholder }) => (
//   <>
//     <option value="">{placeholder}</option>
//     <option value="wiring">Wiring & Installation</option>
//     <option value="repair">Electrical Repair</option>
//     <option value="maintenance">Maintenance</option>
//     <option value="consultation">Consultation</option>
//   </>
// );

// const Textarea = ({ className, ...props }) => (
//   <textarea className={className} {...props} />
// );

// export const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // Contact information data
//   const contactInfo = [
//     {
//       title: "Call Us",
//       value: "+91 98209 74399",
//       icon: Phone,
//     },
//     {
//       title: "Email Us",
//       value: "vora@ves.co.in",
//       icon: Mail,
//     },
//   ];

//   // Form field data
//   const formFields = [
//     { label: "First Name", placeholder: "e.g. Sahaari", field: "firstName" },
//     { label: "Last Name", placeholder: "e.g. Manehteh", field: "lastName" },
//     { label: "Email", placeholder: "e.g. hello@elektrix.com", field: "email" },
//     { label: "Phone", placeholder: "e.g. (+91) 8912 3456 7890", field: "phone" },
//   ];

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <>
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
//         * {
//           font-family: 'Poppins', sans-serif;
//         }
//       `}</style>

//       <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8 lg:px-8">
//         <div className="w-full max-w-6xl flex items-center justify-center">
//           <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">

//             {/* Left column - Contact Form */}
//             <div className="flex-1 p-6 sm:p-8 lg:p-12">
//               <div className="max-w-lg mx-auto h-full flex flex-col">

//                 {/* Header Section */}
//                 <div className="mb-6">
//                   <div className="flex items-center gap-2 mb-4">
//                     <img
//                       className="w-[60px] h-[70px] sm:w-[80px] sm:h-[95px] lg:w-[99px] lg:h-[117px] object-contain"
//                       alt="Lightning icon"
//                       src="/images/2676-080625-vora-hp-png-02-2.png"
//                     />
//                     <div className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-[26px] sm:leading-[30px] lg:leading-[36px]">
//                       GET IN TOUCH
//                     </div>
//                   </div>

//                   <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 leading-tight">
//                     Contact our skilled electrical team
//                   </h2>

//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Need electrical services? Contact our team for reliable solutions and professional advice.
//                   </p>
//                 </div>

//                 {/* Form Section */}
//                 <div className="flex-1 flex flex-col gap-4">
//                   {/* Name Fields Row */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {formFields.slice(0, 2).map((field, index) => (
//                       <div key={index} className="flex flex-col gap-1.5">
//                         <label className="font-medium text-gray-700 text-sm">
//                           {field.label}
//                         </label>
//                         <Input
//                           className="h-10 px-3 py-2 bg-[#f4f5f6] rounded-xl border border-gray-200 text-sm transition-all duration-300 hover:shadow-md hover:bg-white focus:scale-[1.01] focus:shadow-lg focus:border-yellow-400"
//                           placeholder={field.placeholder}
//                           value={formData[field.field]}
//                           onChange={(e) => handleInputChange(field.field, e.target.value)}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   {/* Email and Phone Row */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {formFields.slice(2, 4).map((field, index) => (
//                       <div key={index} className="flex flex-col gap-1.5">
//                         <label className="font-medium text-gray-700 text-sm">
//                           {field.label}
//                         </label>
//                         <Input
//                           className="h-10 px-3 py-2 bg-[#f4f5f6] rounded-xl border border-gray-200 text-sm transition-all duration-300 hover:shadow-md hover:bg-white focus:scale-[1.01] focus:shadow-lg focus:border-yellow-400"
//                           placeholder={field.placeholder}
//                           value={formData[field.field]}
//                           onChange={(e) => handleInputChange(field.field, e.target.value)}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   {/* Service Selection */}
//                   <div className="flex flex-col gap-1.5">
//                     <label className="font-medium text-gray-700 text-sm">
//                       Choose Services
//                     </label>
//                     <Select onValueChange={(value) => handleInputChange('service', value)}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a service" />
//                       </SelectTrigger>
//                     </Select>
//                   </div>

//                   {/* Message */}
//                   <div className="flex flex-col gap-1.5 flex-1">
//                     <label className="font-medium text-gray-700 text-sm">
//                       Message
//                     </label>
//                     <Textarea
//                       className="flex-1 min-h-[80px] px-3 py-2 bg-[#f4f5f6] rounded-xl border border-gray-200 text-sm resize-none transition-all duration-300 hover:shadow-md hover:bg-white focus:scale-[1.01] focus:shadow-lg focus:border-yellow-400"
//                       placeholder="Write your message here..."
//                       value={formData.message}
//                       onChange={(e) => handleInputChange('message', e.target.value)}
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <Button className="w-full h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2">
//                     Submit Message
//                     <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             {/* Right column - Contact Card */}
//             <div className="w-full lg:w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
//               <Card className="h-full flex flex-col justify-center">
//                 <CardContent className="text-center space-y-8">

//                   {/* Header */}
//                   <div>
//                     <h3 className="font-bold text-white text-xl sm:text-2xl mb-4">
//                       Contact Us!
//                     </h3>
//                     <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
//                   </div>

//                   {/* Contact Information */}
//                   <div className="space-y-6">
//                     {contactInfo.map((item, index) => {
//                       const IconComponent = item.icon;
//                       return (
//                         <div
//                           key={index}
//                           className="transform transition-all duration-300 hover:scale-105 cursor-pointer group"
//                         >
//                           <div className="flex flex-col items-center gap-3">
//                             <div className="w-14 h-14 rounded-full bg-yellow-400/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-yellow-400/30">
//                               <IconComponent className="w-6 h-6 text-yellow-400" />
//                             </div>

//                             <div className="text-center">
//                               <div className="font-medium text-white text-sm mb-1 transition-colors duration-300">
//                                 {item.title}
//                               </div>
//                               <div className="font-normal text-gray-300 text-sm transition-colors duration-300 group-hover:text-white">
//                                 {item.value}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   {/* Decorative Element */}
//                   <div className="mt-12">
//                     <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
//                     <div className="text-center mt-4">
//                       <span className="text-yellow-400 text-sm font-medium">
//                         We're here to help!
//                       </span>
//                     </div>
//                   </div>

//                 </CardContent>
//               </Card>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Input = ({ className, ...props }) => (
  <input className={className} {...props} />
);

const Select = ({ children, onValueChange }) => (
  <select
    className="w-full h-10 px-3 py-2 bg-[#f4f5f6] rounded-2xl border border-[#0707001a] text-[#07070099] text-sm transition-all duration-300 hover:shadow-lg hover:bg-white focus:scale-[1.02] focus:shadow-xl focus:border-yellow-400"
    onChange={(e) => onValueChange(e.target.value)}
  >
    {children}
  </select>
);

const SelectTrigger = ({ children, className }) => children;

const SelectValue = ({ placeholder }) => (
  <>
    <option value="">{placeholder}</option>
    <option value="wiring">Wiring & Installation</option>
    <option value="repair">Electrical Repair</option>
    <option value="maintenance">Maintenance</option>
    <option value="consultation">Consultation</option>
  </>
);

const Textarea = ({ className, ...props }) => (
  <textarea className={className} {...props} />
);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_593zw4s", // Your Service ID
        "template_6qbzf3c", // Your Template ID
        formData,
        "-muQ7r6gn-ZGEquip" // Your Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("❌ Something went wrong, please try again.");
      })
      .finally(() => setLoading(false));
  };

  // Contact info
  const contactInfo = [
    { title: "Call Us", value: "+91 98209 74399", icon: Phone },
    { title: "Email Us", value: "vora@ves.co.in", icon: Mail },
  ];

  // Form field data
  const formFields = [
    { label: "First Name", placeholder: "e.g. Sahaari", field: "firstName" },
    { label: "Last Name", placeholder: "e.g. Manehteh", field: "lastName" },
    { label: "Email", placeholder: "e.g. hello@elektrix.com", field: "email" },
    { label: "Phone", placeholder: "e.g. (+91) 8912 3456 7890", field: "phone" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8 lg:px-8">
      <div className="w-full max-w-6xl flex items-center justify-center">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
          {/* Left column - Contact Form */}
          <div className="flex-1 p-6 sm:p-8 lg:p-12">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto h-full flex flex-col gap-4"
            >
              <h2 className="font-bold text-3xl text-gray-900 mb-2">
                Contact our skilled electrical team
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Need electrical services? Contact our team for reliable solutions
                and professional advice.
              </p>

              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {formFields.slice(0, 2).map((field, index) => (
                  <div key={index} className="flex flex-col gap-1.5">
                    <label className="font-medium text-gray-700 text-sm">
                      {field.label}
                    </label>
                    <Input
                      className="h-10 px-3 py-2 bg-[#f4f5f6] rounded-xl border border-gray-200 text-sm"
                      placeholder={field.placeholder}
                      value={formData[field.field]}
                      onChange={(e) =>
                        handleInputChange(field.field, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {formFields.slice(2, 4).map((field, index) => (
                  <div key={index} className="flex flex-col gap-1.5">
                    <label className="font-medium text-gray-700 text-sm">
                      {field.label}
                    </label>
                    <Input
                      className="h-10 px-3 py-2 bg-[#f4f5f6] rounded-xl border border-gray-200 text-sm"
                      placeholder={field.placeholder}
                      value={formData[field.field]}
                      onChange={(e) =>
                        handleInputChange(field.field, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-gray-700 text-sm">
                  Choose Services
                </label>
                <Select
                  onValueChange={(value) => handleInputChange("service", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </Select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-gray-700 text-sm">
                  Message
                </label>
                <Textarea
                  className="flex-1 min-h-[80px] px-3 py-2 bg-[#f4f5f6] rounded-xl border border-gray-200 text-sm resize-none"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className={`w-full h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-xl hover:scale-105"
                }`}
              >
                {loading ? "Sending..." : "Submit Message"}
              </Button>
            </form>
          </div>

          {/* Right column - Contact Info */}
          <div className="w-full lg:w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center">
              <CardContent className="text-center space-y-8">
                <h3 className="font-bold text-white text-xl">Contact Us!</h3>
                <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                <div className="space-y-6">
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="group">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/30">
                            <Icon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-white text-sm">
                              {item.title}
                            </div>
                            <div className="text-gray-300 text-sm group-hover:text-white">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-yellow-400 text-sm">We're here to help!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
