// import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

import {
  // Alert,
  Box,
  // Button,
  // Checkbox,
  // CircularProgress,
  // Container,
  // FormControlLabel,
  // Link,
  // Stack,
  // TextField,
  // Typography,
} from "@mui/material";

// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
// import MailOutlineIcon from "@mui/icons-material/MailOutlined";

// import HCaptcha from "@hcaptcha/react-hcaptcha";

import { CBreadcrumbs } from "src/components/common";
import { ContactUs } from "src/containers/contactUs";

// const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

// interface ContactForm {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   message: string;
//   subscribe: boolean;
// }

// type FormStatus = "success" | "error" | null;

// const initialForm: ContactForm = {
//   name: "",
//   phone: "",
//   email: "",
//   address: "",
//   message: "",
//   subscribe: false,
// };

const ContactPage = () => {
  // const [form, setForm] = useState<ContactForm>({ ...initialForm });
  // const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState<FormStatus>(null);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // const captchaRef = useRef<HCaptcha>(null);

  // const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = event.target;

  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));

  //   if (status !== null) {
  //     setStatus(null);
  //   }
  // };

  // const resetCaptcha = () => {
  //   setCaptchaToken(null);
  //   captchaRef.current?.resetCaptcha();
  // };

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   if (loading) {
  //     return;
  //   }

  //   if (!captchaToken) {
  //     setErrorMessage("Please complete the CAPTCHA verification.");
  //     setStatus("error");
  //     return;
  //   }

  //   setLoading(true);
  //   setStatus(null);
  //   setErrorMessage("");

  //   try {
  //     const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  //     if (!accessKey) {
  //       throw new Error("Web3Forms access key is missing.");
  //     }

  //     const payload = {
  //       access_key: accessKey,
  //       subject: "New Contact Us Message - Harvest Fresh",
  //       from_name: "Harvest Fresh Website",
  //       name: form.name.trim(),
  //       phone: form.phone.trim(),
  //       email: form.email.trim(),
  //       address: form.address.trim(),
  //       message: form.message.trim(),
  //       newsletter_subscription: form.subscribe ? "Yes" : "No",
  //       "h-captcha-response": captchaToken,
  //     };

  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const result = await response.json();

  //     if (!response.ok || !result.success) {
  //       throw new Error(result.message || "Failed to send your message.");
  //     }

  //     setForm({ ...initialForm });
  //     setStatus("success");
  //     resetCaptcha();
  //   } catch (error) {
  //     console.error("Web3Forms submission error:", error);

  //     setErrorMessage(
  //       error instanceof Error ? error.message : "Something went wrong. Please try again.",
  //     );

  //     setStatus("error");
  //     resetCaptcha();
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const inputStyle = {
  //   "& .MuiOutlinedInput-root": {
  //     borderRadius: "5px",
  //     backgroundColor: "#fff",
  //     fontSize: 14,
  //   },
  //   "& .MuiOutlinedInput-input": {
  //     py: 1.5,
  //   },
  // };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
    >
      {/* BREADCRUMBS */}
      <Box
        sx={{
          borderBottom: "1px solid #f1f1f1",
          py: 2,
        }}
      >
        <CBreadcrumbs page="Contact Us" />
      </Box>

      {/* CONTACT SECTION */}
    

      <ContactUs />

      {/* GOOGLE MAPS */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 400 },
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          title="XO Harvest Fresh Location"
          src="https://www.google.com/maps?q=100+East+Rand+Road+Arlington+Heights+IL+60004&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactPage;
