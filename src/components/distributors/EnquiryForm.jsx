import React, { forwardRef, useState } from "react";
import { Loader2, Upload, FileText } from "lucide-react";

export const EnquiryForm = forwardRef((props, ref) => {
  const { onSubmit, isSubmitting = false } = props;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    interest: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select your area of interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your background and vision";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const interestOptions = [
    { value: "franchise", label: "Franchise" },
    { value: "distribution", label: "Distribution" },
    { value: "export", label: "Export" },
    { value: "strategic", label: "Strategic Partnership" },
  ];

  // Custom Card component
  const Card = ({ children, className = "" }) => (
    <div className={`rounded-xl bg-white shadow-xl ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children, className = "" }) => (
    <div className={`p-8 pb-0 ${className}`}>{children}</div>
  );

  const CardTitle = ({ children, className = "" }) => (
    <h3 className={`text-3xl font-bold text-center ${className}`}>
      {children}
    </h3>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-8 ${className}`}>{children}</div>
  );

  // Custom Input component
  const Input = ({
    id,
    type = "text",
    value,
    onChange,
    placeholder,
    className = "",
  }) => (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );

  // Custom Label component
  const Label = ({ htmlFor, children, className = "" }) => (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-semibold text-gray-700 mb-2 ${className}`}
    >
      {children}
    </label>
  );

  // Custom Textarea component
  const Textarea = ({
    id,
    value,
    onChange,
    placeholder,
    rows = 3,
    className = "",
  }) => (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );

  // Custom Select components
  const Select = ({ value, onValueChange, children }) => {
    const handleChange = (e) => {
      onValueChange(e.target.value);
    };

    return (
      <select
        value={value}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {children}
      </select>
    );
  };

  // Custom Button component
  const Button = ({
    type = "button",
    variant = "default",
    size = "default",
    children,
    disabled = false,
    className = "",
    onClick,
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
      default:
        "bg-gradient-to-r from-[#0047AB] to-[#0047AB] text-white hover:from-[#0047AB] hover:to-[#0047AB] shadow-md hover:shadow-lg",
      success:
        "bg-gradient-to-r from-[#0047AB] to-[#0047AB] text-white hover:from-[#0047AB] hover:to-[#0047AB] shadow-md hover:shadow-lg",
    };

    const sizeClasses = {
      default: "h-12 py-3 px-6",
      lg: "h-14 px-8 text-base",
    };

    return (
      <button
        type={type}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  // Custom FileUpload component
  const FileUpload = ({ onFileSelect, selectedFile, placeholder }) => {
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        onFileSelect(file);
      }
    };

    return (
      <div className="flex flex-col gap-2">
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#0047AB] transition-colors bg-gray-50 hover:bg-blue-50">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500 text-center px-4">
              {placeholder}
            </p>
            <p className="text-xs text-gray-400">PDF, DOC, DOCX (max 5MB)</p>
          </div>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        {selectedFile && (
          <div className="flex items-center gap-2 text-sm text-[#0047AB] bg-blue-50 rounded-lg p-3 mt-2">
            <FileText className="w-4 h-4" />
            <span>Selected: {selectedFile.name}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="enquiry" className="py-10 md:py-16 px-4 bg-white" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Express Your Interest
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            Take the first step towards a successful partnership with Weinber. Our
            team will contact you within 24-48 hours.
          </p>
        </div>

        <Card className="shadow-xl border border-gray-100">
          <CardHeader className="">
            <CardTitle className="text-black bg-gradient-to-r from-[#0047AB] to-[#0047AB] bg-clip-text">
              Business Opportunity Application
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => updateFormData("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className={
                      errors.fullName
                        ? "border-blue-500 ring-1 ring-blue-500"
                        : ""
                    }
                  />
                  {errors.fullName && (
                    <p className="text-sm text-[#0047AB] mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className={
                      errors.email ? "border-blue-500 ring-1 ring-blue-500" : ""
                    }
                  />
                  {errors.email && (
                    <p className="text-sm text-[#0047AB] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className={
                      errors.phone ? "border-blue-500 ring-1 ring-blue-500" : ""
                    }
                  />
                  {errors.phone && (
                    <p className="text-sm text-[#0047AB] mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      updateFormData("companyName", e.target.value)
                    }
                    placeholder="Your company name (optional)"
                  />
                </div>
              </div>

              {/* Interest Selection */}
              <div className="space-y-2">
                <Label>Area of Interest *</Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => updateFormData("interest", value)}
                >
                  <option value="">--- Select Your Area of Interest ---</option>
                  {interestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {errors.interest && (
                  <p className="text-sm text-[#0047AB] mt-1">
                    {errors.interest}
                  </p>
                )}
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label>Upload Your Resume/Business Profile</Label>
                <FileUpload
                  onFileSelect={(file) => updateFormData("file", file)}
                  selectedFile={formData.file}
                  placeholder="Drag & drop your file here or click to browse"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Background & Vision Statement *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  placeholder="Please describe your business background, experience, and your vision for this partnership opportunity..."
                  rows={5}
                  className={
                    errors.message ? "border-blue-500 ring-1 ring-blue-500" : ""
                  }
                />
                {errors.message && (
                  <p className="text-sm text-[#0047AB] mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="w-full text-lg cursor-pointer font-semibold py-4 transition-all duration-300 transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Submitting Application...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
});

// Add display name for better debugging
EnquiryForm.displayName = "EnquiryForm";